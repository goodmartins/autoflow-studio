import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ApiSection from "@/components/ApiSection";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import PlugAndPlay from "@/components/PlugAndPlay";
import AiGenerator from "@/components/AiGenerator";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ApiSection />
        <Services />
        <Approach />
        <PlugAndPlay />
        <AiGenerator />
        <Methodology />
      </main>
      <Footer />
    </>
  );
}
