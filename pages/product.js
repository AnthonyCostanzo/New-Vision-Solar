import Layout from "../components/Layout";
import Image from "next/image";
import Problems from "../components/Problems";
import Link from "next/link";
import { ImPointRight } from "react-icons/im";
const Product = () => (
  <Layout title={"Product Overview"}>
    <div className="md:h-[42rem] min-h-max md:p-10 lg:p-0 bg-gradient-to-br from-slate-500 to-slate-300 flex flex-col lg:flex-row justify-center items-center">
      <div className=" text-slate-50 w-11/12 mb-20 lg:w-4/12 lg:ml-3 mt-10 md:mt-0 order-2">
        <h2 className="ml-4 md:ml-0 leading-snug lg:text-[40px] max-w-md font-bold text-[Montserrat]">
          Product Overview & Financials
        </h2>
        <blockquote className="ml-4 md:ml-0  max-w-md lg:text-[1.2rem] text-semibold font-sans">
          Learn more about our groundbreaking product and gain some insight on
          what the future holds in store !
        </blockquote>

        <div className="grid grid-cols-2 mt-3 w-64 ml-2 gap-7 lg:relative lg:ml-0 lg:right-2">
          <button className="shadow-md  w-32 p-2 mb-12 shadow-green-100/50 bg-main  cursor-pointer rounded-full font-semibold  text-white">
            <Link href="#benefits" passHref>
              <span className=" mx-3 hover:text-yellow-200">Benefits</span>
            </Link>
          </button>
          <button className="shadow-md min-w-max  w-fit p-2 mb-12 shadow-green-100/50 bg-orange-400  cursor-pointer rounded-full font-semibold  text-white">
            <Link href="#projection" passHref>
              <span className="mx-3 hover:text-yellow-200">
                Market Projection
              </span>
            </Link>
          </button>
        </div>
      </div>
      <div className="h-48 md:h-[65%] w-10/12 md:w-6/12  mt-20 md:mt-0  relative lg:order-2">
        <Image src="/images/b2.png" layout="fill" alt="hero" />
      </div>
    </div>
    <div className="">
      <div className=" text-gray-200 bg-gradient-to-br from-[#db5c08] to-[#2c4f1eb4] p-5  shadow-sm shadow-gray-300">
        <div className="md:grid grid-cols-1 md:grid-cols-5 col-span-1 item-baseline">
          <div className="relative lg:bg-slate-200 md:w-full md:rounded-full lg:h-full w-2/3 m-auto lg:w-11/12 h-[16vh] mt-2">
            <Image
              alt="B2 Oil logo"
              src="/images/b2logo.png"
              layout="fill"
            ></Image>
          </div>
          <p className="text-[1.05rem] col-span-4 tracking-wide md:mt-3 md:ml-3 text-gray-7000 font-[Times]">
            B2 BiOil has been created to address the world’s growing “lubricant”
            concerns regarding motor oil’s effects on the environment (whether
            during oil production and/or during the oil’s ‘end-of-life’ improper
            disposal) with an eco-friendly offering that satisfies growing
            consumer demands while meeting the needs of on-going government
            requirements that mandate the procurement of domestically sourced
            bio-derived biodegradable products. Our eco-friendly offering, b2
            biOil “biodegradable & bio-based” full synthetic supreme motor oil,
            is properly positioned to satisfy the above needs as well as
            providing superior performance motor oil that exceeds the demands of
            the industry. It is API SN and ILSAC G-5 certified, satisfies the
            requirements to be included within the USDA BioPreferred Procurement
            Program, biodegrades up to 60% within 28 days and is parity priced
            with other similar claiming/performing full synthetic motor oils.
          </p>
          <button className="mt-4 w-36 md:col-start-2 md:ml-3 lg:ml-0 hover:scale-110 border-[1.2px] h-10 shadow-sm shadow-orange-200 bg-white rounded-full text-orange-400">
            <a href="http://www.b2oil.com/sneak-peak.html">LEARN MORE</a>
          </button>
        </div>
      </div>
      {/* <div className="h-56 bg-sky-200 relative order-4">
        <Image
          alt="B2 Oil logo"
          src="/images/marks.png"
          layout="fill"
          objectFit="contain"
        ></Image>
      </div> */}

      <div className=" p-5 order-5  bg-gradient-to-br text-black">
        <h3 id="benefits" className="text-[28px] font-bold text-green-700 ml-1">
          B2 Benefits
        </h3>
        <ul className="text-[1.05rem] space-y-2 mt-2">
          <li className="ml-1">
            Innovative formula is Ultimate Biodegradable, meaning the product
            will degrade over 60% within 28 days.
          </li>
          <li className="ml-1">
            Innovative formula contains “bio-content” that has been proven to
            reduce CO2 emissions of upwards to 69% vs conventional oils while
            reducing our dependency on foreign oil.
          </li>
          <li className="ml-1">
            Innovative formula contains “renewable ingredients” that can be
            domestically sourced and manufactured locally.
          </li>
          <li className="ml-1">
            Innovative packaging embraces “best practice” sustainable solutions,
            offering product in proprietary collapsible/recyclable plastic
            “bags” and repurposed/recyclable steel “drums”
          </li>
          <li className="ml-1">
            Innovative offering satisfies the growing demand for a renewable
            product while addressing the growing concerns of environmental
            impact
          </li>
        </ul>
      </div>
      <div className="order-6 min-h-max p-5">
        <h3 className="text-[28px] font-bold">
          B2 <span className="text-green-700">Green</span> Power{" "}
        </h3>
        <p className="text-[1.05rem] mt-2 tracking-wide">
          B2 BiOil has been created to address the world’s growing “lubricant”
          concerns regarding motor oil’s effects on the environment (whether
          during oil production and/or during the oil’s ‘end-of-life’ improper
          disposal) with an eco-friendly offering that satisfies growing
          consumer demands while meeting the needs of on-going government
          requirements that mandate the procurement of domestically sourced
          bio-derived biodegradable products.
        </p>
        <div className="grid tracking-wide grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-slate-50 to-slate-200 border-[1.2px] border-green-500 mt-5">
          <div className="  p-5 col-span-2 md:col-span-1 border-b-[1.2px] md:border-b-0 border-green-500 ">
            <h5 className="text-[18px] font-semibold mb-1 ">
              B2 BiOil Performance Update
            </h5>
            <p>
              Concluded rigorous testing with the DOD/DLA within a variety of
              military and government entities, including USPS, US Air Force,
              Dept. of Homeland Security and GSA: Testing began January
              2016…concluding on January 18, 2018, Bio-based acceptance
              announcement and assignment of NSN#’s, NSN#’s = approval to
              purchase. B2 will be allowed to bid on government procurement
              assignments through SAM.GOV and other military purchasing sites,
              Concurrent Technologies Corporation (CTC) and APEX Laboratories
              are the 3rd party testers of the military program (numerous backup
              support).
            </p>
            <div className="bg-gradient bg-gradient-to-r from-emerald-600 to-emerald-700 shadow smadow-md shadow-green-800 rounded-md p-5 mt-5">
              <div className=" m-auto h-72 w-72 lg:h-[50vh] lg:w-[50vh] relative p-2 bg-gradient bg-gradient-to-br from-slate-800 to-slate-100 rounded-full">
                {" "}
                <Image
                  className="bg-none"
                  alt="B2 Oil Hero"
                  src="/images/oilbl.png"
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
            </div>
          </div>
          <div className="p-5 md:border-l-[1.2px] border-green-500">
            <h5 className="text-[18px] font-semibold mb-1 ">Markets</h5>
            <p>
              The Market Analysis for Bio-Lubricants/EALS – (environmentally
              acceptable lubricants; i.e., biodegradable, nontoxic and
              renewable) showed that during the historic forecast period ending
              2019, the market closed its operations by reaching a final market
              valuation worth approximately $4.0 billion; and, is expected to
              grow at a CAGR of 4.40%. While this segment makes up less than
              1.5% of the global finished lubricants market, it is growing
              significantly faster than the others. North America and Europe
              account for three-quarters (¾) of bio-lube demand due to strict
              environmental policies. Industrial applications, led by hydraulic
              fluids, make up the majority of consumption. Synthetic esters are
              the base stock of choice for more than two-thirds of demand.
            </p>
            <h5 className="text-[18px] font-semibold mt-5 ">
              Mandated Military Market
            </h5>
            <p>
              Concurrent Technologies Corporation (CTC) initiated demonstration
              activities at four Air Force bases, Dept. of Homeland Security,
              Federal Law Enforcement Training Centers (FLETC) and US Postal
              Service; Army and Navy participation concluded January 18, 2018:
              Demonstration vehicles inspected and oil changed out with biobased
              engine oil products, Baseline petroleum oil samples taken from
              each vehicle for analysis.
            </p>
            <table className="col-span-2 h-[30vh] border-black mt-10 divide-y-2 divide-black w-full border-2 border-collapse">
              <tr className="">
                <td className="pl-2">Vehicles</td>
                <td>633,000.00</td>
              </tr>
              <tr className="">
                <td className="pl-2">Avg. Quarts per Vehicle</td>
                <td>5</td>
              </tr>
              <tr>
                <td className="pl-2">Annual Interval</td>
                <td>2</td>
              </tr>
              <tr>
                <td className="pl-2">Total Quarts</td>
                <td>6,330,000.00</td>
              </tr>
              <tr>
                <td className="pl-2">Total Gallons</td>
                <td>1,582,500.00</td>
              </tr>
              <tr className="bg-gray-400">
                <td className="pl-2">% of Market</td>
                <td>0.0006330</td>
              </tr>
            </table>
          </div>
          <div className="  p-5 col-span-2 border-t-[1.2px] border-green-500">
            <h5
              id="projection"
              className="text-[18px] font-semibold md:text-center mb-1 "
            >
              Projection
            </h5>
            <p>
              With NSN #’s assigned, our current forecast/projections are
              determined by monthly RFQ’s from the US Military’s (DoD/DLA/GSA)
              adherence to the USDA BioPreferred mandated federal procurement
              program as well as initial global interest for our biodegradable
              and bio-based lubricants. Therefore, we plan to initially produce
              30,000 gallons of 5W-30 and 5W-20 to begin to satisfy the demand
              from the US Government and an assortment of heavy duty engine oils
              (!5W-40 & 10W-40), high oleic hydraulic fluids and ISO-220 gear
              oils to fulfill current order requests (purchase orders).
            </p>
            <div className="mt-1 ">
              <p className="relative">
                * The global bio lubricants market is projected to grow from
                $3.08 billion in 2022 to $4.26 billion by 2029, at a CAGR of
                4.7% in forecast period, 2022-2029. The market growth chart is
                depicted below, additionally you could further your knowledge by
                clicking on the read more button.{" "}
              </p>{" "}
            </div>
            <div className="flex ml-1 ">
              <span className=" mt-3 ">
                <ImPointRight size={24} />
              </span>
              <button className="text-white hover:text-green-500 mt-2 ml-3 bg-gray-500 rounded-full h-8 w-24 ">
                <a href=" https://www.fortunebusinessinsights.com/bio-lubricants-market-104654">
                  Read More
                </a>
              </button>
            </div>

            <div className="bg-gradient mt-5 bg-gradient-to-br from-emerald-600 to-green-600 text-gray-50 p-5 rounded-md shadow-sm shadow-green-800">
              The company is targeting a go-to-market strategy that achieves a
              market price based on a flexible “fixed” cost of goods of 25 – 33%
              and a manageable GSA/Operations budget of 25-33% allowing for a
              33-50% contribution. It is our strong expectation, that through
              volume and managed overhead, we’ll be able to reduce cost of goods
              by up to 50% (25% lubricants) and streamline operations based on
              efficient/economical procurement as well as improving overall
              profitability and performance by bringing ALL NECESSARY FUNCTIONS
              “in-house” in order to effectively manage costs/quality.
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="md:mt-2 p-5 md:flex-row flex-col flex flex-wrap gap-3 mb-10">
      <article className="md:w-8/12 lg:w-9/12">
        <h3 className="text-2xl mt-2 mb-2 text-orange-600 font-bold">
          Performance Benefits
        </h3>
        <h4 className="italic text-main min-w-full">Proven In Racing</h4>
        <p className="max-w-full w-11/12 tracking-wide mt-1">
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
      <div className="h-48 order-3 mt-5  w-1/2 m-auto md:h-60 md:w-3/12 md:mt-32 lg:mt-10 relative lg:w-2/12 lg:right-20 flex justify-center items-center">
        <Image
          alt="b2 oil "
          src="/images/b2vehicle-removebg-preview.png"
          layout="fill"
        />
      </div>
      <article className="md:order-3">
        <h3 className="italic text-main ">Engine Performance Benefits</h3>

        <ul className="mt-1">
          <li>
            <span className="font-semibold">Natural Detergency </span>– As polar
            compounds, b2 biOil base oil has the unique ability to dissolve
            sludge and varnish, helping equipment stay clean and operate
            efficiently.
          </li>
          <li>
            <span className="font-semibold">Thermal Stability </span> –
            Excellent resistance to decomposition at high temperatures.
          </li>
          <li>
            <span className="font-semibold">4-Ball Wear </span>– Base oils have
            an increased affinity for metal surfaces, allowing them to prevent
            wear by forming protective barriers between moving parts.
          </li>
          <li>
            <span className="font-semibold">Hydrolytic Stability </span> –
            Superior ability to resist chemical composition (hydrolysis) in the
            presence of water and ideal for applications whereby risk of water
            contamination is high
          </li>
          <li>
            <span className="font-semibold"> Evaporative Loss (NOACK) </span>–
            Reduced oil loss due to evaporation, viscosity is better maintained,
            fuel economy improves and increased phosphorous retention.
          </li>
          <li>
            <span className="font-bold"> Flash Point </span> – Ideal for
            applications where operating temperatures are high and flammability
            is a concern.
          </li>
          <li>
            <span className="font-bold"> Oxidative Stability </span> – Increased
            oil longevity for extended drain intervals, excellent response to
            antioxidant additives, less equipment downtime and reduced
            maintenance costs.
          </li>
          <li>
            <span className="font-bold"> Viscosity Index </span>– Enhanced film
            thickness at elevated temperatures, improved equipment life and
            reliability; and, reduced viscous drag on moving parts (minimal
            treat rates of viscosity modifiers).
          </li>
        </ul>
      </article>
      <article className="md:order-3">
        <h3 className="italic text-main ">Additional Benefits</h3>

        <p className="tracking-wide w-11/12">
          Innovative bio-synthetic formula is readily biodegradable, meaning the
          product will degrade over 60% within 14 days. Innovative bio-synthetic
          formula contains “bio-content” that has been proven to reduce CO2
          emissions of upwards to 69% VS conventional oils while reducing our
          dependence on foreign oil. Innovative bio-synthetic formula contains
          “renewable” ingredients that can be domestically sourced and
          manufactured locally. Innovative bio-synthetic formula has been tested
          and successfully proven in the race cars and on the tracks of the most
          extreme racing conditions, featuring NASCAR, the American LeMans
          Series, Grand Am and IMSA. Innovative bio-synthetic products have been
          previously sold in box retails, including Walmart, The Home Depot, Ace
          Hardware and others; and, over 65,000 oil changes were completed in
          Walmart’s Tire, Lube and Express centers without a single complaint or
          blown engine, Innovative product packaging embraces “best practice”
          sustainable solutions, offering product in proprietary
          collapsible/recyclable pouches and reusable/recyclable HDPE totes and
          steel drums; and, Innovative product assortment satisfies the growing
          demand for a renewable product while addressing the growing concerns
          of environmental impact.
        </p>
      </article>
    </section>
    <div className="h-96 w-11/12 hidden m-auto md:flex  relative mb-14">
      <Image src="/images/engine.png" alt=" " layout="fill" />
    </div>
    <div className="h-10 bg-gradient-to-br from-main to-slate-400" />
    <section className="mt-5 p-5 md:flex-row flex-col flex flex-wrap gap-3 mb-10">
      <article>
        <h3 className="text-2xl mt-2 mb-2 text-orange-600 font-bold">
          Sustainable Packaging
        </h3>
        <p>
          Approximately 37.5 million gallons of petroleum oil is dumped into USA
          landfills each year from the more than 3 billion “used” motor oil
          bottles trashed with oil residue still left inside. Packaging
          (including proper disposal) is an incremental cost that does not
          necessarily has to be passed on to the consumer or customer
          (end-users). The company is responding to this opportunity with new
          concepts in motor oil sales and delivery…environmentally sustainable
          oil delivery or E-SOD.
        </p>
        <h4 className="italic text-main mt-2">Eco-Pouch</h4>
        <p>
          Approximately 37.5 million gallons of petroleum oil is dumped into USA
          landfills each year from the more than 3 billion “used” motor oil
          bottles trashed with oil residue still left inside. Packaging
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
    <section className="md:mt-8 p-5 text-center md:flex-row flex-col flex flex-wrap gap-3 mb-10">
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
    <div className="h-54 w-full m-auto md:h-96 relative flex justify-center items-center">
      <Image alt="b2 oil " src="/images/footer.png" layout="fill" />
    </div>
  </Layout>
);

export default Product;
