import PageShell from "@/app/components/PageShell";
import Hero from "@/app/components/Hero";
import FreeInfoSession from "@/app/components/FreeInfoSession";
import AboutDialogue from "@/app/components/AboutDialogue";
import UseCases from "@/app/components/UseCasesTabs";
import Benefits from "@/app/components/Benefits";
import Curriculum from "@/app/components/Curriculum";
import Program from "@/app/components/Program";
import FAQ from "@/app/components/FAQ";
import AboutCompany from "@/app/components/AboutCompany";
import Closing from "@/app/components/Closing";
import StructuredData from "@/app/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <PageShell>
        <Hero />
        <FreeInfoSession />
        <AboutDialogue />
        <UseCases />
        <Program />
        <Curriculum />
        <Benefits />
        <FAQ />
        <AboutCompany />
        <Closing />
      </PageShell>
    </>
  );
}