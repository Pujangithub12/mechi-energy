import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-dashed border-brand-400/60 flex items-center justify-center text-[10px] font-semibold tracking-wider text-brand-300">
              LOGO
            </div>
            <span className="text-xl font-bold text-white">
              Mechi <span className="text-brand-300 font-medium">Energy</span>
            </span>
          </div>
          <p className="text-sm text-brand-200 leading-relaxed max-w-sm">
            Mechi Energy Private Limited delivers solar PV and battery energy
            storage solutions in Nepal.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
            Pages
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-brand-200 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-brand-200">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-300 shrink-0 mt-0.5" />
              <span> Trade Tower, Thapathali, Kathmandu</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-300 shrink-0" />
              <span>mechienergy24@gmail.com</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-300 shrink-0" />
              <span>+977-9842787091</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800 py-6">
        <div className="max-w-7xl mx-auto px-6 text-xs text-brand-300">
          © {new Date().getFullYear()} Mechi Energy Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}