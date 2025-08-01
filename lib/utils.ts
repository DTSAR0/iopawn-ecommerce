import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)
}

// Generate a shorter order ID (approximately half the length of cuid)
export function generateShortOrderId(): string {
  const timestamp = Date.now().toString(36) // Convert timestamp to base36
  const randomPart = Math.random().toString(36).substring(2, 8) // 6 random characters
  return `${timestamp}${randomPart}`.toUpperCase() // Combine and uppercase
}
