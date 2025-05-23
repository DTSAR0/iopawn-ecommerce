"use client"

import type React from "react"

import { CartDrawer } from "./cart-drawer"

export function CartProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CartDrawer />
    </>
  )
}
