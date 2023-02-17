import Layout from "./Layout";
import Image from "next/image";

const AboutComponent = () => (
  <Layout title="About">
    <section className="flex mt-1 flex-col justify-center items-center gap-10 md:gap-20 w-11/12 m-auto mb-10">
      <div className="relative mt-10 h-[20vh] md:h-96 w-1/2 md:w-1/4 m-auto">
        <Image
          alt="B2 Oil logo"
          src="/images/thinkgreen.png"
          layout="fill"
        ></Image>
      </div>
      <article>
        <p className="tracking-wide text-center w-10/12 m-auto">
          The United States Environmental Protection Agency (US EPA) has
          outlined the properties of Environmentally Acceptable Lubricants
          (EALs) targeting three primary environmental traits; biodegradability,
          aquatic toxicity and bioaccumulation (see below). There is a growing
          need for environmentally acceptable lubricant (EAL) solutions – a
          rising demand for lubricants with improved environmental protection
        </p>
      </article>
    </section>
    <div className="h-10 bg-gradient-to-br from-green-800 to-slate-400 my-7" />
    <div className="md:grid md:grid-cols-2">
      <section className="w-11/12 m-auto">
        <h2 className="text-xl font-bold  text-green-800 underline mb-1">
          Regulatory Requirements
        </h2>
        <article className="tracking-wide">
          B2 assortment of engine oils and industrial lubrication offerings
          elevate the environmentally protective qualities of EAL lubricants and
          industrial applications worldwide, meeting the evolving environmental
          registrations and to capitalize on the growing EAL market demands. Our
          b2 biOil’s have demonstrated biodegradability, minimal aquatic
          toxicity and non-bio-accumulative potential.
        </article>
        <div className="grid md:grid-cols-3 gap-2 divide-y-2 md:divide-y-0 m-auto bg-gradient-to-br md:divide-x divide-slate-500 from-slate-300 to-slate-100 rounded-md mb-10 mt-5">
          <div className="p-5">
            <h3 className="italic text-green-700 mt-2">Biodegradability</h3>
            <article className="max-w-sm text-black tracking-wide">
              The capacity of lubricants to be decomposed by microorganisms over
              time into: – a combination of simpler by-products (primary
              biodegradation) – carbon dioxide and water (ultimate
              biodegradation)
            </article>
          </div>
          <div className="p-5">
            <h3 className="italic text-green-700 mt-2">
              Minimal Aquatic Toxicity
            </h3>
            <article className="max-w-sm text-black tracking-wide">
              The capacity of lubricants to be decomposed by microorganisms over
              time into: – a combination of simpler by-products (primary
              biodegradation) – carbon dioxide and water (ultimate
              biodegradation)
            </article>
          </div>
          <div className="p-5">
            <h3 className="italic text-green-700 mt-2">Bio-Accumalative</h3>
            <article className="max-w-sm text-black tracking-wide">
              The build-up of chemicals within the tissues of an organism over
              time
            </article>
          </div>
        </div>
      </section>

      <section className="w-11/12 m-auto md:m-0">
        {" "}
        <h2 className="text-xl font-bold  text-green-800 underline mb-1">
          Regulatory Developments
        </h2>
        <h3 className="italic text-green-700 mt-2">Vessel General Permit</h3>
        <article className="tracking-wide">
          Requires vessels to use EALs in all oil-to-sea interfaces. EALs meet
          standards for biodegradability, toxicity and bioaccumulation potential
          that minimizes their likely adverse consequences in the aquatic
          environment and includes bio-derived synthetic esters and high oleic
          vegetable oils
        </article>
        <h3 className="italic text-green-700 mt-2">
          USDA BioPreferred Program
        </h3>
        <article className="tracking-wide">
          The USDA designated and added engine crankcase oils and other
          lubrication applications to their mandated federal procurement program
          (www.biopreferred.gov). Federal agencies and their contractors must
          give preferential consideration to these lubrication categories that
          contain a minimum of bio-based content (25% for crankcase oils)
        </article>
        <h3 className="italic text-green-700 mt-2">Executive Order 13693</h3>
        <article className="tracking-wide">
          Requires federal agencies to promote sustainable acquisition and
          procurement which includes meeting statutory mandates requiring
          purchase preference for BioPreferred and bio-derived/bio-based
          products designated by the USDA.
        </article>
      </section>
      <div className="h-10 bg-gradient-to-br from-green-800 to-slate-400 my-7 md:col-span-2" />
      <div className="md:col-span-2 flex flex-col md:flex-row gap-5 w-[96%] m-auto">
        <section className="w-11/12 m-auto md:m-0">
          <h2 className="text-xl font-bold  text-green-800 underline mb-1">
            Social Responsibility
          </h2>
          <article className="tracking-wide w-11/12">
            A Top Priority is Social Responsibility that includes Social
            Reputation as many people (consumers/customers) are searching for
            and promoting their use off EALs, driven by their desire to promote
            their own environmental agendas.
          </article>
          <h3 className="italic text-green-700 mt-1">Background</h3>
          <article className="tracking-wide">
            The USDA designated and added engine crankcase oils and other
            lubrication applications to their mandated federal procurement
            program (www.biopreferred.gov). Federal agencies and their
            contractors must give preferential consideration to these
            lubrication categories that contain a minimum of bio-based content
            (25% for crankcase oils)
          </article>
        </section>

        <section className="w-11/12 m-auto">
          <h2 className="text-xl font-bold  text-green-800 underline mb-1">
            LOST IN USE + IMPROPER DISPOSAL of USED MOTOR OILS & LUBRICANTS =
            OIL POLLUTION
          </h2>
          <article className="tracking-wide">
            Used motor oil is the largest single source of oil pollution in our
            lakes, streams and rivers. According to the EPA, 40% of U.S. water
            pollution comes from used oil. Used motor oil entering the world’s
            oceans equal an oil tanker sized oil spill every week. Just one
            gallon of used oil can contaminate over 1 million gallons of fresh
            water. Americans spill over 180 million gallons of used oil each
            year into our waters…that’s over 16 Exxon Valdez spills.
          </article>
        </section>
      </div>
    </div>
    <div className="md:w-11/12 py-5 bg-gradient-to-br from-green-500 to-slate-700 my-7 m-auto md:rounded-md shadow-slate-600 px-10">
      <ul className=" list-disc tracking-wide space-y-3 text-green-50">
        <li className=" text-[1.1rem]  ">
          Worldwide oil spills dating from 1901 – 2013 equaled 2.2 billion
          gallons; and, today, it is estimatednp the same amount is “silently
          spilled” every 100 days
        </li>
        <li className=" text-[1.1rem] ">
          {`  4.37 billion gallons of motor oil and other lubricants are lost
                in use, being leaked onto the road or burned in the engine as
                the average car loses each year two (2) gallons lost in use and
                one (1) gallon improperly disposed`}
        </li>
        <li className=" text-[1.1rem] ">
          {`    1.85 billion gallons of used motor oil and lubricants are
                illegally dumped – ending up in soil or down storm water drains
                as it only takes 1 gallon of oil to contaminate over 1 million
                gallons of drinking water`}
        </li>
        <li className=" text-[1.1rem] ">
          {` Over 60% of all oil-related pollution in the USA is caused by
                the improper disposal of used motor oil, making it the single
                largest source of oil pollution in our nation’s waterways`}
        </li>
      </ul>
      <div className="bg-gradient-to-br border-2 border-green-500 from-slate-50 to-slate-100 shadow-md shadow-slate-200 rounded-full  p-10 my-5 w-[92%] m-auto ">
        <p className=" text-[1.1rem] tracking-wide text-green-700 italic ">
          Of the 11 billion gallons of lubricants consumed each year, 28% are
          “lost in use” and released into the environment, 16% are improperly or
          illegally disposed, 34% are burned as fuel; and, 12% used in asphalt,
          other products or re-refined as twice refined (2XR) currently
          represents 6% of the U.S. lubrication market.
        </p>
      </div>
    </div>
  </Layout>
);

export default AboutComponent;
