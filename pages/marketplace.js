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
          {`           The bio-lubricant market (EALs) to hit to hit $4.26 billion by 2029
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
    <div className="h-[12vh] bg-gradient-to-r from-green-600 to-slate-400 relative flex justify-center items-center">
      <div className="w-2/12 absolute h-full">
        <Image alt="b2 oil " src="/images/b2Logo.png" layout="fill" />
      </div>
    </div>
    <section className="mt-10 p-5 lg:flex-row flex-col flex flex-wrap gap-3 mb-10">
      <article className="lg:w-8/12">
        <h3 className="text-2xl mt-2 mb-2 text-orange-600 font-bold">
          Market Drivers
        </h3>

        <p className="max-w-full w-11/12 tracking-wide">
          {`The driving forces behind the bio-lubricants market are regulatory
            mandates, performance requirements and costs. At early stages,
            demand was primarily driven by regulatory mandates dictating the use
            of biodegradable environmentally innocuous lubricants in total loss
            applications (like bar & chain oils, gear oils and hydraulic fluids)
            in highly sensitive areas. However, lack of OEM certifications still
            poses a major challenge on the road to fill commercial availability.
            Performance drawbacks prevented a wider adoption of bio-lubricants
            in more sever end uses as current manufacturers could not meet the
            industry requirements. With the emergence of oleo-chemical
            derivates, most notably synthetic and polyol esters including
            estolides (ingredients found in b2 biOil), contributed to improving
            performance, broadening the application spectrum to include more
            severe, incidental loss lubrication applications. Increasing supply
            of high performing and more cost competitive synthetic bio-basestock
            technologies is bringing the bio-lubricants industry to the next
            level. Scalability and higher cost remains a major obstacle, but raw
            material supply with increase finished goods production is
            limitless. Bio-lubricant demand will be shaped by the
            intensification of supply/demand forces and market dynamics and the
            marketer/manufacturer’s ability(s) to build brand awareness,
            generate trial/sampling occasions and to gain distribution…educating
            while informing end-users of the many benefits of switching their
            current lubrication choices to a green alternative…a logical choice,
            with the MOTTO: “Change your oil, Change your world!’ Why, because
            everything else is just CRUDE.`}
        </p>
      </article>
      <div className="h-[35vh] w-full md:w-8/12 m-auto lg:w-3/12 mt-5  relative flex justify-center items-center">
        <Image
          alt="b2 oil "
          src="/images/drivers-removebg-preview.png"
          layout="fill"
        />
      </div>
    </section>
  </Layout>
);

export default Marketplace;
