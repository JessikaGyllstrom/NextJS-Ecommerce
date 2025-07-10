import Banner from "@/components/Banner";
import CategorySelector from "@/components/CategorySelector";
import Hero from "@/components/Hero";
import ProductsView from "@/components/ProductsView";
import Sale from "@/components/Sale";
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
    <div className="flex flex-col min-h-screen w-screen">
      <Hero hero={hero} />
      <Banner banner={banner} />
      <CategorySelector categories={categories} />
      <ProductsView products={products} />
      <Sale />
    </div>
  );
}
