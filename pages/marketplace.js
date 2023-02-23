import Layout from "../components/Layout";
import Image from "next/image";

const Marketplace = () => (
  <Layout title="Marketplace">
    <section className="mt-4 p-5 flex-col lg:flex-row flex flex-wrap gap-3 mb-10">
      <article className="lg:w-5/12">
        <h3 className="text-2xl mt-2 mb-2 text-main font-bold">
          Market Acceptance
        </h3>
        <p className="max-w-full tracking-wide">
          {`The bio-lubricant market (EALs) to hit to hit $4.26 billion by 2029
            as government initiatives govern oil-based lubricants to bolster
            market growth with a CAGR of almost 4.7% 2022 – 2029 (2021 = $2.92
            billion/2029 forecast = $4.26 billion). While this segment makes up
            less than 1.5% of the global finished lubricants market, it is
            growing significantly faster than the others. Government policies
            are projected to increase sustainable lubricants as well as increase
            investment in R&D activities are expected to drive the market during
            this period/ The factors are expected to ensure that the
            bio-lubricants market growth in the coming years. North America and
            Europe account for three-quarters (3/4) of the EAL demand due to
            strict environmental policies. Industrial applications, led by
            hydraulic fluids (considered an Accidental or Partial loss
            application susceptible to accidental or intentional spillage), make
            up the majority of consumption. Synthetic esters are the base stock
            of choice for more than two-thirds of demand.`}
        </p>
      </article>
      <div className="h-[27vh] mt-5 w-full lg:w-6/12 lg:mt-9  m-auto relative">
        <Image
          alt="acceptance"
          src="/images/acceptance-removebg-preview.png"
          layout="fill"
        />
      </div>
      <div className="h-[25vh] mt-10 md:mt-16 w-full flex justify-center relative p-5">
        <div className="absolute w-full lg:w-6/12 h-[24vh]">
          <Image
            alt="acceptance"
            src="/images/assortment2-removebg-preview.png"
            layout="fill"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Marketplace;
