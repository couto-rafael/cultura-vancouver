import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Calendar,
  MapPin,
  DollarSign,
  Globe,
  Heart,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  Clock,
  Accessibility,
  Info,
} from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const cultures = [
  "Chinese",
  "Filipino",
  "South Asian",
  "Latin American",
  "First Nations",
  "Japanese",
  "Korean",
  "Italian",
  "Middle Eastern",
  "African",
  "Vietnamese",
  "Caribbean",
  "European",
  "Brazilian",
  "Iranian/Persian",
  "Indigenous",
  "Other",
];
const categories = [
  "Festival",
  "Music",
  "Food",
  "Museum",
  "Community",
  "Theatre",
  "Workshop",
  "Sports",
  "Art Exhibition",
  "Film",
  "Dance",
  "Religious",
  "Other",
];
const tags = [
  "Family Friendly",
  "Free",
  "Music",
  "Food",
  "Dance",
  "Art",
  "Film",
  "Workshop",
  "Outdoor",
  "All Ages",
  "Adults Only",
  "Educational",
  "Culinary",
  "Live Performance",
  "Market",
  "Traditional",
  "Contemporary",
];
const languages = [
  "English",
  "Mandarin",
  "Cantonese",
  "Punjabi",
  "Spanish",
  "Portuguese",
  "Tagalog",
  "Korean",
  "Japanese",
  "Vietnamese",
  "Arabic",
  "Hindi",
  "French",
  "Italian",
  "Farsi",
  "Multiple",
];
const neighborhoods = [
  "Vancouver",
  "Richmond",
  "Burnaby",
  "Surrey",
  "North Vancouver",
  "West Vancouver",
  "Coquitlam",
  "Port Moody",
  "New Westminster",
  "Delta",
  "Langley",
];

interface FormData {
  // Step 1 - Basics
  title: string;
  culture: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  // Step 2 - When & Where
  date: string;
  startTime: string;
  endTime: string;
  venueName: string;
  address: string;
  neighborhood: string;
  // Step 3 - Details
  priceType: string;
  priceMin: string;
  priceMax: string;
  language: string;
  familyFriendly: boolean;
  wheelchairAccess: boolean;
  quietSpace: boolean;
  captions: boolean;
  ticketUrl: string;
  websiteUrl: string;
  // Step 4 - Organizer & Media
  organizerName: string;
  organizerEmail: string;
  organizerPhone: string;
  transitInfo: string;
  parkingInfo: string;
  safetyNotes: string;
  imageUrl: string;
}

const emptyForm: FormData = {
  title: "",
  culture: "",
  category: "",
  shortDescription: "",
  fullDescription: "",
  tags: [],
  date: "",
  startTime: "",
  endTime: "",
  venueName: "",
  address: "",
  neighborhood: "",
  priceType: "Free",
  priceMin: "",
  priceMax: "",
  language: "English",
  familyFriendly: false,
  wheelchairAccess: false,
  quietSpace: false,
  captions: false,
  ticketUrl: "",
  websiteUrl: "",
  organizerName: "",
  organizerEmail: "",
  organizerPhone: "",
  transitInfo: "",
  parkingInfo: "",
  safetyNotes: "",
  imageUrl: "",
};

const stepTitles = [
  "Event Basics",
  "When & Where",
  "Details & Access",
  "Organizer & Media",
];

function StepIndicator({ step, current }: { step: number; current: Step }) {
  const done = step < current;
  const active = step === current;
  return (
    <div className={`flex items-center ${step < 4 ? "flex-1" : ""}`}>
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
          done
            ? "bg-green-500 text-white"
            : active
              ? "bg-[#1e293b] text-white ring-4 ring-[#1e293b]/20"
              : "bg-gray-200 text-gray-500"
        }`}
      >
        {done ? <CheckCircle className="w-5 h-5" /> : step}
      </div>
      {step < 4 && (
        <div
          className={`flex-1 h-1 mx-2 rounded ${done ? "bg-green-400" : "bg-gray-200"}`}
        />
      )}
    </div>
  );
}

export default function CreateEvent() {
  const navigate = useNavigate();
  const { user, setShowSignIn } = useAuth();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const update = (field: keyof FormData, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleTag = (tag: string) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const validateStep = (): boolean => {
    const newErrors: typeof errors = {};
    if (currentStep === 1) {
      if (!form.title.trim()) newErrors.title = "Event title is required";
      if (!form.culture) newErrors.culture = "Please select a culture";
      if (!form.category) newErrors.category = "Please select a category";
      if (!form.shortDescription.trim())
        newErrors.shortDescription = "Short description is required";
    }
    if (currentStep === 2) {
      if (!form.date) newErrors.date = "Event date is required";
      if (!form.startTime) newErrors.startTime = "Start time is required";
      if (!form.venueName.trim())
        newErrors.venueName = "Venue name is required";
      if (!form.neighborhood)
        newErrors.neighborhood = "Please select a neighborhood";
    }
    if (currentStep === 4) {
      if (!form.organizerName.trim())
        newErrors.organizerName = "Organizer name is required";
      if (!form.organizerEmail.trim())
        newErrors.organizerEmail = "Contact email is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validateStep()) setCurrentStep((s) => Math.min(s + 1, 4) as Step);
  };
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 1) as Step);

  const handleSubmit = () => {
    if (!validateStep()) return;
    setSubmitted(true);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">📅</div>
          <h2 className="text-2xl font-bold text-[#1e293b] mb-2">
            Sign in to submit an event
          </h2>
          <p className="text-gray-500 mb-6">
            Share your cultural event with Vancouver's community
          </p>
          <button
            onClick={() => setShowSignIn(true)}
            className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">
            Event Submitted!
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold text-[#1e293b]">
              {form.title || "Your event"}
            </span>{" "}
            has been submitted for review.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Our team will review it within 24–48 hours. You'll receive a
            confirmation at <strong>{form.organizerEmail}</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-6 py-3 bg-[#1e293b] hover:bg-[#334155] text-white rounded-xl font-semibold transition"
            >
              View Dashboard
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm(emptyForm);
                setCurrentStep(1);
              }}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inputCls = (field: keyof FormData) =>
    `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder-gray-400 transition ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200"
    }`;

  const labelCls = "block text-sm font-semibold text-gray-700 mb-1.5";
  const errorCls = "text-xs text-red-500 mt-1 flex items-center space-x-1";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1e293b] py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-1">
            Submit a Cultural Event
          </h1>
          <p className="text-gray-300 text-sm">
            Share your event with Vancouver's multicultural community — it's
            free.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Step Indicator */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
          <div className="flex items-center">
            {[1, 2, 3, 4].map((s) => (
              <StepIndicator key={s} step={s} current={currentStep} />
            ))}
          </div>
          <div className="flex justify-between mt-3">
            {stepTitles.map((t, i) => (
              <span
                key={t}
                className={`text-xs font-medium ${i + 1 === currentStep ? "text-[#1e293b]" : "text-gray-400"}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-[#1e293b] mb-6">
            Step {currentStep}: {stepTitles[currentStep - 1]}
          </h2>

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div>
                <label className={labelCls}>Event Title *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
                  placeholder="e.g. Filipino Heritage Night 2026"
                  className={inputCls("title")}
                />
                {errors.title && (
                  <p className={errorCls}>
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.title}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Cultural Community *</label>
                  <select
                    value={form.culture}
                    onChange={(e) => update("culture", e.target.value)}
                    className={inputCls("culture")}
                  >
                    <option value="">Select culture...</option>
                    {cultures.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.culture && (
                    <p className={errorCls}>
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.culture}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelCls}>Event Category *</label>
                  <select
                    value={form.category}
                    onChange={(e) => update("category", e.target.value)}
                    className={inputCls("category")}
                  >
                    <option value="">Select category...</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className={errorCls}>
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.category}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className={labelCls}>
                  Short Description *{" "}
                  <span className="font-normal text-gray-400">
                    (max 150 chars)
                  </span>
                </label>
                <input
                  type="text"
                  value={form.shortDescription}
                  onChange={(e) => update("shortDescription", e.target.value)}
                  maxLength={150}
                  placeholder="A one-sentence summary of your event"
                  className={inputCls("shortDescription")}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.shortDescription ? (
                    <p className={errorCls}>
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.shortDescription}</span>
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-gray-400">
                    {form.shortDescription.length}/150
                  </span>
                </div>
              </div>

              <div>
                <label className={labelCls}>
                  Full Description{" "}
                  <span className="font-normal text-gray-400">
                    (optional but recommended)
                  </span>
                </label>
                <textarea
                  rows={5}
                  value={form.fullDescription}
                  onChange={(e) => update("fullDescription", e.target.value)}
                  placeholder="Tell people what to expect: activities, performances, food, history, etc."
                  className={`${inputCls("fullDescription")} resize-none`}
                />
              </div>

              <div>
                <label className={labelCls}>
                  Tags{" "}
                  <span className="font-normal text-gray-400">
                    (select all that apply)
                  </span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${
                        form.tags.includes(tag)
                          ? "bg-[#1e293b] text-white border-[#1e293b]"
                          : "bg-white text-gray-600 border-gray-200 hover:border-green-400"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div>
                <label className={labelCls}>
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Event Date *
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className={inputCls("date")}
                />
                {errors.date && (
                  <p className={errorCls}>
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.date}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>
                    <Clock className="w-4 h-4 inline mr-1" />
                    Start Time *
                  </label>
                  <input
                    type="time"
                    value={form.startTime}
                    onChange={(e) => update("startTime", e.target.value)}
                    className={inputCls("startTime")}
                  />
                  {errors.startTime && (
                    <p className={errorCls}>
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.startTime}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelCls}>
                    <Clock className="w-4 h-4 inline mr-1" />
                    End Time
                  </label>
                  <input
                    type="time"
                    value={form.endTime}
                    onChange={(e) => update("endTime", e.target.value)}
                    className={inputCls("endTime")}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Venue Name *
                </label>
                <input
                  type="text"
                  value={form.venueName}
                  onChange={(e) => update("venueName", e.target.value)}
                  placeholder="e.g. Vancouver Convention Centre"
                  className={inputCls("venueName")}
                />
                {errors.venueName && (
                  <p className={errorCls}>
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.venueName}</span>
                  </p>
                )}
              </div>

              <div>
                <label className={labelCls}>Full Address</label>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  placeholder="999 Canada Place, Vancouver, BC V6C 3C1"
                  className={inputCls("address")}
                />
              </div>

              <div>
                <label className={labelCls}>Neighborhood / Area *</label>
                <select
                  value={form.neighborhood}
                  onChange={(e) => update("neighborhood", e.target.value)}
                  className={inputCls("neighborhood")}
                >
                  <option value="">Select neighborhood...</option>
                  {neighborhoods.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                {errors.neighborhood && (
                  <p className={errorCls}>
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.neighborhood}</span>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div>
                <label className={labelCls}>
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Price Type *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Free", "Donation", "Paid"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => update("priceType", type)}
                      className={`py-2.5 rounded-xl border-2 font-medium text-sm transition ${
                        form.priceType === type
                          ? "bg-[#1e293b] text-white border-[#1e293b]"
                          : "border-gray-200 text-gray-600 hover:border-green-400"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {form.priceType === "Paid" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Min Price (CAD)</label>
                    <input
                      type="number"
                      value={form.priceMin}
                      onChange={(e) => update("priceMin", e.target.value)}
                      placeholder="0"
                      min="0"
                      className={inputCls("priceMin")}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Max Price (CAD)</label>
                    <input
                      type="number"
                      value={form.priceMax}
                      onChange={(e) => update("priceMax", e.target.value)}
                      placeholder="50"
                      min="0"
                      className={inputCls("priceMax")}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className={labelCls}>
                  <Globe className="w-4 h-4 inline mr-1" />
                  Primary Language
                </label>
                <select
                  value={form.language}
                  onChange={(e) => update("language", e.target.value)}
                  className={inputCls("language")}
                >
                  {languages.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-pink-50 border border-pink-100 rounded-xl p-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.familyFriendly}
                    onChange={(e) => update("familyFriendly", e.target.checked)}
                    className="w-5 h-5 text-pink-500 rounded"
                  />
                  <div>
                    <span className="font-semibold text-gray-800 flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-pink-500" />
                      <span>Family Friendly</span>
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Suitable for children and families
                    </p>
                  </div>
                </label>
              </div>

              <div>
                <label className={labelCls}>
                  <Accessibility className="w-4 h-4 inline mr-1" />
                  Accessibility Features
                </label>
                <div className="space-y-3">
                  {[
                    {
                      key: "wheelchairAccess",
                      label: "Wheelchair Accessible",
                      desc: "Venue is fully accessible for wheelchairs",
                    },
                    {
                      key: "quietSpace",
                      label: "Quiet Space Available",
                      desc: "Designated low-sensory area available",
                    },
                    {
                      key: "captions",
                      label: "Captions / ASL",
                      desc: "Live captions or sign language provided",
                    },
                  ].map((opt) => (
                    <label
                      key={opt.key}
                      className="flex items-start space-x-3 cursor-pointer p-3 rounded-xl border border-gray-100 hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={form[opt.key as keyof FormData] as boolean}
                        onChange={(e) =>
                          update(opt.key as keyof FormData, e.target.checked)
                        }
                        className="w-5 h-5 text-green-500 rounded mt-0.5"
                      />
                      <div>
                        <span className="font-medium text-gray-700">
                          {opt.label}
                        </span>
                        <p className="text-xs text-gray-400">{opt.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>
                    Ticket URL{" "}
                    <span className="font-normal text-gray-400">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="url"
                    value={form.ticketUrl}
                    onChange={(e) => update("ticketUrl", e.target.value)}
                    placeholder="https://eventbrite.com/..."
                    className={inputCls("ticketUrl")}
                  />
                </div>
                <div>
                  <label className={labelCls}>
                    Event Website{" "}
                    <span className="font-normal text-gray-400">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="url"
                    value={form.websiteUrl}
                    onChange={(e) => update("websiteUrl", e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className={inputCls("websiteUrl")}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div className="space-y-5">
              <div>
                <label className={labelCls}>
                  Organizer / Organization Name *
                </label>
                <input
                  type="text"
                  value={form.organizerName}
                  onChange={(e) => update("organizerName", e.target.value)}
                  placeholder="e.g. Filipino-Canadian Community Association"
                  className={inputCls("organizerName")}
                />
                {errors.organizerName && (
                  <p className={errorCls}>
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.organizerName}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Contact Email *</label>
                  <input
                    type="email"
                    value={form.organizerEmail}
                    onChange={(e) => update("organizerEmail", e.target.value)}
                    placeholder="info@organization.ca"
                    className={inputCls("organizerEmail")}
                  />
                  {errors.organizerEmail && (
                    <p className={errorCls}>
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.organizerEmail}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelCls}>
                    Phone{" "}
                    <span className="font-normal text-gray-400">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    value={form.organizerPhone}
                    onChange={(e) => update("organizerPhone", e.target.value)}
                    placeholder="+1 (604) 555-0100"
                    className={inputCls("organizerPhone")}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>
                  Event Banner Image URL{" "}
                  <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <input
                  type="url"
                  value={form.imageUrl}
                  onChange={(e) => update("imageUrl", e.target.value)}
                  placeholder="https://images.pexels.com/..."
                  className={inputCls("imageUrl")}
                />
                <p className="text-xs text-gray-400 mt-1 flex items-center space-x-1">
                  <Info className="w-3.5 h-3.5" />
                  <span>
                    Link to a high-quality image (Pexels, Unsplash, or your own
                    hosted image)
                  </span>
                </p>
              </div>

              <div>
                <label className={labelCls}>
                  Getting There — Transit Info{" "}
                  <span className="font-normal text-gray-400">
                    (recommended)
                  </span>
                </label>
                <input
                  type="text"
                  value={form.transitInfo}
                  onChange={(e) => update("transitInfo", e.target.value)}
                  placeholder="e.g. SkyTrain Canada Line: Canada Place Station"
                  className={inputCls("transitInfo")}
                />
              </div>

              <div>
                <label className={labelCls}>
                  Parking Info{" "}
                  <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  value={form.parkingInfo}
                  onChange={(e) => update("parkingInfo", e.target.value)}
                  placeholder="e.g. $15/day in Convention Centre parkade"
                  className={inputCls("parkingInfo")}
                />
              </div>

              <div>
                <label className={labelCls}>
                  Safety Notes{" "}
                  <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={form.safetyNotes}
                  onChange={(e) => update("safetyNotes", e.target.value)}
                  placeholder="Large crowds expected. First aid on site. Street closures..."
                  className={`${inputCls("safetyNotes")} resize-none`}
                />
              </div>

              {/* Summary Preview */}
              {form.title && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Summary Preview</span>
                  </h4>
                  <div className="space-y-1.5 text-sm text-green-700">
                    <p>
                      <strong>Event:</strong> {form.title}
                    </p>
                    {form.culture && (
                      <p>
                        <strong>Culture:</strong> {form.culture}
                      </p>
                    )}
                    {form.date && (
                      <p>
                        <strong>Date:</strong>{" "}
                        {new Date(form.date + "T00:00:00").toLocaleDateString(
                          "en-CA",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </p>
                    )}
                    {form.venueName && (
                      <p>
                        <strong>Venue:</strong> {form.venueName}
                        {form.neighborhood ? `, ${form.neighborhood}` : ""}
                      </p>
                    )}
                    <p>
                      <strong>Price:</strong>{" "}
                      {form.priceType === "Free"
                        ? "Free"
                        : form.priceType === "Donation"
                          ? "By donation"
                          : `$${form.priceMin || "0"}–$${form.priceMax || "?"} CAD`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={prev}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-gray-600 hover:bg-gray-100 disabled:opacity-0 disabled:pointer-events-none transition"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            {currentStep < 4 ? (
              <button
                onClick={next}
                className="flex items-center space-x-2 px-6 py-2.5 bg-[#1e293b] hover:bg-[#334155] text-white rounded-xl font-semibold transition"
              >
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center space-x-2 px-8 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Submit Event</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
