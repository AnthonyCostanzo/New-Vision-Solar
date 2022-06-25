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
      <div className="grid relative mb-10 bg-no-repeat bg-[url('/images/s1.svg')] md:pb-20 md:border-b-2 md:border-b-orange-100">
        <IndustrySection />
        <GrapheneSection />
      </div>{" "}
      <Valuation />
      <TimeLine />
      <div className="mx-[-8px] md:mx-0 h-80 md:pt-[30rem] lg:pt-[50rem] md:h-96 bg-cover md:bg-center bg-no-repeat lg:h-96 bg-[url('/images/r.png')] relative col-span-1 md:col-span-2 order-3"></div>
      {/* <Problems /> */}
    </Layout>
  );
}
