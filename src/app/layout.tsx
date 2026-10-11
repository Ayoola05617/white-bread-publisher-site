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
    default: "Whitebread Publishers Limited | Educational & Literary Books Nigeria",
    template: "%s | Whitebread Publishers Limited",
  },
  description:
    "Whitebread Publishers Limited is an award-winning Nigerian educational and literary publisher. We publish quality textbooks, children's stories, and learning resources for schools, educators, and families. Located in Ilorin, Kwara State.",
  applicationName: "Whitebread Publishers Limited",
  authors: [{ name: "Whitebread Publishers Limited" }],
  creator: "Whitebread Publishers Limited",
  publisher: "Whitebread Publishers Limited",
  keywords: [
    "Whitebread Publishers",
    "Whitebread Publishers Limited",
    "educational books Nigeria",
    "literary books Nigeria",
    "school textbooks Nigeria",
    "publishing company Nigeria",
    "book publisher Kwara",
    "books for schools Nigeria",
    "children's books Nigeria",
    "learning resources Nigeria",
    "educational publisher Ilorin",
    "quality textbooks",
    "Nigerian publishers",
    "Ilorin publishers",
  ],
  category: "education",
  referrer: "strict-origin-when-cross-origin",
  classification: "Education",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Whitebread Publishers Limited - Educational & Literary Books",
    description:
      "Discover quality educational textbooks, children's stories, and learning resources from Whitebread Publishers Limited, Nigeria's trusted educational publisher.",
    url: "https://www.whitebreadpublishersltd.com.ng",
    siteName: "Whitebread Publishers Limited",
    locale: "en_NG",
    type: "website",
    countryName: "Nigeria",
    images: [
      {
        url: "/books/abenii.jpg",
        width: 1200,
        height: 1600,
        alt: "Iya Abeni book cover by Whitebread Publishers",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitebread Publishers Limited",
    description:
      "Quality educational and literary books from Nigeria's trusted publisher.",
    images: ["/books/abenii.jpg"],
    creator: "@whitebreadpub",
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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