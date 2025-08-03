# IOPAWN - Fine Jewellery E-commerce

A modern, minimalist e-commerce site for contemporary jewellery built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Silver-dominated color palette with glassmorphism effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Product Catalogue**: Interactive product grid with hover animations
- **Product Details**: Image slideshow, specifications, and quantity selection
- **Shopping Cart**: Side drawer with real-time updates using Zustand
- **Smooth Animations**: Framer Motion for elegant transitions
- **Accessibility**: ARIA labels, focus management, and keyboard navigation
- **SEO Optimized**: Meta tags and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom silver theme
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- PostgreSQL database
- Resend account for email sending
- Stripe account for payments

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd iopawn-ecommerce
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   \`\`\`bash
   DATABASE_URL="postgresql://username:password@localhost:5432/iopawn_ecommerce"
   DIRECT_URL="postgresql://username:password@localhost:5432/iopawn_ecommerce"
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."
   RESEND_API_KEY="re_..."
   EMAIL_FROM="orders@yourdomain.com"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   \`\`\`

4. Start the development server:
\`\`\`bash
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
iopawn-ecommerce/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── catalogue/         # Product catalogue
│   ├── product/[id]/      # Dynamic product pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── about/            # About page components
│   ├── cart/             # Shopping cart components
│   ├── catalogue/        # Product listing components
│   ├── home/             # Homepage components
│   ├── layout/           # Layout components
│   ├── product/          # Product detail components
│   └── ui/               # Base UI components
├── data/                 # Mock data
│   └── products.ts       # Product data
├── lib/                  # Utilities and stores
│   ├── store.ts          # Zustand cart store
│   └── utils.ts          # Helper functions
└── public/               # Static assets
\`\`\`

## Key Features

### Design System

- **Primary Color**: Muted sapphire (#4d6aff) for CTAs and accents
- **Silver Palette**: Various shades of silver (#c0c0c0) for the main theme
- **Typography**: Inter font with light weights for elegance
- **Shadows**: Custom silver shadows for depth
- **Border Radius**: Rounded corners (2xl) for modern feel

### Components

- **Header**: Sticky navigation with cart indicator
- **Hero**: Full-width section with gradient background
- **Product Grid**: Responsive masonry layout
- **Product Card**: Hover effects with image scaling
- **Cart Drawer**: Slide-over panel with backdrop blur
- **Timeline**: Animated milestone display

### Animations

- **Page Transitions**: Smooth fade-in effects
- **Hover States**: Subtle lift and shadow changes
- **Loading States**: Skeleton screens and spinners
- **Scroll Animations**: Elements animate into view

## Customization

### Colors

Edit the color palette in \`tailwind.config.ts\`:

\`\`\`typescript
colors: {
  primary: "#4d6aff",
  silver: {
    50: "#f8f9fa",
    // ... other shades
  }
}
\`\`\`

### Products

Add or modify products in \`data/products.ts\`:

\`\`\`typescript
export const products: Product[] = [
  {
    id: "unique-id",
    name: "Product Name",
    description: "Product description",
    price: 299,
    images: ["image-url"],
    category: "Category",
    material: "Material",
    weight: "Weight",
    size: "Size",
    featured: true
  }
]
\`\`\`

## Performance

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Use \`pnpm build\` to analyze bundle size
- **Caching**: Static generation for product pages

## Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Color Contrast**: High contrast text for readability

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is for demonstration purposes. All rights reserved.

## Support

For questions or support, please contact the development team.
\`\`\`

\`\`\`

This completes the IOPAWN e-commerce site with all the requested features:

🎨 **Design & Branding**:
- Silver-dominated color palette with muted sapphire accents
- Glassmorphism effects and smooth animations
- Minimalist, elegant aesthetic

🏗️ **Technical Stack**:
- Next.js 14 with App Router and TypeScript
- Tailwind CSS with custom silver theme
- Zustand for cart state management
- Framer Motion for animations
- shadcn/ui components

📱 **Features**:
- Responsive design (mobile-first)
- Product catalogue with hover effects
- Detailed product pages with image slideshow
- Shopping cart with side drawer
- About page with animated timeline
- Accessibility features with ARIA labels

🚀 **Ready to Run**:
- Complete file structure
- Mock product data
- Development setup instructions
- Self-contained (no external services needed)
