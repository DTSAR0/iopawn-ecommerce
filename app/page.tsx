import { Hero } from "@/components/home/hero";
import FeaturedProducts from "@/components/home/featured-products"; // ← default export

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
