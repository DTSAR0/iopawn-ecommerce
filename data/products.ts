export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  material: string
  weight: string
  size: string
  featured: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ethereal Ring",
    description: "A minimalist band that captures light with its subtle curves and polished finish.",
    price: 299,
    images: [
      "https://placehold.co/600x600/png?text=IOPAWN+Ring+1",
      "https://placehold.co/600x600/png?text=IOPAWN+Ring+2",
      "https://placehold.co/600x600/png?text=IOPAWN+Ring+3",
    ],
    category: "Rings",
    material: "Sterling Silver",
    weight: "3.2g",
    size: "Adjustable",
    featured: true,
  },
  {
    id: "2",
    name: "Cascade Necklace",
    description: "Flowing lines that create movement and elegance around the neckline.",
    price: 459,
    images: [
      "https://placehold.co/600x600/png?text=IOPAWN+Necklace+1",
      "https://placehold.co/600x600/png?text=IOPAWN+Necklace+2",
    ],
    category: "Necklaces",
    material: "Sterling Silver",
    weight: "8.7g",
    size: "45cm chain",
    featured: true,
  },
  {
    id: "3",
    name: "Lunar Earrings",
    description: "Crescent-inspired studs that add a touch of celestial beauty to any look.",
    price: 189,
    images: [
      "https://placehold.co/600x600/png?text=IOPAWN+Earrings+1",
      "https://placehold.co/600x600/png?text=IOPAWN+Earrings+2",
    ],
    category: "Earrings",
    material: "Sterling Silver",
    weight: "2.1g",
    size: "12mm",
    featured: true,
  },
  {
    id: "4",
    name: "Infinity Bracelet",
    description: "A continuous loop design that symbolizes eternal elegance and connection.",
    price: 329,
    images: [
      "https://placehold.co/600x600/png?text=IOPAWN+Bracelet+1",
      "https://placehold.co/600x600/png?text=IOPAWN+Bracelet+2",
    ],
    category: "Bracelets",
    material: "Sterling Silver",
    weight: "5.4g",
    size: "18cm",
    featured: false,
  },
  {
    id: "5",
    name: "Geometric Pendant",
    description: "Clean lines and modern angles create a statement piece for the contemporary wearer.",
    price: 379,
    images: [
      "https://placehold.co/600x600/png?text=IOPAWN+Pendant+1",
      "https://placehold.co/600x600/png?text=IOPAWN+Pendant+2",
    ],
    category: "Necklaces",
    material: "Sterling Silver",
    weight: "6.8g",
    size: "40cm chain",
    featured: false,
  },
  {
    id: "6",
    name: "Minimalist Hoops",
    description: "Perfect circles that embody simplicity and sophistication in their purest form.",
    price: 219,
    images: [
      "https://placehold.co/600x600/png?text=IOPAWN+Hoops+1",
      "https://placehold.co/600x600/png?text=IOPAWN+Hoops+2",
    ],
    category: "Earrings",
    material: "Sterling Silver",
    weight: "3.6g",
    size: "25mm diameter",
    featured: false,
  },
]
