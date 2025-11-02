import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/info";

const Footer = () => {
  return (
    <footer className="bg-fruit-green w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-12">
        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Return to homepage">
              <Image
                src="/icons/uhlendorf-logo.svg"
                alt="Uhlendorf Innovations Logo"
                width={130}
                height={50}
                className="invert"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-white/70 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center md:text-left">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} Uhlendorf Innovations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
