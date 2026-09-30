"use client";

import { motion } from "motion/react";

export default function AboutSection() {
  const focusAreas = [
    {
      number: "01",
      title: "Education",
      description:
        "Resources designed to support meaningful learning across different educational settings.",
    },
    {
      number: "02",
      title: "Creativity",
      description:
        "Books and materials that encourage curiosity, imagination, and intellectual growth.",
    },
    {
      number: "03",
      title: "Collaboration",
      description:
        "Working with authors, educators, and institutions to create valuable publications for today’s learners.",
    },
  ];

  return (
    <section
      id="about"
      className="border-t border-[#ddd8ce] px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Intro */}
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          {/* Heading */}
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

              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6d6b65]">
                About Whitebread
              </p>
            </div>

            <h2 className="max-w-4xl text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-[6.5rem]">
              Publishing
              <br />
              <span className="text-[#7a2630]">with purpose.</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-end lg:pb-2"
          >
            <p className="max-w-xl text-base leading-7 text-[#6d6b65] md:text-lg md:leading-8">
              Whitebread Publishers Limited is a publishing company based in
              Kwara State, Nigeria, producing quality educational and literary
              materials that support learning, creativity, and intellectual
              development.
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#6d6b65] md:text-lg md:leading-8">
              From textbooks and children&apos;s books to educational resources
              and other literary works, we create materials for schools,
              teachers, parents, and learners while working alongside authors,
              educators, and educational institutions.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="my-20 h-px origin-left bg-[#ddd8ce] md:my-24"
        />

        {/* Focus areas */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-l border-[#7a2630] pl-5"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6d6b65]">
                {area.number}
              </p>

              <h3 className="mt-4 text-3xl tracking-[-0.02em]">
                {area.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-[#6d6b65]">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}