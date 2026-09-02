import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joel Anak Jinnie — Cinematography & Visual Content",
  description:
    "Portfolio of Joel Anak Jinnie, a cinematographer and visual content creator based in Kuching, Malaysia.",
  metadataBase: new URL(
    "https://joelj0811.github.io/joel-anak-jinnie-portfolio/",
  ),
  openGraph: {
    title: "Joel Anak Jinnie — Cinematography & Visual Content",
    description:
      "Cinematic stories in motion — portfolio of Joel Anak Jinnie.",
    images: [
      {
        url: "https://joelj0811.github.io/joel-anak-jinnie-portfolio/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Anak Jinnie — Cinematography & Visual Content",
    description: "Cinematic stories in motion.",
    images: [
      "https://joelj0811.github.io/joel-anak-jinnie-portfolio/og.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
