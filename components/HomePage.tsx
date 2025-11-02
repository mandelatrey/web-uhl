import Approach from "@/components/Approach";
import Blog from "@/components/Blog";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import History from "@/components/History";
import LivesTransformed from "@/components/LivesTransformed";
import Partners from "@/components/Partners";
import Pillars from "@/components/Pillars";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Approach/>
      <History />
      <Pillars />
      <LivesTransformed />
      <Blog />
      <CallToAction />
    </>
  );
}
