import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import Procedures from "@/components/Procedures";
import About from "@/components/About";
import Commitments from "@/components/Commitments";
import Technology from "@/components/Technology";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Credibility />
      <Procedures />
      <About />
      <Commitments />
      <Technology />
      <Locations />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
