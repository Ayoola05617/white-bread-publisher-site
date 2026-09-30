import Navbar from "@/components/Navbar";
import BooksCatalogue from "@/components/BooksCatalogue";
import Footer from "@/components/Footer";

export default function BooksPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <BooksCatalogue />
        <Footer />
    </main>
  );
}