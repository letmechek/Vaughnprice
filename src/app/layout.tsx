import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaughnprice.com"),
  title: {
    default: "Vaughn Price Limited | Enterprise Technology Solutions",
    template: "%s | Vaughn Price Limited",
  },
  description:
    "Leading enterprise technology partner building scalable systems and infrastructure for tomorrow's businesses.",
  openGraph: {
    title: "Vaughn Price Limited | Enterprise Technology Solutions",
    description:
      "We engineer modern platforms, cloud infrastructure, and secure systems that help enterprises scale with confidence.",
    url: "https://vaughnprice.com",
    siteName: "Vaughn Price Limited",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaughn Price Limited",
    description: "Engineering tomorrow's enterprise technology.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased bg-vp-navy-dark text-slate-100`}
      >
        {children}
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  );
}
