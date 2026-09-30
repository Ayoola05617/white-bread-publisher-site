"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Books", href: "/books" },
  { name: "About", href: "/#about" },
  { name: "Why Whitebread", href: "/#why-whitebread" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#f6f3ec]">
      <nav className="mx-auto flex h-20 max-w-360 items-center justify-between px-6 md:px-10 lg:px-14">
        {/* Logo */}
        <Link
          href="/"
          className="group flex flex-col leading-none"
          aria-label="Whitebread Publishers home"
        >
          <span
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Whitebread
          </span>

          <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.28em] text-[#6d6b65]">
            Publishers Limited
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm text-[#6d6b65] transition-colors duration-300 hover:text-[#171a1d]"
            >
              {link.name}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#7a2630] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-[#171a1d] px-5 py-2.5 text-sm font-medium text-[#f6f3ec] transition-all duration-300 hover:bg-[#7a2630] md:block"
          style={{ color: "#f6f3ec" }}
        >
          Get in touch
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-[#171a1d] transition-transform duration-300 ${
                menuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-[#171a1d] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-[#171a1d] transition-transform duration-300 ${
                menuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`absolute inset-x-0 top-0 -z-10 bg-[#f6f3ec] px-6 pt-24 transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="border-t border-[#ddd8ce] pb-8 pt-6">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#ddd8ce] py-5 text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 block w-full rounded-full bg-[#171a1d] px-5 py-3.5 text-center text-sm font-medium text-[#f6f3ec]"
            style={{ color: "#f6f3ec" }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}