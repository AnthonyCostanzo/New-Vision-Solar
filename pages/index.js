import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import IndustrySection from "../components/IndustrySection";
import GrapheneSection from "../components/GrapheneSection";
import Goal from "../components/Goal";
import Problems from "../components/Problems";
import TimeLine from "../components/Timeline";
import Valuation from "../components/Valuation";
import Image from "next/image";
export default function Home() {
  return (
    <Layout background={"bg-gray-200"}>
      <Hero />
      <Goal />
      <div className="grid relative mb-10 bg-no-repeat bg-[url('/images/s1.svg')] md:pb-20 md:border-b-2 md:border-b-orange-100">
        <IndustrySection />
        <GrapheneSection />
      </div>{" "}
      <Valuation />
      <TimeLine />
      <div className="h-[27rem] md:h-[35rem] lg:h-[55rem]  bg-cover bg-center bg-no-repeat bg-[url('/images/r.png')] relative col-span-1 md:col-span-2 order-3"></div>
      {/* <Problems /> */}
    </Layout>
  );
}
