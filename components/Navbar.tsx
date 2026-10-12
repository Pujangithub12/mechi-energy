"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-100">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO AREA — replace the dashed box  when the logo is ready */}
        <Link href="/" className="flex items-center gap-3 shrink-0 select-none">
          <div className="w-12 h-12 rounded-lg border-2 border-dashed border-brand-300 bg-brand-50 flex items-center justify-center text-[10px] font-semibold tracking-wider text-brand-500">
            LOGO
          </div>
          
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold text-brand-900">
              Mechi <span className="text-brand-600 font-medium">Energy</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-brand-600 font-semibold mt-1">
              Private Limited
            </span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-10 h-full">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <li key={l.href} className="relative flex items-center h-full">
                <Link
                  href={l.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-2 ${
                    isActive
                      ? "text-brand-800 font-semibold"
                      : "text-brand-800/70 hover:text-brand-600"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-[-25px] left-0 right-0 h-[3px] bg-accent rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="bg-brand-700 hover:bg-brand-800 text-white px-8 py-2.5 rounded-xl text-sm font-semibold transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden p-2 text-brand-800 hover:bg-brand-50 rounded-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-brand-100 bg-white">
          <ul className="flex flex-col p-5 gap-1.5">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block w-full py-3 px-4 rounded-xl text-sm font-medium ${
                      isActive
                        ? "bg-brand-50 text-brand-800 font-semibold"
                        : "text-brand-800 hover:bg-brand-50"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3 mt-2 border-t border-brand-50">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full bg-brand-700 hover:bg-brand-800 text-white py-3 rounded-xl text-sm font-semibold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
