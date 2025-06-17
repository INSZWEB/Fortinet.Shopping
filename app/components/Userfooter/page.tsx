"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const FortiNetFooter = () => {
  const exploreLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
    { name: "Get Quotes", href: "/quotes" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://facebook.com/fortinet",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/fortinet",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/company/fortinet",
      label: "LinkedIn",
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-teal-400" />,
      text: "123 FortiNet Drive, Cybersecurity Plaza, Tech City 12345",
      href: "https://maps.google.com/?q=FortiNet+Headquarters",
    },
    {
      icon: <FaEnvelope className="text-teal-400" />,
      text: "info@fortinet.shopping",
      href: "mailto:info@fortinet.shopping",
    },
    {
      icon: <FaPhone className="text-teal-400" />,
      text: "+1 (555) 123-FORT",
      href: "tel:+15551234367",
    },
  ];

  return (
    <footer className="font-['Roboto'] bg-gradient-to-br from-teal-800 via-teal-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-teal-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent hover:from-teal-200 hover:to-white transition-all duration-300">
                  FORTINET.
                </h3>
                <h4 className="text-xl font-light text-teal-200">SHOPPING</h4>
              </Link>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-gray-300">Follow us on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-teal-500 hover:border-teal-400 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-xl font-semibold text-white mb-6 relative">
              Explore
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400"></div>
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-xl font-semibold text-white mb-6 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400"></div>
            </h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="mt-1 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-300 leading-relaxed"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {contact.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <Link
                href="/terms"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <span className="hidden sm:block">|</span>
              <Link
                href="/privacy"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                Legal & Privacy
              </Link>
              <span className="hidden sm:block">|</span>
              <Link
                href="/cookies"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
              <span className="hidden sm:block">|</span>
              <Link
                href="/sitemap"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>

            <div className="text-sm text-gray-400 text-center lg:text-right">
              <p>© Copyright Fortinet.Shopping 2025. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Effect */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500"></div>
    </footer>
  );
};

export default FortiNetFooter;
