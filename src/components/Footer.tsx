"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="border-t border-[#dfe5f2] bg-[#111827] px-6 pb-8 pt-16 text-[#fffaf0] md:px-10 md:pt-20 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        {/* Top content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_0.8fr]"
        >
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="text-3xl font-semibold tracking-[-0.04em]">
                Whitebread
              </div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#d9dfe8]">
                Publishers Limited
              </div>
            </Link>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#d9dfe8]">
              Quality educational and literary publications created to support
              learning, creativity, and intellectual development.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f5c84c]">
              Explore
            </p>

            <nav className="flex flex-col items-start gap-4 text-sm text-[#d9dfe8]">
              <Link
                href="/books"
                className="transition-colors duration-300 hover:text-[#fffaf0]"
              >
                Books
              </Link>

              <Link
                href="/#about"
                className="transition-colors duration-300 hover:text-[#fffaf0]"
              >
                About
              </Link>

              <Link
                href="/#why-whitebread"
                className="transition-colors duration-300 hover:text-[#fffaf0]"
              >
                Why Whitebread
              </Link>

              <Link
                href="/#contact"
                className="transition-colors duration-300 hover:text-[#fffaf0]"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f5c84c]">
              Contact
            </p>

            <div className="flex flex-col gap-4 text-sm text-[#d9dfe8]">
              <a
                href="mailto:whitebreadpublishersltd@gmail.com"
                className="transition-colors duration-300 hover:text-[#fffaf0]"
              >
                whitebreadpublishersltd@gmail.com
              </a>

              <a
                href="https://wa.me/2348169975561"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#fffaf0]"
              >
                +234 816 997 5561
              </a>

              <p className="leading-6">
                E22 Emirs Road,
                <br />
                Ilorin, Kwara State,
                <br />
                Nigeria
              </p>
            </div>
          </div>
        </motion.div>

        {/* Large wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 overflow-hidden border-t border-white/10 pt-8 md:mt-28"
        >
          <p className="whitespace-nowrap font-[family-name:var(--font-heading)] text-[19vw] leading-[0.7] tracking-[-0.06em] text-white/[0.06]">
            Whitebread
          </p>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.14em] text-[#a9afbb] md:flex-row md:items-center md:justify-between"
        >
          <p>
            © {new Date().getFullYear()} Whitebread Publishers Limited
          </p>

          <p>Ilorin · Kwara State · Nigeria</p>
        </motion.div>
      </div>
    </footer>
  );
}