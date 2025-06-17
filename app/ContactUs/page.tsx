"use client";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

// ✅ Reusable InputField component
interface InputFieldProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-lg focus:border-[#0B95A2] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0B95A2]/30 text-white placeholder-white/50 transition-all duration-500 transform focus:scale-[1.02]"
    />
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#0B95A2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
  </div>
);

// ✅ Reusable TextArea component
interface TextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  value,
  rows = 4,
  onChange,
}) => (
  <div className="relative group">
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      rows={rows}
      onChange={onChange}
      className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-lg focus:border-[#0B95A2] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0B95A2]/30 text-white placeholder-white/50 transition-all duration-500 transform focus:scale-[1.02] resize-none"
    />
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#0B95A2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    companyName: "",
    phone: "",
    email: "",
    state: "",
    message: "",
  });
  const [optInNotifications, setOptInNotifications] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Contact form submitted:", formData);
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

        <div className="relative z-10 max-w-lg ">
          <Link
            href="/Hero"
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 rounded-full backdrop-blur-sm hover:border-[#0B95A2] hover:bg-white/5 transition-all duration-300 group"
          >
            <FaArrowRight className="transform rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Website
          </Link>

          <div className="mb-8">
            <h1 className="text-8xl font-thin mb-4 bg-gradient-to-r from-white via-[#0B95A2] to-white bg-clip-text text-transparent animate-pulse">
              Contact Us
            </h1>
            <h2 className="text-4xl font-light text-white tracking-wide mb-6">
              Fortinet.Shopping
            </h2>
          </div>

          <p className="text-white/70 text-lg leading-relaxed font-light mb-8">
            Your questions matter to us. Contact us for product details, expert
            support, or general inquiries to improve your experience.
          </p>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/20 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#0B95A2]/20 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-[#0B95A2]" />
              </div>
              <div>
                <h4 className="text-white font-medium">Address</h4>
                <p className="text-white/70 text-sm">
                  123 Cyber Street
                  <br />
                  Tech City, TC 12345
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/20 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#0B95A2]/20 rounded-full flex items-center justify-center">
                <FaPhone className="text-[#0B95A2]" />
              </div>
              <div>
                <h4 className="text-white font-medium">Phone</h4>
                <p className="text-white/70 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/20 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#0B95A2]/20 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-[#0B95A2]" />
              </div>
              <div>
                <h4 className="text-white font-medium">Email</h4>
                <p className="text-white/70 text-sm">
                  support@fortinet.shopping
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
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

        <div className="w-[700px] max-w-xl relative z-10 -ml-4">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-2xl transition-all duration-500">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-2">
                Contact Us
              </h3>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
                <InputField
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                />
              </div>

              <InputField
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <InputField
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>

              <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <TextArea
                name="message"
                placeholder="Message"
                value={formData.message}
                rows={4}
                onChange={handleTextAreaChange}
              />

              <div className="flex items-start gap-3 mt-6">
                <input
                  type="checkbox"
                  id="notifications"
                  checked={optInNotifications}
                  onChange={(e) => setOptInNotifications(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-[#0B95A2] bg-white/10 border-white/30 rounded transition-transform duration-300 hover:scale-110"
                />
                <label
                  htmlFor="notifications"
                  className="text-sm text-white/70 font-light"
                >
                  Sign Up for Email Notifications
                </label>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 mt-8 bg-gradient-to-r from-[#0B95A2] to-[#0F302D] text-white font-medium rounded-lg hover:shadow-xl hover:shadow-[#0B95A2]/30 transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
