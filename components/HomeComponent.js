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
            src="/images/backkdrop.png"
            className="opacity-80"
            layout="fill"
            alt="Methes Energies International"
          />
        </div>
      </div>
      <div className="h-10 bg-gradient-to-br from-main to-slate-400" />
      <div className="pt-8 px-4 grid md:grid-cols-2 mx-5 gap-10 m-auto py-20 ">
        <section className="">
          <h1 className="text-2xl mb-2 mt-2 text-orange-600 font-bold">
            Who We Are
          </h1>
          <article className="">
            <p className="max-w-full tracking-wide">
              {`Methes Energies International Ltd is a totally green “CLEAN TECH”
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
              become “logical” choices.`}
            </p>
            <aside className="mt-3">
              {" "}
              <Link href="https://www.otcmarkets.com/stock/MEIL/quote">
                <span className="text-main tracking-wide cursor-pointer">
                  View Market Activity
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
              {`Used motor oil is the largest single source of oil pollution in
              our lakes, streams and rivers. According to the EPA, 40% of U.S.
              water pollution comes from used oil. Used motor oil entering the
              world’s oceans equal an oil tanker sized oil spill every week.
              Just one gallon of used oil can contaminate over 1 million gallons
              of fresh water. Americans spill over 180 million gallons of used
              oil each year into our waters...that’s over 16 Exxon Valdez
              spills.`}
            </p>
          </article>
          <article>
            <h3 className="text-main italic">BACKGROUND</h3>
            <p className="max-w-full tracking-wide">
              {`Petroleum based motor oils and lubricants (non EALs) are
              contaminating our water supply and causing irreversible damage to
              our environment; and, to human health. Every year, 10 billion
              gallons of liquid petroleum hydrocarbons, in the form of motor oil
              and other industrial lubricants (Accidental, Partial and Total
              LOSS applications) are released into the environment due to human
              activity.`}
            </p>
          </article>
          <article>
            <h3 className="text-main italic">EPA REPORTS</h3>
            <p className="max-w-full tracking-wide">
              {`The USA EPA reports that over 200 million gallons of motor oil are
              tossed in the trash (bottles containing residual left over oil and
              oil absorbed cardboard cannot be recycled and sent to a landfill),
              spilled on the ground or poured down drains and sewers annually.
              Again, this oil eventually ends up in our waterways as rainwater
              or melting snow carries it to the nearest body of water.
              Therefore, it is confirmed that motor oils and lubricants made
              from non- toxic, earth friendlier plant-based oils can protect us
              and our environment (EAL rationale).`}
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
                {`  4.37 billion gallons of motor oil and other lubricants are lost
                in use, being leaked onto the road or burned in the engine as
                the average car loses each year two (2) gallons lost in use and
                one (1) gallon improperly disposed`}
              </li>
              <li className="text-green-50 text-[1.1rem] ">
                {`    1.85 billion gallons of used motor oil and lubricants are
                illegally dumped – ending up in soil or down storm water drains
                as it only takes 1 gallon of oil to contaminate over 1 million
                gallons of drinking water`}
              </li>
              <li className="text-green-50 text-[1.1rem] ">
                {` Over 60% of all oil-related pollution in the USA is caused by
                the improper disposal of used motor oil, making it the single
                largest source of oil pollution in our nation’s waterways`}
              </li>
            </ul>
            <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-md p-4 mt-5 w-11/12 m-auto shadow-md shadow-orange-800">
              {`  Of the 11 billion gallons of lubricants consumed each year, 28%
              are “lost in use” and released into the environment, 16% are
              improperly or illegally disposed, 34% are burned as fuel; and, 12%
              used in asphalt, other products or re-refined as twice refined
              (2XR) currently represents 6% of the U.S. lubrication market.`}
            </div>
          </div>
        </section>
      </div>
      <div className="h-10 bg-gradient-to-br from-main to-slate-400" />
      <section className="mt-4 p-5 flex-col md:flex-row flex flex-wrap gap-3 mb-10">
        <article className="md:w-5/12">
          <h3 className="text-2xl mt-2 mb-2 text-orange-600 font-bold">
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
      <div className="h-[12vh] bg-gradient-to-r from-green-600 to-slate-400 md:mt-20  relative flex justify-center items-center">
        <div className="w-2/12 absolute h-full">
          <Image alt="b2 oil " src="/images/b2Logo.png" layout="fill" />
        </div>
      </div>
      <section className="mt-14 p-5 md:flex-row flex-col flex flex-wrap gap-3 mb-10">
        <article className="md:w-8/12">
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
        <div className="h-[35vh] md:w-3/12 mt-5 md:mt-20  relative flex justify-center items-center">
          <Image
            alt="b2 oil "
            src="/images/drivers-removebg-preview.png"
            layout="fill"
          />
        </div>
      </section>
      <div className="h-96 w-11/12 m-auto relative">
        <Image src="/images/engine.png" alt=" " layout="fill" />
      </div>
      <section className="mt-14 p-5 md:flex-row flex-col flex flex-wrap gap-3 mb-10">
        <article className="md:w-8/12">
          <h3 className="text-2xl mt-2 mb-2 text-orange-600 font-bold">
            Performance Benefits
          </h3>
          <h4 className="italic text-main min-w-full">Proven In Racing</h4>
          <p className="max-w-full w-11/12 tracking-wide mt-2">
            {`A variety of teams in recreational and profession racing are
            rigorously testing the endurance as well as the performance
            qualities of b2 biOil’s within the most extreme engine conditions.
            These innovative formulations have been previously tested and proven
            in the race cars and on the tracks of the most extreme racing
            conditions, featuring NASCAR and the former Grand Am and American
            LeMans Series. Dyno testing by Tri-Star and Rousch Yates racing
            showed and confirmed an increase in horsepower when using a
            bio-based synthetic formulation.While maintaining excellent
            stability in rigorous lubricating environments, b2 biOil base oils
            (> 25% bio-content) biodegrade when released into the environment at
            a rate of 82.9% (OECD 301B). Bio-sourced (mandated bio-content
            requirements) does not always equal biodegradability. As for us, all
            b2 formulations are made with domestically sourced bio-content and
            are “readily biodegradable.” This bio-derived synthetic ester base
            stock modified with an enhanced/advanced additive package delivers
            plenty of advantages, including maximum lubrication protection and
            improved engine performance along with increased fuel economy.`}
          </p>
        </article>
        <div className="h-48 order-3 md:order-2 w-1/2 m-auto md:h-60 md:w-2/12 mt-5 md:mt-14  relative flex justify-center items-center">
          <Image
            alt="b2 oil "
            src="/images/b2vehicle-removebg-preview.png"
            layout="fill"
          />
        </div>
        <article className="md:order-3">
          <h3 className="italic text-main ">Additional Benefits</h3>

          <p className="tracking-wide w-11/12">
            Innovative bio-synthetic formula is readily biodegradable, meaning
            the product will degrade over 60% within 14 days. Innovative
            bio-synthetic formula contains “bio-content” that has been proven to
            reduce CO2 emissions of upwards to 69% VS conventional oils while
            reducing our dependence on foreign oil. Innovative bio-synthetic
            formula contains “renewable” ingredients that can be domestically
            sourced and manufactured locally. Innovative bio-synthetic formula
            has been tested and successfully proven in the race cars and on the
            tracks of the most extreme racing conditions, featuring NASCAR, the
            American LeMans Series, Grand Am and IMSA. Innovative bio-synthetic
            products have been previously sold in box retails, including
            Walmart, The Home Depot, Ace Hardware and others; and, over 65,000
            oil changes were completed in Walmart’s Tire, Lube and Express
            centers without a single complaint or blown engine, Innovative
            product packaging embraces “best practice” sustainable solutions,
            offering product in proprietary collapsible/recyclable pouches and
            reusable/recyclable HDPE totes and steel drums; and, Innovative
            product assortment satisfies the growing demand for a renewable
            product while addressing the growing concerns of environmental
            impact.
          </p>
        </article>
      </section>
      <div className="h-10 bg-gradient-to-br from-main to-slate-400" />
      <section className="mt-14 p-5 md:flex-row flex-col flex flex-wrap gap-3 mb-10">
        <article>
          <h3 className="text-2xl mt-2 mb-2 text-orange-600 font-bold">
            Sustainable Packaging
          </h3>
          <p>
            Approximately 37.5 million gallons of petroleum oil is dumped into
            USA landfills each year from the more than 3 billion “used” motor
            oil bottles trashed with oil residue still left inside. Packaging
            (including proper disposal) is an incremental cost that does not
            necessarily has to be passed on to the consumer or customer
            (end-users). The company is responding to this opportunity with new
            concepts in motor oil sales and delivery…environmentally sustainable
            oil delivery or E-SOD.
          </p>
          <h4 className="italic text-main mt-2">Eco-Pouch</h4>
          <p>
            Approximately 37.5 million gallons of petroleum oil is dumped into
            USA landfills each year from the more than 3 billion “used” motor
            oil bottles trashed with oil residue still left inside. Packaging
            (including proper disposal) is an incremental cost that does not
            necessarily has to be passed on to the consumer or customer
            (end-users). The company is responding to this opportunity with new
            concepts in motor oil sales and delivery…environmentally sustainable
            oil delivery or E-SOD.
          </p>
        </article>
        <div className="h-48 w-11/12 m-auto md:h-60 mt-5 md:mt-14  relative flex justify-center items-center">
          <Image alt="b2 oil " src="/images/packaging.png" layout="fill" />
        </div>
      </section>
      <div className="h-54 w-full m-auto md:h-60 relative flex justify-center items-center">
        <Image alt="b2 oil " src="/images/spack.png" layout="fill" />
      </div>
      <section className="mt-8 p-5 text-center md:flex-row flex-col flex flex-wrap gap-3 mb-10">
        <article className="md:w-11/12 m-auto ">
          <h3 className="text-2xl mt-2 mb-2 text-orange-600 font-bold">
            Proven By The Military
          </h3>

          <p className="max-w-full tracking-wide">
            {`   The Defense Logistics Agency (DLA), provider of logistical,
            acquisition and technical support for the Army, Navy, Air Force,
            Marine Corps, Coast Guard, Space Force, United States Postal
            Service, NASA and other federal agencies and allies, in partnership
            with the Air Force Research Laboratory, conducted testing and
            validation for over four (4) years of bio-based synthetic motor oils
            in government vehicles at four Air Force bases, the Department of
            Homeland Security installations, FLETC and others.`}
          </p>
          <h3 className="text-main italic mt-5 text-xl">Successful Results</h3>
          <p className="tracking-wide">
            {`Air Force personnel at Seymour-Johnson Air Force Base in North
            Carolina separated four vehicles from the motor pool and replaced
            the conventional oil (Schaeffer Re-Refined Motor Oil) with b2 biOil.
            The conventional oil was sent to a lab for analysis for the purpose
            of establishing a baseline for later comparison with the bio-based
            product. Over several weeks, project participants repeated this
            procedure on a total of 40 vehicles at the DHS Federal Law
            Enforcement Training Center in Georgia, Luke AFB in Arizona,
            Fairchild AFB in Washington and Malmstrom AFB in Montana. The
            manufacturer of b2 had made strides over the past decade as industry
            test results showed that the use of “green” lubricants contributed
            to improved gas mileage, longer oil-change intervals and the
            reduction of greenhouse gases. In addition, the b2 biOil lubricants
            can simply replace conventional oil without modification to the
            engine. The Department of Defense (DoD) uses about 1.1 million
            gallons of 5W-20 and 5W-30 engine oil annually in 190,000 vehicles.
            The entire federal government, including the military services,
            civilian agencies and the US Postal Service maintains a total of
            633,000+ vehicles. Testing and evaluation showed that b2 is
            comparable to and better than conventional oil which could lead to a
            complete conversion to bio-based synthetic motor oils in the federal
            government’s fleet of non-tactical vehicles. Pressure to convert
            comes in the form of DoD sustainable procurement directions
            (including the USDA Bio Preferred Mandated Federal Procurement
            Program), Federal Acquisition Regulations and laws such as the Farm
            Security and Rural Investment Act of 2002, which stresses the need
            for the government to procure and use bio-based products. The
            successful outcome is great news for farmers as it will expand the
            market for domestically produced agricultural products. Other
            benefits include a reduction in life-cycle carbon footprint and
            dependency on foreign petroleum.`}
          </p>
        </article>
      </section>
      <div className="h-54 w-full m-auto md:h-60 relative flex justify-center items-center">
        <Image alt="b2 oil " src="/images/footer.png" layout="fill" />
      </div>
    </Layout>
  );
};

export default HomeComponent;
