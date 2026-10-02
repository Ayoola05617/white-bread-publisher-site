import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const headingFont = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.whitebreadpublishersltd.com.ng"),
  title: {
    default: "Whitebread Publishers Limited | Educational & Literary Books",
    template: "%s | Whitebread Publishers Limited",
  },
  description:
    "Whitebread Publishers Limited publishes educational and literary books designed to inspire learning, creativity, and strong ideas for learners, educators, and families.",
  applicationName: "Whitebread Publishers Limited",
  authors: [{ name: "Whitebread Publishers Limited" }],
  keywords: [
    "Whitebread Publishers",
    "Whitebread Publishers Limited",
    "educational books Nigeria",
    "literary books Nigeria",
    "school books Nigeria",
    "publishing company Nigeria",
    "book publisher Kwara",
    "books for schools",
    "children books Nigeria",
    "learning resources Nigeria",
  ],
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Whitebread Publishers Limited",
    description:
      "Educational and literary publications designed to inspire learning, creativity, and intellectual growth.",
    url: "https://www.whitebreadpublishersltd.com.ng",
    siteName: "Whitebread Publishers Limited",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/books/abenii.jpg",
        width: 1200,
        height: 1600,
        alt: "Whitebread Publishers Limited book cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitebread Publishers Limited",
    description:
      "Educational and literary publications created to inspire learning and intellectual growth.",
    images: ["/books/abenii.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${headingFont.variable}`}>
        {children}
      </body>
    </html>
  );
}