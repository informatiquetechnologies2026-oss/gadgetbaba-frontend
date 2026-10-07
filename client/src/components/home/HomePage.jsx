import Hero from "./Hero";
import CategoryRail from "./CategoryRail";
import PromoGrid from "./PromoGrid";
import DealsBanner from "./DealsBanner";
import DealOfTheDay from "./DealOfTheDay";
import FeaturedCategories from "./FeaturedCategories";
import TrustBar from "./TrustBar";
import SellerBanner from "./SellerBanner";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryRail />
      <PromoGrid />
      <DealsBanner />
      <DealOfTheDay />
      <FeaturedCategories />
      <TrustBar />
      <SellerBanner />
    </main>
  );
}
