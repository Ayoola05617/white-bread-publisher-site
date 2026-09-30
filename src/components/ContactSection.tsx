"use client";

import { motion } from "motion/react";

export default function ContactSection() {
  const contactItems = [
    {
      label: "Email",
      value: "whitebreadpublishersltd@gmail.com",
      href: "mailto:whitebreadpublishersltd@gmail.com",
    },
    {
      label: "WhatsApp",
      value: "+234 805 668 2443",
      href: "https://wa.me/2348056682443",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="border-t border-[#ddd8ce] px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Main CTA */}
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7a2630]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6d6b65]">
                Get in touch
              </p>
            </div>

            <h2 className="max-w-5xl text-[4rem] leading-[0.88] sm:text-6xl md:text-8xl lg:text-[8.5rem] tracking-[-0.04em] md:text-8xl lg:text-[8.5rem]">
              Let&apos;s work
              <br />
              <span className="text-[#7a2630]">together.</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-xl text-base leading-7 text-[#6d6b65] md:text-lg md:leading-8"
            >
              Whether you&apos;re looking for educational publications,
              exploring a publishing opportunity, or interested in working
              with Whitebread, we&apos;d love to hear from you.
            </motion.p>
          </motion.div>

          {/* Contact details */}
          <div className="flex flex-col justify-end">
            <div className="border-t border-[#ddd8ce]">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between border-b border-[#ddd8ce] py-6"
                >
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6d6b65]">
                      {item.label}
                    </p>

                    <p className="mt-2 text-sm md:text-base">
                      {item.value}
                    </p>
                  </div>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>
              ))}

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.65,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center justify-between py-6"
              >
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6d6b65]">
                    Visit us
                  </p>

                  <p className="mt-2 max-w-xs text-sm leading-6 md:text-base">
                    E22 Emirs Road,
                    <br />
                    Ilorin, Kwara State, Nigeria
                  </p>
                </div>

                <span className="text-[#7a2630]">●</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 flex flex-col gap-6 border-t border-[#ddd8ce] pt-8 md:mt-28 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-[#6d6b65]">
            Whitebread Publishers Limited
          </p>

          <a
            href="mailto:whitebreadpublishersltd@gmail.com"
            className="group inline-flex items-center gap-3 text-sm font-medium"
          >
            Start a conversation

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}