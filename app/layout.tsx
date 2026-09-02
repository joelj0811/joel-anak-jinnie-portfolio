import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joel Anak Jinnie — Cinematography & Visual Content",
  description:
    "Portfolio of Joel Anak Jinnie, a cinematographer and visual content creator based in Kuching, Malaysia.",
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
