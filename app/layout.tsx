// app/layout.tsx  (без "use client" !)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";            // ⬅️

/* 🚩 імпортуємо ClientShell динамічно й вимикаємо SSR,
      так він буде завантажений тільки у браузері,
      а layout залишиться серверним                       */
const ClientShell = dynamic(
  () => import("@/components/layout/client-shell"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IOPAWN - Fine Jewellery. Pure Potential.",
  description:
    "Discover modern, minimalist jewellery crafted with precision and elegance. IOPAWN offers contemporary designs for the discerning individual.",
  keywords:
    "jewellery, jewelry, modern, minimalist, silver, rings, necklaces, earrings",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-silver-50 text-silver-900`}>
        {/* ClientShell рендериться ТІЛЬКИ у клієнті */}
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
