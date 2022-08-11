import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { ImPointRight } from "react-icons/im";
const B2Oil = () => {
  return (
    <Layout title="B2 Oil">
      <div className="flex flex-col">
        <div className="md:order-2 text-gray-200 bg-gradient-to-r from-[#db5c08] to-[#f67a22b4] p-5  shadow-sm shadow-gray-300">
          <div className="md:flex">
            <div className="flex justify-center py-7 md:py-0  md:w-1/4  ">
              <div className="relative h-40 w-56 md:w-40 md:h-48">
                <Image
                  alt="B2 Oil logo"
                  src="/images/b2logo.png"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <p className="text-[20px] tracking-wide md:mt-3 md:ml-3 text-gray-7000 font-[Times]">
              b2 biOil has been created to address the world’s growing
              “lubricant” concerns regarding motor oil’s effects on the
              environment (whether during oil production and/or during the oil’s
              ‘end-of-life’ improper disposal) with an eco-friendly offering
              that satisfies growing consumer demands while meeting the needs of
              on-going government requirements that mandate the procurement of
              domestically sourced bio-derived biodegradable products. Our
              eco-friendly offering, b2 biOil “biodegradable & bio-based” full
              synthetic supreme motor oil, is properly positioned to satisfy the
              above needs as well as providing superior performance motor oil
              that exceeds the demands of the industry. It is API SN and ILSAC
              G-5 certified, satisfies the requirements to be included within
              the USDA BioPreferred Procurement Program, biodegrades up to 60%
              within 28 days and is parity priced with other similar
              claiming/performing full synthetic motor oils.
            </p>
          </div>
          <button className="w-36 md:mt-4 md:ml-40 hover:scale-110 border-[1.2px] shadow-sm shadow-orange-200 bg-white rounded-full h-14 mt-2 text-orange-400">
            <a href="http://www.b2oil.com/sneak-peak.html">LEARN MORE</a>
          </button>
        </div>
        <div className="h-56 bg-sky-200 relative order-4">
          <Image
            alt="B2 Oil logo"
            src="/images/marks.png"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className="bg-[url('/images/clouds.jpeg')] md:order-1  pt-20 pb-16 bg-center">
          <div className="h-48 md:h-[50vh] relative ">
            <Image
              className="bg-inherit"
              alt="B2 Oil Hero"
              src="/images/b2.png"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        </div>

        <div className="flex flex-col order-3 md:flex-row bg-gray-500 p-5">
          <div className="relative m-auto h-48 w-48 md:h-[30vh] md:w-10/12 lg:w-5/12 mt-5 ">
            <Image
              alt="B2 Oil logo"
              src="/images/thinkgreen.png"
              layout="fill"
            ></Image>
          </div>
          <div>
            {" "}
            <p className="mt-10 tracking-wide md:ml-10 text-[20px] text-gray-100 ">
              Used motor oil is the largest single source of oil pollution in
              our lakes, streams and rivers. According to the EPA, 40% of U.S.
              water pollution comes from used oil. Used motor oil entering the
              world’s oceans equal an oil tanker sized oil spill every week.
              Just one gallon of used oil can contaminate over 1 million gallons
              of fresh water. Americans spill over 180 million gallons of used
              oil each year into our waters…that’s over 16 Exxon Valdez spills.
            </p>
            <div className="mt-4 md:ml-10 text-[20px] text-gray-100 ">
              <p className="font-bold">
                Of the 11 billion gallons of lubricants consumed each year:
              </p>{" "}
              <ul>
                <li>38% are “lost in use” </li>
                <li>34% are burned as fuel</li>
                <li>16% are improperly/illegally disposed</li>
                <li>
                  12% used in asphalt, other products or re-refined (re-refined
                  represents 6% of the U.S. Market)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" p-5 order-5  bg-gradient-to-br from-[#304e0e] to-[#4ab514b4] text-gray-100">
          <h3 className="text-[28px] font-bold text-orange-500">B2 Benefits</h3>
          <ul className="text-[20px] space-y-2 list-disc">
            <li className="ml-5">
              Innovative formula is Ultimate Biodegradable, meaning the product
              will degrade over 60% within 28 days.
            </li>
            <li className="ml-5">
              Innovative formula contains “bio-content” that has been proven to
              reduce CO2 emissions of upwards to 69% vs conventional oils while
              reducing our dependency on foreign oil.
            </li>
            <li className="ml-5">
              Innovative formula contains “renewable ingredients” that can be
              domestically sourced and manufactured locally.
            </li>
            <li className="ml-5">
              Innovative packaging embraces “best practice” sustainable
              solutions, offering product in proprietary collapsible/recyclable
              plastic “bags” and repurposed/recyclable steel “drums”
            </li>
            <li className="ml-5">
              Innovative offering satisfies the growing demand for a renewable
              product while addressing the growing concerns of environmental
              impact
            </li>
          </ul>
        </div>
        <div className="order-6 min-h-max bg-gradient-to-br from-gray-200 to-gray-300  p-5">
          <h3 className="text-[28px] font-bold">
            B2 <span className="text-green-500">Green</span> Power{" "}
          </h3>
          <p className="text-[20px] mt-2 tracking-wide">
            B2 BiOil has been created to address the world’s growing “lubricant”
            concerns regarding motor oil’s effects on the environment (whether
            during oil production and/or during the oil’s ‘end-of-life’ improper
            disposal) with an eco-friendly offering that satisfies growing
            consumer demands while meeting the needs of on-going government
            requirements that mandate the procurement of domestically sourced
            bio-derived biodegradable products.
          </p>
          <div className="grid tracking-wide grid-cols-1 md:grid-cols-2 bg-gray-100 border-[1.2px] border-green-500 mt-5">
            <div className="  p-5 col-span-2 md:col-span-1 border-b-[1.2px] md:border-b-0 border-green-500 ">
              <h5 className="text-[18px] font-semibold mb-1 ">
                B2 BiOil Performance Update
              </h5>
              <p>
                Currently undergoing rigorous testing with the DOD/DLA within a
                variety of military and government entities, including USPS, US
                Air Force, Dept. of Homeland Security and GSA: Testing began
                January 2016…concluding on January 18, 2018, Bio-based
                acceptance announcement and assignment of NSN#’s coming shortly,
                NSN#’s = approval to purchase. B2 will be allowed to bid on
                government procurement assignments through SAM.GOV and other
                military purchasing sites, Concurrent Technologies Corporation
                (CTC) and APEX Laboratories are the 3rd party testers of the
                military program (numerous backup support).
              </p>
              <div className="bg-gradient bg-gradient-to-br from-green-600 to-green-200 shadow smadow-md shadow-green-800 rounded-md p-5 mt-5">
                <div className=" m-auto h-72 w-72 md:h-[50vh] md:w-[50vh] relative p-2 bg-gradient bg-gradient-to-br from-orange-500 to-orange-200 rounded-full">
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
                The global lubricants market is projected to grow at an annual
                rate of 2.5% between 2014 and 2019 and be worth $162.3 billion
                by 2019. The category segment of the marketplace described as
                “bio-based” lubricants is expected to be the biggest opportunity
                – CAGR of 12.5 – 26.6% - 2019.
              </p>
              <h5 className="text-[18px] font-semibold mt-2 ">
                Mandated Military Market
              </h5>
              <p>
                Concurrent Technologies Corporation (CTC) initiated
                demonstration activities at four Air Force bases, Dept. of
                Homeland Security, Federal Law Enforcement Training Centers
                (FLETC) and US Postal Service; Army and Navy participation
                concludes January 18, 2018: Demonstration vehicles inspected and
                oil changed out with biobased engine oil products, Baseline
                petroleum oil samples taken from each vehicle for analysis.
              </p>
              <table className="col-span-2 border-black mt-2 divide-y-2 divide-black w-full border-2 border-collapse">
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
              <div className=" h-40 mt-2 relative">
                <Image
                  className="bg-inherit"
                  alt="B2 Oil Hero"
                  src="/images/oil.png"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <div className="  p-5 col-span-2 border-t-[1.2px] border-green-500">
              <h5 className="text-[18px] font-semibold md:text-center mb-1 ">
                Projection
              </h5>
              <p>
                The current forecast/projections are based on conclusion of the
                military testing (January 18, 2018) with the assignment of B2
                BiOil NSN #’s, capturing a conservative 10% of the mandated
                engine oil lubricant demand; and, current testing commitments
                with the PETROS within the Orinoco Belt, Venezuela and with the
                Enaizi Group/Aramco in Saudi Arabia (Dhahran, Saudi Arabia). We
                plan to initially produce 30,000 gallons (20,000 gallons of
                5W-30 and $10,000 gallons of 5W-20) of B2 BiOil to satisfy
                immediate military demand as well as create demand in the
                commercial and consumer markets via robust direct response
                marketing mediums through on-line and on-air initiatives,
                including Amazon.com, Walmart.com, Jet.com , QVC, YouTube and
                Vu.Me.We also plan to produce a total of 116 totes to treat 27
                horizontal oil wells over the next 3 – 6 months at a cost of
                approximately $1.5mm that generates a testing sales forecast of
                over $8,000,000.00: A typical horizontal well within the Orinoco
                Belt requires a total of 4 totes per well that generates 25- 50%
                increase in revenue and production, 85% less product, 66% less
                treatments and an annual savings of 75%. We are awaiting
                confirmation from Tecnoconsult and Aruba on the time to begin
                participation in the Citgo/Aruba Refinery clean-up and
                refurbishment, estimating water treatment chemical sales between
                $3mm - $5mm with results launching our success globally.
              </p>
              <div className="mt-5 ">
                <p className="relative">
                  * The global bio lubricants market is projected to grow from
                  $3.08 billion in 2022 to $4.26 billion by 2029, at a CAGR of
                  4.7% in forecast period, 2022-2029. The market growth chart is
                  depicted below, additionally you could further your knowledge
                  by clicking on the read more button.{" "}
                </p>{" "}
              </div>
              <div className="flex ml-1 ">
                <span className=" mt-3 ">
                  <ImPointRight size={24} />
                </span>
                <button className="text-green-300 mt-2 ml-3 bg-gray-500 rounded-full h-8 w-24 ">
                  <a href=" https://www.fortunebusinessinsights.com/bio-lubricants-market-104654">
                    Read More
                  </a>
                </button>
              </div>

              <div className="h-60 md:h-[50vh] lg:h-[70vh] rounded mt-5 relative">
                <Image
                  className="bg-inherit"
                  alt="B2 Oil Hero"
                  src="/images/lubricant.png"
                  layout="fill"
                ></Image>
              </div>

              <div className="bg-gradient mt-5 bg-gradient-to-br from-green-600 to-green-500 text-gray-50 p-5 rounded-md shadow-sm shadow-green-800">
                The company is targeting a go-to-market strategy that achieves a
                market price based on a flexible “fixed” cost of goods of 25 –
                33% and a manageable GSA/Operations budget of 25-33% allowing
                for a 33-50% contribution. It is our strong expectation, that
                through volume and managed overhead, we’ll be able to reduce
                cost of goods by up to 50% (25% lubricants) and streamline
                operations based on efficient/economical procurement as well as
                improving overall profitability and performance by bringing ALL
                NECESSARY FUNCTIONS “in-house” in order to effectively manage
                costs/quality.
                <h6 className="font-semibold mt-2">
                  * Annual Projection: $12,000,000.00.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default B2Oil;
