import { useState } from "react";
import { X, Mail, Lock, Globe, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignInModal() {
  const { login, setShowSignIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      login(email, name || undefined);
      setLoading(false);
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={() => setShowSignIn(false)}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top decorative bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500" />

        <div className="p-8">
          <button
            onClick={() => setShowSignIn(false)}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 transition text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-9 h-9 bg-[#1e293b] rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-xl font-bold text-[#1e293b]">
              Cultura Vancouver
            </span>
          </div>

          <h2 className="text-2xl font-bold text-[#1e293b] mb-1">
            {mode === "signin" ? "Welcome back" : "Join the community"}
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            {mode === "signin"
              ? "Sign in to save events and get personalized recommendations."
              : "Create your account to start exploring cultural events."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Maria Santos"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder-gray-400"
                />
              </div>
            )}

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !email}
              className="w-full py-3 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white rounded-xl font-semibold transition flex items-center justify-center space-x-2 mt-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>
                    {mode === "signin" ? "Sign In" : "Create Account"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-400">
                or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {["Google", "Facebook"].map((provider) => (
              <button
                key={provider}
                onClick={() => {
                  login(
                    `user@${provider.toLowerCase()}.com`,
                    `${provider} User`,
                  );
                  navigate("/dashboard");
                }}
                className="py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                {provider}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            {mode === "signin"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="text-green-600 font-semibold hover:underline"
            >
              {mode === "signin" ? "Sign up free" : "Sign in"}
            </button>
          </p>

          <p className="text-center text-xs text-gray-400 mt-3">
            🎓 Demo for MBA presentation — any email works
          </p>
        </div>
      </div>
    </div>
  );
}
