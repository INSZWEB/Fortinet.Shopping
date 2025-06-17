"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function UserNavbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white/10 backdrop-blur-md border-b border-white/10 shadow-sm fixed top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-cyan-300"
        >
          FORTINET<span className="text-white">.SHOPPING</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link
            href="/products"
            className="hover:text-cyan-300 transition-colors"
          >
            All Products
          </Link>
          <Link href="/about" className="hover:text-cyan-300 transition-colors">
            About Us
          </Link>
          <Link
            href="/promotions"
            className="hover:text-cyan-300 transition-colors"
          >
            Promotions
          </Link>
          <Link
            href="/resources"
            className="hover:text-cyan-300 transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="hover:text-cyan-300 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Cart + Sign Up */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="text-white hover:text-cyan-300 transition-all"
          >
            <FaShoppingCart className="text-xl" />
          </Link>
          <Link
            href="/signup"
            className="bg-gradient-to-r from-cyan-500 to-teal-400 text-black px-5 py-2 rounded-md text-sm font-semibold shadow hover:scale-105 transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
