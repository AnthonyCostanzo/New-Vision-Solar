import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
const B2Oil = () => {
  return (
    <Layout title="B2 Oil">
      <div className="flex flex-col">
        <div className="bg-[url('/images/clouds.jpeg')] pt-20 pb-16 bg-center order-2 md:order-1">
          <div className="h-60 md:h-[50vh] relative">
            <Image
              className="bg-inherit"
              alt="B2 Oil Hero"
              src="/images/b2.png"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        </div>
        <div className=" text-gray-200 md:order-2 bg-gradient-to-r from-[#db5c08] to-[#f67a22b4] p-10  shadow-sm shadow-gray-300">
          <div className="md:flex">
            <div className="flex justify-center py-7 md:py-0  md:w-1/4  ">
              <div className="relative w-56 h-40 md:w-40 md:h-48">
                <Image
                  alt="B2 Oil logo"
                  src="/images/b2logo.png"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <p className="text-[20px] md:mt-3 md:ml-3 text-gray-7000 font-[Times]">
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
          <button className="w-36 hover:font-bold border-[1.2px] shadow-sm shadow-orange-200 bg-white rounded-full h-14 mt-2 text-orange-400">
            <a href="http://www.b2oil.com/sneak-peak.html">LEARN MORE</a>
          </button>
        </div>

        <div className=" order-3 flex flex-col md:flex-row bg-gray-500 p-5">
          <div className="relative m-auto h-48 w-48 md:h-[30vh] md:w-9/12 lg:w-5/12 mt-5 ">
            <Image
              alt="B2 Oil logo"
              src="/images/thinkgreen.png"
              layout="fill"
            ></Image>
          </div>
          <div>
            {" "}
            <p className="mt-10 md:ml-10 text-[20px] text-gray-100 ">
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
        <div className="order-4 p-5 md:p-10 bg-gradient-to-br from-[#304e0e] to-[#4ab514b4] text-gray-100">
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
      </div>
    </Layout>
  );
};

export default B2Oil;
