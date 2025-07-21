// components/layout/client-shell.tsx
'use client';

import { Header } from "./header";
import { Footer } from "./footer";
import { CartProvider } from "@/components/cart/cart-provider";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </CartProvider>
  );
}
