import Hero from "@/components/home/Hero";
import Excellence from "@/components/home/Excellence";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import GalleryVideoSection from "@/components/home/GalleryVideoSection";
import KajianSection from "@/components/home/KajianSection";
import LatestNews from "@/components/home/LatestNews";

export default function Home() {
  return (
    <>
      <Hero />
      <Excellence />
      <FeaturedPrograms />
      <KajianSection />
      <GalleryVideoSection />
      <LatestNews />
    </>
  );
}
