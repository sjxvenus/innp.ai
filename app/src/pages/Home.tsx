import { GridLines, Loader } from "@/components/Fx";
import Nav from "@/sections/Nav";
import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marquee";
import Business from "@/sections/Business";
import Cloud from "@/sections/Cloud";
import Solutions from "@/sections/Solutions";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="grain relative min-h-[100dvh] bg-[var(--ink)] text-[var(--paper)]">
      <Loader />
      <GridLines />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Business />
        <Cloud />
        <Solutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
