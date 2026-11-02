import HomeHero from "@/components/home/HomeHero";
import HomeIntro from "@/components/home/HomeIntro";
import ReelBand from "@/components/home/ReelBand";
import SelectedWork from "@/components/home/SelectedWork";
import Formats from "@/components/home/Formats";
import ProcessSteps from "@/components/ProcessSteps";

export default function Home() {
  return (
    <main className="flex-1">
      <HomeHero />
      <HomeIntro />
      <ReelBand />
      <SelectedWork />
      <Formats />
      <ProcessSteps />
    </main>
  );
}
