import HomePage from "./components/HomePage";
import FeatureHighlight from "./components/FeatureHighlight";
import MediaContentBlock from "./components/MediaContentBlock";
import ProductShowcase from "./components/ProductShowcase";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-28 md:gap-20 overflow-hidden">
      <HomePage />
      <FeatureHighlight />
      <MediaContentBlock />
      <ProductShowcase />
      <Footer />
    </main>
  );
}
