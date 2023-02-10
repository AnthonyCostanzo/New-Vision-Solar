import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { ImPointRight } from "react-icons/im";
const HomeComponent = () => {
  return (
    <Layout title="B2 Oil">
      <div className="h-96 md:h-[80vh] w-full bg-gradient-to-r from-slate-300 to-slate-700 relative ">
        <div className="absolute h-full w-full ">
          <Image
            src="/images/Methes.png"
            className="opacity-80"
            layout="fill"
            alt="Methes Energies International"
          />
        </div>
      </div>
      <div className="h-10 bg-gradient-to-br from-main to-orange-500" />
      <div className="pt-8 px-4 grid md:grid-cols-2 mx-5 gap-10 m-auto py-20 ">
        <section className="">
          <h1 className="text-2xl mb-2 mt-2">Who We Are</h1>
          <article className="">
            <p className="max-w-full tracking-wide">
              Methes Energies International Ltd is a totally green “CLEAN TECH”
              renewable energy company that manufactures and markets an
              assortment of bio-lubricants, including bio-diesel fuels, by
              combining domestically sourced farm grown bio-derived feedstocks
              with proprietary technologies for superior performance, all molded
              around and supporting the four ideologies of being GREEN:
              renewable, biodegradable, recyclable and non-toxic (EARTH SAFE).
              These readily biodegradable environmentally acceptable and
              preferred supreme synthetics are packaged in reusable & recyclable
              “sustainable” packaging that equal or outperforms comparably
              advanced synthetic positioned and parity priced mineral oil base
              products as we strive to make such products readily available when
              satisfying regulatory requirements as well as the needs for
              socially responsible consumers and customers alike as they should
              not have to sacrifice value or performance when selecting an
              earthy friendlier option. These products, branded as b2, are a
              natural fit as our Methes Energies “green” preferred choices
              become “logical” choices.
            </p>
            <aside className="mt-3">
              {" "}
              <Link href="https://www.otcmarkets.com/stock/MEIL/quote">
                <span className="text-main tracking-wide">
                  View Stock Information
                </span>
              </Link>{" "}
            </aside>
          </article>
        </section>
        <section>
          <div className="relative h-[20rem] md:h-[70vh] flex justify-center">
            <Image
              src="/images/Branch-removebg-preview.png"
              layout="fill"
              alt="team members"
            />
          </div>
        </section>
      </div>
      <div className="w-full h-[18vh] md:h-[15vh]  bg-gradient-to-r from-green-100 to-orange-200 items-center mt-30 relative flex justify-center">
        <div className="absolute w-9/12 md:w-3/12 h-[90%] ">
          <Image
            src="/images/green-removebg-preview.png"
            layout="fill"
            alt="team members"
          />
        </div>
      </div>
      <div className="pt-8 px-4 grid md:grid-cols-2 md:mx-5 gap-10 m-auto py-20 mt-5">
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl mt-2 text-orange-600 font-bold">
            Why You need Us
          </h2>
          <article>
            <h3 className=" italic text-main">
              LOST IN USE + IMPROPER DISPOSAL of USED MOTOR & LUBRICANTS = OIL
              POLLUTION
            </h3>
            <p className="max-w-full tracking-wide">
              Used motor oil is the largest single source of oil pollution in
              our lakes, streams and rivers. According to the EPA, 40% of U.S.
              water pollution comes from used oil. Used motor oil entering the
              world’s oceans equal an oil tanker sized oil spill every week.
              Just one gallon of used oil can contaminate over 1 million gallons
              of fresh water. Americans spill over 180 million gallons of used
              oil each year into our waters...that’s over 16 Exxon Valdez
              spills.
            </p>
          </article>
          <article>
            <h3 className="text-main italic">BACKGROUND</h3>
            <p className="max-w-full tracking-wide">
              Petroleum based motor oils and lubricants (non EALs) are
              contaminating our water supply and causing irreversible damage to
              our environment; and, to human health. Every year, 10 billion
              gallons of liquid petroleum hydrocarbons, in the form of motor oil
              and other industrial lubricants (Accidental, Partial and Total
              LOSS applications) are released into the environment due to human
              activity:
            </p>
          </article>
          <article>
            <h3 className="text-main italic">EPA REPORTS</h3>
            <p className="max-w-full tracking-wide">
              The USA EPA reports that over 200 million gallons of motor oil are
              tossed in the trash (bottles containing residual left over oil and
              oil absorbed cardboard cannot be recycled and sent to a landfill),
              spilled on the ground or poured down drains and sewers annually.
              Again, this oil eventually ends up in our waterways as rainwater
              or melting snow carries it to the nearest body of water.
              Therefore, it is confirmed that motor oils and lubricants made
              from non- toxic, earth friendlier plant-based oils can protect us
              and our environment (EAL rationale).
            </p>
          </article>
        </section>

        <section>
          <div className="bg-main rounded-md shadow-md shadow-green-800  text-green-50 py-5 ">
            <ul className="md:mt-4   space-y-5 flex flex-col items-center list-disc px-10">
              <li className="text-green-50 text-[1.1rem]  ">
                Worldwide oil spills dating from 1901 – 2013 equaled 2.2 billion
                gallons; and, today, it is estimatednp the same amount is
                “silently spilled” every 100 days
              </li>
              <li className="text-green-50 text-[1.1rem] ">
                4.37 billion gallons of motor oil and other lubricants are lost
                in use, being leaked onto the road or burned in the engine as
                the average car loses each year two (2) gallons lost in use and
                one (1) gallon improperly disposed
              </li>
              <li className="text-green-50 text-[1.1rem] ">
                1.85 billion gallons of used motor oil and lubricants are
                illegally dumped – ending up in soil or down storm water drains
                as it only takes 1 gallon of oil to contaminate over 1 million
                gallons of drinking water
              </li>
              <li className="text-green-50 text-[1.1rem] ">
                Over 60% of all oil-related pollution in the USA is caused by
                the improper disposal of used motor oil, making it the single
                largest source of oil pollution in our nation’s waterways
              </li>
            </ul>
            <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-md p-4 mt-5 w-11/12 m-auto shadow-md shadow-orange-800">
              Of the 11 billion gallons of lubricants consumed each year, 28%
              are “lost in use” and released into the environment, 16% are
              improperly or illegally disposed, 34% are burned as fuel; and, 12%
              used in asphalt, other products or re-refined as twice refined
              (2XR) currently represents 6% of the U.S. lubrication market.
            </div>
          </div>
        </section>
      </div>
      <div className="h-10 bg-gradient-to-br from-orange-500 to-green-300" />
      <section className="mt-4 p-5 flex-col md:flex-row flex flex-wrap gap-3 mb-10">
        <article className="md:w-5/12">
          <h3 className="text-2xl mt-2 mb-2 text-orange-600 font-bold">
            Market Acceptance
          </h3>
          <p className="max-w-full tracking-wide">
            The bio-lubricant market (EALs) to hit to hit $4.26 billion by 2029
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
            of choice for more than two-thirds of demand.
          </p>
        </article>
        <div className="h-[22vh] mt-5 w-full md:w-6/12  m-auto relative">
          <Image
            alt="acceptance"
            src="/images/acceptance-removebg-preview.png"
            layout="fill"
          />
        </div>
        <div className="h-[25vh] mt-16 w-full flex justify-center relative p-5">
          <div className="absolute w-full md:w-6/12 h-[20vh]">
            <Image
              alt="acceptance"
              src="/images/assortment2-removebg-preview.png"
              layout="fill"
            />
          </div>
        </div>
      </section>
      <div className="h-[12vh] bg-gradient-to-r from-slate-400 to-slate-300 md:mt-20  relative flex justify-center items-center">
        <div className="w-2/12 absolute h-full">
          <Image alt="b2 oil " src="/images/b2Logo.png" layout="fill" />
        </div>
      </div>
      <section className="mt-14 p-5 md:flex-row flex-col flex flex-wrap gap-3 mb-20">
        <article className="md:w-8/12">
          <h3 className="text-2xl mt-2 mb-2 text-orange-600 font-bold">
            Market Drivers
          </h3>
          <p className="max-w-full w-11/12 tracking-wide">
            The driving forces behind the bio-lubricants market are regulatory
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
            everything else is just CRUDE.
          </p>
        </article>
        <div className="h-[35vh] md:w-3/12 mt-5  relative flex justify-center items-center">
          <Image
            alt="b2 oil "
            src="/images/drivers-removebg-preview.png"
            layout="fill"
          />
        </div>
      </section>
    </Layout>
  );
};

export default HomeComponent;
