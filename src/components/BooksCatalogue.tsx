"use client";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

import BookCard from "./BookCard";
import { books } from "@/data/books";

const categories = [
  "All",
  "Textbooks",
  "Children's Books",
  "Educational",
  "Literary",
];

export default function BooksCatalogue() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBooks = useMemo(() => {
    if (activeCategory === "All") {
      return books;
    }

    return books.filter((book) => book.category === activeCategory);
  }, [activeCategory]);

  return (
   <section className="border-t border-[#ddd8ce] px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40 lg:px-14">
  <div className="mx-auto max-w-[1440px]">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-10 bg-[#7a2630]" />

        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6d6b65]">
          Our publications
        </p>
      </div>

      <h1 className="text-[4.5rem] leading-[0.82] tracking-[-0.045em] sm:text-6xl md:text-8xl lg:text-[9rem]">
        Our
        <br />
        <span className="text-[#7a2630]">books.</span>
      </h1>

      <p className="mt-8 max-w-xl text-sm leading-6 text-[#6d6b65] md:text-base md:leading-7">
        Explore our collection of educational and literary publications
        created for learners, educators, families, and institutions.
      </p>
    </motion.div>

    {/* Filters */}
    <div className="mt-16 border-y border-[#ddd8ce] py-5">
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
              activeCategory === category
                ? "bg-[#171a1d] text-[#f6f3ec]"
                : "border border-[#ddd8ce] text-[#6d6b65] hover:border-[#171a1d] hover:text-[#171a1d]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>

    {/* Count */}
    <div className="mt-8 flex items-center justify-between">
      <p className="text-[10px] uppercase tracking-[0.16em] text-[#6d6b65]">
        {filteredBooks.length} publications
      </p>

      <span className="hidden h-px flex-1 bg-[#ddd8ce] sm:ml-6 sm:block" />
    </div>

    {/* Books */}
    <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
      {filteredBooks.map((book, index) => (
        <motion.div
          key={book.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: Math.min(index * 0.05, 0.35),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <BookCard book={book} />
        </motion.div>
      ))}
    </div>

  </div>
</section>
  );
}