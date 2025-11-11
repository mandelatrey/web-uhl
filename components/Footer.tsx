import Image from "next/image";
import Link from "next/link";
import { footerItems } from "@/lib/info";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-brown w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-12">
        {/* Main Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
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

          {/* Footer Columns */}
          {footerItems.map((section) => (
            <div key={section.title} className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-semibold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
                    >
                      {'icon' in link && link.icon === "phone" && <Phone size={16} />}
                      {'icon' in link && link.icon === "email" && <Mail size={16} />}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} Uhlendorf Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
