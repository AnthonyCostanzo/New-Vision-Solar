import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import IndustrySection from "../components/IndustrySection";
import GrapheneSection from "../components/GrapheneSection";
import Goal from "../components/Goal";
import Problems from "../components/Problems";
import TimeLine from "../components/Timeline";
import Valuation from "../components/Valuation";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Goal />
      <div className="grid relative bg-no-repeat bg-[url('/images/s.svg')] md:pb-20 md:border-b-2 md:border-b-orange-100">
        <IndustrySection />
        <GrapheneSection />
      </div>{" "}
      <Valuation />
      <Problems />
      <TimeLine />
    </Layout>
  );
}
