"use client";
import React, { useState } from "react";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

// ✅ Reusable InputField moved OUTSIDE to avoid re-renders on input
interface InputFieldProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  showToggle?: boolean;
  onToggle?: () => void;
  delay?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  value,
  showToggle,
  onToggle,
  delay,
  onChange,
}) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-5 py-4 pr-12 bg-white/5 border border-white/20 rounded-lg focus:border-[#0B95A2] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0B95A2]/30 text-white placeholder-white/50 transition-all duration-500 transform focus:scale-[1.02]"
    />
    {showToggle !== undefined && (
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-[#0B95A2] transition-all duration-300 hover:scale-110"
      >
        {showToggle ? <FaEyeSlash /> : <FaEye />}
      </button>
    )}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#0B95A2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
  </div>
);

const AccountCreationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const TwinklingDots = ({ count = 20 }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#0B95A2] rounded-full animate-pulse"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${1.5 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0F302D] to-[#0B95A2] text-white flex">
      {/* Left Section */}
      <div className="flex-1 relative flex items-center justify-center p-8">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(11, 149, 162, 0.3)" />
                <stop offset="100%" stopColor="rgba(15, 48, 45, 0.2)" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 Q300,200 600,400 T1200,400 L1200,1000 L0,1000 Z"
              fill="url(#waveGrad)"
            />
            <path
              d="M0,500 Q400,300 800,500 T1600,500 L1600,1000 L0,1000 Z"
              fill="url(#waveGrad)"
              opacity="0.4"
            />
          </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#0B95A2] rounded-full opacity-10 blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#0F302D] rounded-full opacity-20 blur-xl animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>

        <TwinklingDots count={25} />

        <div className="relative z-10 max-w-lg">
          <Link
            href="/Hero"
            className="mb-18 px-6 py-2 border border-white/20 rounded-full backdrop-blur-sm hover:border-[#0B95A2] hover:bg-white/5 transition-all duration-300 flex items-center gap-2 group"
          >
            <FaArrowRight className="transform rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Website
          </Link>

          <div className="mb-8">
            <h1 className="text-8xl font-thin mb-4 bg-gradient-to-r from-white via-[#0B95A2] to-white bg-clip-text text-transparent animate-pulse">
              Welcome to
            </h1>
            <h2 className="text-8xl font-light text-white tracking-wide">
              Fortinet.Shopping
            </h2>
          </div>

          <p className="text-white/70 text-lg leading-relaxed font-light">
            Create your account to explore top-tier cybersecurity products,
            enjoy exclusive deals, and manage your orders seamlessly.
          </p>
        </div>
      </div>

      {/* Right Sectionn */}
      <div className="flex-1 relative flex items-center justify-center p-8">
        <TwinklingDots count={30} />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/3 right-1/3 w-20 h-20 bg-[#0B95A2] rounded-full opacity-5 blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white rounded-full opacity-5 blur-lg animate-bounce"
            style={{ animationDuration: "4s", animationDelay: "2s" }}
          ></div>
        </div>

        <div className="w-full max-w-lg relative z-10">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-2xl transition-all duration-500">
            <div className="text-center mb-10">
              <h3 className="text-4xl font-light text-white mb-4">
                Create an Account
              </h3>
              <p className="text-white/60 text-lg">
                Already have an Account?
                <a
                  href="/LogIn"
                  className="text-[#0B95A2] hover:text-white ml-1 transition-colors duration-300 hover:underline"
                >
                  Log In
                </a>
              </p>
            </div>

            <div className="space-y-6">
              <InputField
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />

              <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <InputField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                showToggle={showPassword}
                onToggle={() => setShowPassword(!showPassword)}
                onChange={handleInputChange}
              />

              <InputField
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                showToggle={showConfirmPassword}
                onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
                onChange={handleInputChange}
              />

              <div className="flex items-start gap-3 mt-8">
                <input
                  type="checkbox"
                  id="terms"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-[#0B95A2] bg-white/10 border-white/30 rounded transition-transform duration-300 hover:scale-110"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-white/70 font-light"
                >
                  I agree to the{" "}
                  <a
                    href="/terms"
                    className="text-[#0B95A2] hover:text-white transition-colors duration-300 hover:underline"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!isAgreed}
                className="w-full py-4 mt-10 bg-gradient-to-r from-[#0B95A2] to-[#0F302D] text-white font-medium rounded-lg hover:shadow-xl hover:shadow-[#0B95A2]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-1"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCreationPage;
