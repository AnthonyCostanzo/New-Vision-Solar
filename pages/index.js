import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import IndustrySection from "../components/IndustrySection";
import GrapheneSection from "../components/GrapheneSection";
import Goal from "../components/Goal";
import Problems from "../components/Problems";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Goal />

      <div className="grid md:grid-cols-2 md:divide-x-2 md:p-5 md:gap-10 bg-gradient-to-br from-green-300 via-[#2dc78a] to-#7CFFCB text-slate-800 border-b-2 border-orange-100">
        <IndustrySection />
        <GrapheneSection />
      </div>
      <Problems />
    </Layout>
  );
}
