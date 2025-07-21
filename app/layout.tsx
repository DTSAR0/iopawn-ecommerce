// app/layout.tsx
"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/layout/client-shell";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-silver-50 text-silver-900`}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
