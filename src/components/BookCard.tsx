import Image from "next/image";
import type { Book } from "@/data/books";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4 transition-all duration-300 group-hover/wa:text-[#7a2630]"
    fill="currentColor"
  >
    <path d="M19.05 4.95A9.87 9.87 0 0 0 12.02 2a9.93 9.93 0 0 0-8.58 15.15L2 22l5.01-1.31A9.93 9.93 0 1 0 19.05 4.95Zm-7.03 14.5c-1.34 0-2.65-.35-3.8-.99l-.27-.16-2.97.78.8-2.9-.18-.3A8.06 8.06 0 1 1 12.02 20.45Zm4.42-6.04c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.75-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.07 3.59.57.25 1.01.4 1.36.51.57.18 1.09.16 1.5.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
  </svg>
);

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <article className="group cursor-default">
      {/* Book Cover */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e3d9]">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Book Information */}
      <div className="pt-5">
        <div className="mb-2 flex items-center justify-between gap-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#7a2630] transition-transform duration-300 group-hover:translate-x-1">
            {book.category}
          </span>

          <span className="text-[10px] uppercase tracking-[0.12em] text-[#6d6b65]">
            {book.level}
          </span>
        </div>

        <h3 className="text-2xl leading-none tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1">
          {book.title}
        </h3>

        <p className="mt-2 text-sm text-[#6d6b65]">
          {book.author}
        </p>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/234${String(8056682443).slice(1)}?text=Good%20evening%2C%20I%20saw%20%22${encodeURIComponent(book.title)}%22%20on%20your%20website%20and%20I%20want%20to%20order.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group/wa mt-5 flex items-center gap-2 text-sm font-medium text-[#171a1d] transition-colors duration-300 hover:text-[#7a2630]"
        >
          <WhatsAppIcon />
          Order via WhatsApp
        </a>
      </div>
    </article>
  );
}