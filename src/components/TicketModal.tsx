import { useState } from "react";
import {
  X,
  Download,
  Mail,
  Calendar,
  MapPin,
  Clock,
  User,
  Ticket,
} from "lucide-react";
import { Event } from "../data/events";
import { useAuth } from "../context/AuthContext";

interface TicketModalProps {
  event: Event;
  onClose: () => void;
}

// Deterministic fake QR code using SVG path — looks like a real QR
function QRCode({ value }: { value: string }) {
  // Generate a seeded pattern based on the value string
  const seed = value.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const size = 29;
  const cells: boolean[][] = [];

  for (let r = 0; r < size; r++) {
    cells[r] = [];
    for (let c = 0; c < size; c++) {
      // Fixed finder patterns (corners)
      const inTopLeft = r < 8 && c < 8;
      const inTopRight = r < 8 && c >= size - 8;
      const inBottomLeft = r >= size - 8 && c < 8;
      if (inTopLeft || inTopRight || inBottomLeft) {
        const lr = inTopLeft ? r : inTopRight ? r : r - (size - 8);
        const lc = inTopLeft ? c : inTopRight ? c - (size - 8) : c;
        const outerBorder = lr === 0 || lr === 6 || lc === 0 || lc === 6;
        const innerBox = lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4;
        cells[r][c] = outerBorder || innerBox;
      } else {
        // Pseudo-random data cells
        const hash = (seed * (r * 31 + c * 17 + 7)) % 97;
        cells[r][c] = hash > 45;
      }
    }
  }

  const cellSize = 8;
  const totalSize = size * cellSize;

  return (
    <svg
      width={totalSize}
      height={totalSize}
      viewBox={`0 0 ${totalSize} ${totalSize}`}
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-lg"
    >
      <rect width={totalSize} height={totalSize} fill="white" />
      {cells.map((row, r) =>
        row.map((filled, c) =>
          filled ? (
            <rect
              key={`${r}-${c}`}
              x={c * cellSize}
              y={r * cellSize}
              width={cellSize}
              height={cellSize}
              fill="#1e293b"
            />
          ) : null,
        ),
      )}
    </svg>
  );
}

export default function TicketModal({ event, onClose }: TicketModalProps) {
  const { user } = useAuth();
  const [step, setStep] = useState<"ticket" | "email-sent" | "pdf-saved">(
    "ticket",
  );
  const [emailLoading, setEmailLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);

  const ticketCode = `CVR-${event.id.toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
  const ticketHolder = user?.name || "Guest";
  const ticketEmail = user?.email || "guest@email.com";

  const handleEmail = () => {
    setEmailLoading(true);
    setTimeout(() => {
      setEmailLoading(false);
      setStep("email-sent");
    }, 1500);
  };

  const handlePDF = () => {
    setPdfLoading(true);
    setTimeout(() => {
      setPdfLoading(false);
      setStep("pdf-saved");
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* EMAIL SENT state */}
        {step === "email-sent" && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-[#1e293b] mb-2">
              Ticket sent!
            </h3>
            <p className="text-gray-500 text-sm mb-1">
              Your ticket has been sent to
            </p>
            <p className="font-semibold text-[#1e293b] mb-6">{ticketEmail}</p>
            <p className="text-xs text-gray-400 mb-6">
              Check your inbox (and spam folder). The ticket includes your QR
              code for entry.
            </p>
            <button
              onClick={() => setStep("ticket")}
              className="w-full py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
            >
              Back to ticket
            </button>
          </div>
        )}

        {/* PDF SAVED state */}
        {step === "pdf-saved" && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-[#1e293b] mb-2">
              PDF saved!
            </h3>
            <p className="text-gray-500 text-sm mb-2">
              Your ticket has been downloaded as
            </p>
            <p className="font-semibold text-[#1e293b] mb-1 text-sm font-mono bg-gray-100 px-3 py-1.5 rounded-lg inline-block">
              ticket-{ticketCode.toLowerCase()}.pdf
            </p>
            <p className="text-xs text-gray-400 mt-4 mb-6">
              Show the QR code at the event entrance for check-in.
            </p>
            <button
              onClick={() => setStep("ticket")}
              className="w-full py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
            >
              Back to ticket
            </button>
          </div>
        )}

        {/* MAIN TICKET state */}
        {step === "ticket" && (
          <>
            {/* Header */}
            <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] px-6 pt-6 pb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center">
                  <Ticket className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-semibold text-sm">
                  Cultura Vancouver
                </span>
                <span className="ml-auto text-green-400 text-xs font-bold bg-green-400/10 px-2 py-0.5 rounded-full">
                  ✓ CONFIRMED
                </span>
              </div>
              <h2 className="text-xl font-bold text-white leading-tight mb-1">
                {event.title}
              </h2>
              <p className="text-green-400 text-sm font-medium">
                {event.culture} · {event.category}
              </p>
            </div>

            {/* Ticket tear line */}
            <div className="relative flex items-center px-0 -mt-1">
              <div className="w-5 h-5 bg-gray-50 rounded-full -ml-2.5 flex-shrink-0 border-r border-dashed border-gray-300" />
              <div className="flex-1 border-t-2 border-dashed border-gray-300" />
              <div className="w-5 h-5 bg-gray-50 rounded-full -mr-2.5 flex-shrink-0 border-l border-dashed border-gray-300" />
            </div>

            {/* Ticket body */}
            <div className="px-6 py-5">
              {/* Event details */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    Date
                  </p>
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <p className="text-sm font-semibold text-[#1e293b] leading-tight">
                      {new Date(event.date + "T00:00:00").toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric", year: "numeric" },
                      )}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    Time
                  </p>
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <p className="text-sm font-semibold text-[#1e293b]">
                      {event.startTime}
                    </p>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    Venue
                  </p>
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <p className="text-sm font-semibold text-[#1e293b]">
                      {event.venueName}
                    </p>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    Ticket Holder
                  </p>
                  <div className="flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <p className="text-sm font-semibold text-[#1e293b]">
                      {ticketHolder}
                    </p>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-5 mb-5">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 mb-3">
                  <QRCode value={ticketCode} />
                </div>
                <p className="text-xs text-gray-500 mb-1">Scan at entry</p>
                <p className="font-mono text-sm font-bold text-[#1e293b] tracking-widest">
                  {ticketCode}
                </p>
              </div>

              {/* Price badge */}
              <div className="flex items-center justify-between mb-5 bg-green-50 rounded-xl px-4 py-3">
                <span className="text-sm text-gray-600">Total paid</span>
                <span className="text-lg font-bold text-green-600">
                  {event.priceType === "Free" ? "Free" : event.priceRange}
                </span>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleEmail}
                  disabled={emailLoading}
                  className="flex items-center justify-center space-x-2 py-3 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-green-400 hover:text-green-600 transition disabled:opacity-60"
                >
                  {emailLoading ? (
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Send email</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePDF}
                  disabled={pdfLoading}
                  className="flex items-center justify-center space-x-2 py-3 bg-[#1e293b] hover:bg-[#334155] text-white rounded-xl text-sm font-semibold transition disabled:opacity-60"
                >
                  {pdfLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Save PDF</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-4">
                🎓 Demo ticket — for MBA presentation only
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
