import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.affordableinsgrp.com"),
  title: {
    default: "Affordable Insurance Group | Auto, Home & Business Insurance in Columbia, SC",
    template: "%s | Affordable Insurance Group",
  },
  description:
    "Independent insurance agency in Columbia, SC since 1985. We shop top carriers for auto, home, life and business insurance, serving Irmo, Chapin, Lexington and West Columbia.",
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: ["/images/agent.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only z-[60] rounded-md bg-brand-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
