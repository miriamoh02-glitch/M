import { ChildrenTributeSection } from "@/components/sections/children-tribute-section";
import { ClosingGratitudeSection } from "@/components/sections/closing-gratitude-section";
import { FinaleSection } from "@/components/sections/finale-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";

export default function Home() {
  return (
    <main id="main">
      <HeroSection />
      <IntroSection />
      <ChildrenTributeSection />
      <ClosingGratitudeSection />
      <FinaleSection />
    </main>
  );
}
