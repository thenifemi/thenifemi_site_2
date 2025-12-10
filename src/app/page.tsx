import { PageLayout } from "@/components/page-layout";
import { IntroSection } from "@/components/sections/intro-section";
import { ExperienceSection } from "@/components/sections/experience-section";

export default function Home() {
  return (
    <PageLayout>
      <IntroSection />
      <ExperienceSection />
    </PageLayout>
  );
}
