import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BooksCatalogue from "@/components/BooksCatalogue";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Books Catalogue | Whitebread Publishers Limited",
  description:
    "Browse our complete catalogue of educational textbooks, children's literature, and learning resources. Find JSS textbooks, primary school books, and literary works from Whitebread Publishers.",
  keywords: [
    "books catalogue",
    "educational textbooks",
    "JSS textbooks",
    "primary school books",
    "children's literature",
    "LUMINOUS series",
    "Whitebread books",
    "Nigerian textbooks",
  ],
  openGraph: {
    title: "Books Catalogue | Whitebread Publishers Limited",
    description:
      "Explore our range of quality educational and literary books for schools and learning institutions.",
    url: "https://www.whitebreadpublishersltd.com.ng/books",
    type: "website",
  },
  alternates: {
    canonical: "/books",
  },
};

export default function BooksPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <BooksCatalogue />
      <Footer />
    </main>
  );
}