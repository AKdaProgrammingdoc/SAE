import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Products } from "@/components/site/Products";
import { WhyUs } from "@/components/site/WhyUs";
import { Reviews } from "@/components/site/Reviews";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Marquee } from "@/components/site/Marquee";
import { CustomCursor, ProofToasts } from "@/components/site/Interactions";
import { Helmets } from "@/components/site/Helmets";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Products />
        <Helmets />
        <WhyUs />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ProofToasts />
    </div>
  );
}
