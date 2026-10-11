"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FeaturedBooks from "@/components/FeaturedBooks";
import AboutSection from "@/components/AboutSection";
import WhyWhitebread from "@/components/WhyWhitebread";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "Publisher"],
  name: "Whitebread Publishers Limited",
  url: "https://www.whitebreadpublishersltd.com.ng",
  logo: "https://www.whitebreadpublishersltd.com.ng/favicon.svg",
  image: "https://www.whitebreadpublishersltd.com.ng/books/abenii.jpg",
  description:
    "Whitebread Publishers Limited is an award-winning Nigerian educational and literary publisher specializing in quality textbooks, children's literature, and learning resources for schools and institutions.",
  foundingDate: "2000",
  areaServed: "NG",
  address: {
    "@type": "PostalAddress",
    streetAddress: "E22 Emirs Road",
    addressLocality: "Ilorin",
    addressRegion: "Kwara State",
    postalCode: "240001",
    addressCountry: "NG",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+234-816-997-5561",
      contactOption: "TollFree",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "whitebreadpublishersltd@gmail.com",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [],
  priceRange: "$$",
  knowsAbout: [
    "Educational Publishing",
    "Textbook Publishing",
    "Children's Literature",
    "Learning Resources",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Whitebread Publishers Limited",
  image: "https://www.whitebreadpublishersltd.com.ng/books/abenii.jpg",
  description: "Leading educational and literary publisher in Nigeria",
  address: {
    "@type": "PostalAddress",
    streetAddress: "E22 Emirs Road",
    addressLocality: "Ilorin",
    addressRegion: "Kwara State",
    addressCountry: "NG",
  },
  telephone: "+234-816-997-5561",
  email: "whitebreadpublishersltd@gmail.com",
  url: "https://www.whitebreadpublishersltd.com.ng",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "8.4957",
    longitude: "4.5412",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Whitebread Publishers Limited",
  url: "https://www.whitebreadpublishersltd.com.ng",
  description:
    "Educational and literary publications created to inspire learning, creativity, and intellectual growth.",
  publisher: {
    "@type": "Organization",
    name: "Whitebread Publishers Limited",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.whitebreadpublishersltd.com.ng/books?search={search_term_string}",
    },
    query: "required",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.whitebreadpublishersltd.com.ng",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Books",
      item: "https://www.whitebreadpublishersltd.com.ng/books",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 sm:pt-32 md:px-10 md:pb-20 lg:px-14 lg:pt-28">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Hero Content */}
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1d4ed8]" />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#4f5d75] sm:text-xs"
              >
                Whitebread Publishers Limited
              </motion.p>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-[3.5rem] leading-[0.82] tracking-[-0.045em] sm:text-[5rem] md:text-7xl lg:text-[6.5rem] xl:text-[8rem]"
            >
              Books that
              <br />
              <span className="text-[#1d4ed8]">build <span className="text-[#111827]">minds.</span></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-lg text-base leading-7 text-[#4f5d75] md:text-lg"
            >
              Educational and literary publications created to inspire learning,
              creativity, and intellectual growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#books"
                className="rounded-full bg-[#1d4ed8] px-6 py-3.5 text-sm font-medium text-[#fffaf0] transition-all duration-300 hover:bg-[#102a6b]"
                style={{ color: "#fffaf0" }}
              >
                Explore our books
              </a>

              <a
                href="#about"
                className="group flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-[#111827]"
              >
                Discover Whitebread
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* Hero Book Visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              rotate: -6,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: -3,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            <div className="absolute -right-4 -top-4 z-0 h-24 w-24 rounded-full border border-[#dfe5f2] sm:-right-6 sm:-top-6 sm:h-32 sm:w-32 md:-right-8 md:-top-8 md:h-44 md:w-44" />

            <div className="relative z-10 mx-auto w-[72%] overflow-hidden bg-[#f7efcf] shadow-[20px_25px_60px_rgba(17,24,39,0.18)] transition-transform duration-700 hover:rotate-0 sm:w-[68%] md:w-[65%]">
              <Image
                src="/books/abenii.jpg"
                alt="Iya Abeni: The Saucy Woman by Deborah Oludele"
                width={700}
                height={950}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 420px"
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 z-20 flex max-w-[90%] -translate-x-1/2 items-center gap-3 bg-[#fffaf0] px-3 py-3 shadow-sm sm:left-0 sm:max-w-none sm:translate-x-0 sm:px-4">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#f5c84c]" />

              <span className="whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.14em] text-[#4f5d75] sm:text-[10px] sm:tracking-[0.18em]">
                Educational · Literary · Purposeful
              </span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-7 left-6 hidden items-center gap-3 md:flex lg:left-14">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#4f5d75]">
            Scroll to explore
          </span>
          <span className="h-px w-12 bg-[#dfe5f2]" />
        </div>

        <div className="absolute bottom-7 right-6 hidden text-right md:block lg:right-14">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#4f5d75]">
            E22 Emirs Road
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#4f5d75]">
            Ilorin, Kwara State
          </p>
        </div>
      </section>
      <FeaturedBooks />
      <AboutSection />
      <WhyWhitebread />
      <ContactSection />
      <Footer />
    </main>
  );
}