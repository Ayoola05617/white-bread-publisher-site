"use client";

import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    title: "Quality Publications",
    description:
      "We produce educational and literary materials with a strong focus on quality, clarity, and lasting value.",
  },
  {
    number: "02",
    title: "Curriculum-Focused",
    description:
      "Our educational publications are developed with the needs of the Nigerian educational system in mind.",
  },
  {
    number: "03",
    title: "Engaging Learning Materials",
    description:
      "We create materials that make learning more accessible, engaging, and meaningful for learners.",
  },
  {
    number: "04",
    title: "Reliable Service",
    description:
      "We work with schools, educators, parents, and institutions with a commitment to dependable service.",
  },
  {
    number: "05",
    title: "Support for Authors",
    description:
      "We work alongside authors to help bring valuable ideas and literary works to readers.",
  },
  {
    number: "06",
    title: "Affordable Resources",
    description:
      "We remain committed to making valuable educational resources accessible to the people who need them.",
  },
];

export default function WhyWhitebread() {
  return (
    <section
      id="why-whitebread"
      className="border-t border-[#ddd8ce] bg-[#171a1d] px-6 py-24 text-[#f6f3ec] md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7a2630]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#aaa79f]">
                Why Whitebread
              </p>
            </div>

            <h2 className="max-w-4xl text-5xl leading-[0.92] tracking-[-0.03em] md:text-7xl lg:text-[6.5rem]">
              More than
              <br />
              <span className="text-[#b8787f]">just books.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md text-base leading-7 text-[#aaa79f] md:text-lg md:leading-8"
          >
            We believe publishing should do more than put words on pages. Our
            work is shaped around quality, educational value, creativity, and
            the evolving needs of learners and educators.
          </motion.p>
        </div>

        {/* Reasons */}
        <div className="mt-20 border-t border-white/15 md:mt-28">
          <div className="grid md:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.article
                key={reason.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: (index % 2) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group border-b border-white/15 py-8 md:px-8 md:py-10 ${
                  index % 2 === 0
                    ? "md:border-r md:pl-0"
                    : "md:pr-0"
                }`}
              >
                <div className="flex gap-6">
                  <span className="pt-1 text-[10px] font-medium tracking-[0.18em] text-[#b8787f]">
                    {reason.number}
                  </span>

                  <div>
                    <h3 className="text-3xl leading-none tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#b8787f] md:text-4xl">
                      {reason.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-[#aaa79f]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 flex flex-col justify-between gap-8 border-t border-white/15 pt-8 md:mt-28 md:flex-row md:items-end"
        >
          <p className="max-w-2xl font-[family-name:var(--font-heading)] text-3xl leading-tight text-[#f6f3ec] md:text-4xl">
            Creating publications that contribute to better learning and
            stronger ideas.
          </p>

          <span className="text-[10px] uppercase tracking-[0.18em] text-[#aaa79f]">
            Whitebread Publishers Limited
          </span>
        </motion.div>
      </div>
    </section>
  );
}