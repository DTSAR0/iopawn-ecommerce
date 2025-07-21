// components/layout/client-shell.tsx
"use client";

import { Header } from "./header";
import { CartDrawer } from "../cart/cart-drawer";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <CartDrawer />
    </>
  );
}
