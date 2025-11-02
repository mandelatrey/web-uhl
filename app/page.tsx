import Approach from "@/components/Approach";
import Blog from "@/components/Blog";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import History from "@/components/History";
import LivesTransformed from "@/components/LivesTransformed";
import Partners from "@/components/Partners";
import Pillars from "@/components/Pillars";

export default function Home() {
  return (
    <main>
      <body>
        <Hero />
        <Partners />
        <Approach/>
        <History />
        <Pillars />
        <LivesTransformed />
        <Blog />
        <CallToAction />
        <Footer />
      </body>
    </main>
  );
}
