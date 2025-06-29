import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import ProductsView from "@/components/ProductsView";
import { getBanner } from "@/sanity/lib/banner/getBanner";
import { getHero } from "@/sanity/lib/hero/getHero";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllproducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  const banner = await getBanner();
  const hero = await getHero();

  return (
    <div className="flex flex-col space-y-8">
      {/* Vertical stacking */}
      <div className="flex">
        <Hero hero={hero} />

        <Banner banner={banner} />
      </div>
      <div>
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
