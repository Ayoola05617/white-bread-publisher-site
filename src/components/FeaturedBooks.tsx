"use client";

import Link from "next/link";
import { motion } from "motion/react";
import BookCard from "./BookCard";
import { books } from "@/data/books";

export default function FeaturedBooks() {
  const featuredBooks = books.filter((book) => book.featured).slice(0, 6);

  return (
    <section
      id="books"
      className="border-t border-[#ddd8ce] px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#7a2630]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6d6b65]">
                Our publications
              </p>
            </div>

            <h2 className="max-w-2xl text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl">
              Books for learning,
              <br />
              <span className="text-[#7a2630]">
                discovery & growth.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#6d6b65]">
            Explore a selection of educational and literary publications
            created for learners, educators, families, and institutions.
          </p>
        </motion.div>

        {/* Books */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:gap-x-8">
          {featuredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>

        {/* Catalogue link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/books"
            className="group inline-flex items-center gap-3 border-b border-[#171a1d] pb-2 text-sm font-medium"
          >
            View all publications

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}