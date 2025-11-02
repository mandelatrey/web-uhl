import Approach from "@/components/Approach";
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
      </body>
    </main>
  );
}
