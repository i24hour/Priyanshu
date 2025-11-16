import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priyanshu | Product Designer & Manager | IIT Roorkee",
  description: "Product Designer & Manager at IIT Roorkee with 2 years of experience. Passionate about product design, management, and automation. Featured in Nothing Incubator Contest as 1 of 15 finalists from 10,000+ teams.",
  keywords: ["Priyanshu", "product designer", "product manager", "IIT Roorkee", "portfolio", "UI/UX", "product design", "Scaler", "Mentors Mantra", "automation"],
  authors: [{ name: "Priyanshu" }],
  openGraph: {
    title: "Priyanshu | Product Designer & Manager",
    description: "Final Year @ IIT Roorkee | 2 Years Experience in Product Design & Management",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
