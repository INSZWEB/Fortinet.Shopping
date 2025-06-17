"use client";
import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaShieldAlt,
  FaNetworkWired,
  FaServer,
  FaWifi,
  FaLock,
  FaArrowRight,
  FaPlay,
  FaQuoteLeft,
} from "react-icons/fa";
import UserNavbar from "../components/UserNavbar/page";

const FortiNetHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const productCategories = [
    {
      icon: <FaShieldAlt className="text-3xl mb-4 text-blue-600" />,
      title: "FortiGate Entry",
      subtitle: "Entry-Level (Branch)",
      description:
        "Functional FortiWifi entry-level firewalls provide superior protection, detailed control, and simplified deployment, making them ideal for small business and remote office environments. FortiGate 40F-81F/FortiWifi 61F.",
      buttonText: "EXPLORE THIS RANGE",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
    },
    {
      icon: <FaNetworkWired className="text-3xl mb-4 text-green-600" />,
      title: "FortiGate Mid-Range",
      subtitle: "Mid-Range (Campus)",
      description:
        "FortiGates offer robust security, seamless control, scalability, and IT resource savings. This range includes high-performance security systems for campus environments.",
      buttonText: "EXPLORE THIS RANGE",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
    },
    {
      icon: <FaServer className="text-3xl mb-4 text-purple-600" />,
      title: "FortiGate High-End",
      subtitle: "High-End (Data Center)",
      description:
        "FortiGate NGFW offers dependable network traffic quality via app-based firewall. This range includes enterprise-grade security solutions for data centers.",
      buttonText: "EXPLORE THIS RANGE",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
    },
  ];

  const navItems = [
    "FortiGate Entry",
    "FortiGate Mid-Range",
    "FortiGate High-End",
    "FortiWifi",
    "FortiAP Series",
    "FortiSwitch Series",
  ];

  const heroImages = ["/img/hero1.png", "/img/hero1.png", "/img/hero1.png"];

  return (
    <div className="font-['Roboto'] min-h-screen bg-gray-50">
      <UserNavbar />
      {/* Hero Section */}
      <section className="relative min-h-[800px] bg-gradient-to-br from-black via-[#0F302D] to-[#0B95A2] overflow-hidden">
        {/* Optional Subtle Background Texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/stars-pattern.png')] bg-cover bg-center"></div>
        </div>

        {/* Animated Deep-Colored Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full opacity-30"
              style={{
                backgroundColor: ["#0B95A2", "#0F302D", "#0B5D63"][
                  Math.floor(Math.random() * 3)
                ],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulseSlow ${
                  3 + Math.random() * 4
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Optional Animated Glow or Nebula */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#0B95A2] opacity-10 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`text-white space-y-8 transform transition-all duration-800 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.2] tracking-tight pt-20">
                  <span className="block bg-gradient-to-r from-[#B5FFF3] via-[#80D0C7] to-[#5FB3A9] bg-clip-text text-transparent">
                    FORTINET
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-6xl font-light text-gray-300 tracking-wider">
                    SHOPPING
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed font-light">
                  Premium access to authentic Fortinet cybersecurity products —
                  fast, secure, and backed by real expert guidance.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-lg">
                <div className="flex items-center bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 shadow-inner">
                  <input
                    type="text"
                    placeholder="Search Product Here..."
                    className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none tracking-wide"
                  />
                  <button className="bg-gradient-to-r from-cyan-400 to-teal-300 text-black p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-md">
                    <FaSearch className="text-lg" />
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-7 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30 shadow-lg">
                  <FaPlay className="text-sm" />
                  <span>Talk to an Expert</span>
                </button>
                <button className="flex items-center gap-2 border border-white/20 hover:bg-white/10 px-7 py-4 rounded-lg text-lg font-medium text-white transition-all duration-300 hover:scale-105">
                  <span>Learn More</span>
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 flex justify-center lg:justify-end items-center ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative pt-20 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl transform transition-transform duration-500">
                <img
                  src="/img/shield.png"
                  alt="Fortinet Product"
                  className="w-[900px] h-[500px]"
                />

                {/* Optional glowing animated background */}
                <div className="absolute -z-10 top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-500 opacity-10 blur-3xl  animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="bg-black text-white px-6 py-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-10">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="px-5 py-3 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:scale-110"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Premium FortiGate Overview Section */}
      <section className="relative py-20 sm:py-28 bg-white text-gray-800 overflow-hidden">
        {/* Subtle decorative aura */}
        <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400 opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent mb-4">
              FortiGate Overview
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover industry-leading performance and centralized control with
              FortiGate’s hybrid-mesh firewall platform — scalable, visible, and
              secure across every environment.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className={`group bg-white border border-gray-100 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-300/40 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="inline-block p-5 rounded-full bg-cyan-50 border border-cyan-100 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-teal-300 transition-all duration-300">
                    {category.icon}
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                    {category.subtitle}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                    {category.description}
                  </p>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group">
                    <span>{category.buttonText}</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G-Series Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/.png')] bg-cover bg-center"></div>
        </div>

        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5"></div>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div
              className={`relative transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="relative group">
                <img
                  src="/img/hero2.png"
                  alt="FortiGate G-Series"
                  className="w-[700px] h-auto max-w-sm mx-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div
              className={`text-white space-y-8 transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-teal-400 to-blue-400 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
                    Next Generation Security
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Fortinet G-Series Firewalls:
                  </span>
                  <br />
                  <span className="text-teal-400">
                    Built for Tomorrow's Networks
                  </span>
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Advanced threat protection meets unparalleled performance and
                  cutting-edge SD-WAN capabilities. The FortiGate G-Series
                  delivers unmatched protection for high-speed, modern networks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center gap-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 group">
                  <FaQuoteLeft className="text-sm" />
                  <span>Get A Custom Quote</span>
                </button>

                <button className="flex items-center gap-3 border border-teal-400 hover:bg-teal-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group">
                  <span>Explore G-Series Models</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Feature Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                {[
                  { value: "99.9%", label: "Uptime" },
                  { value: "100Gbps", label: "Throughput" },
                  { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl font-bold text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FortiNetHero;
