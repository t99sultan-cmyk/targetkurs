import { HeroSection } from "@/components/blocks/HeroSection";
import { AudienceSection } from "@/components/blocks/AudienceSection";
import { ProblemSolution } from "@/components/blocks/ProblemSolution";
import { ExpertIntro } from "@/components/blocks/ExpertIntro";
import { IncomeCalculator } from "@/components/blocks/IncomeCalculator";
import { ProgramModules } from "@/components/blocks/ProgramModules";
import { CasesSection } from "@/components/blocks/CasesSection";
import { PricingSection } from "@/components/blocks/PricingSection";
import { DisclaimersSection } from "@/components/blocks/DisclaimersSection";
import { FAQSection } from "@/components/blocks/FAQSection";
import { FinalCTA } from "@/components/blocks/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <HeroSection />
      <AudienceSection />
      <ProblemSolution />
      <ExpertIntro />
      <IncomeCalculator />
      <ProgramModules />
      <CasesSection />
      <PricingSection />
      <DisclaimersSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
