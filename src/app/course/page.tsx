import { HeroSection } from "@/components/blocks/HeroSection";
import { AudienceSection } from "@/components/blocks/AudienceSection";
import { ProblemSolution } from "@/components/blocks/ProblemSolution";
import { ExpertIntro } from "@/components/blocks/ExpertIntro";
import { IncomeCalculator } from "@/components/blocks/IncomeCalculator";
import { MoneyCounterReveal } from "@/components/blocks/MoneyCounterReveal";
import { ProgramModules } from "@/components/blocks/ProgramModules";
import { CasesSection } from "@/components/blocks/CasesSection";
import { IntensiveTransition } from "@/components/blocks/IntensiveTransition";
import { PricingSection } from "@/components/blocks/PricingSection";
import { OutcomesSection } from "@/components/blocks/OutcomesSection";
import { FinalCTA } from "@/components/blocks/FinalCTA";
import { QuizSection } from "@/components/blocks/QuizSection";
import { FAQSection } from "@/components/blocks/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <HeroSection />
      <AudienceSection />
      <ProblemSolution />
      <ExpertIntro />
      <IncomeCalculator />
      <MoneyCounterReveal />
      <ProgramModules />
      <CasesSection />
      <IntensiveTransition />
      <PricingSection />
      <OutcomesSection />
      <FinalCTA />
      <QuizSection />
      <FAQSection />
    </main>
  );
}
