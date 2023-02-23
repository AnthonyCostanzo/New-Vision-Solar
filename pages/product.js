import Layout from "../components/Layout";
import Image from "next/image";
import Problems from "../components/Problems";
import Link from "next/link";
import { ImPointRight } from "react-icons/im";
const Product = () => (
  <Layout title={"Product Overview"}>
    <div className="md:h-[42rem] min-h-max md:p-10 lg:p-0 bg-gradient-to-br from-slate-500 to-slate-300 flex flex-col lg:flex-row justify-center items-center">
      <div className="hidden lg:inline-block text-slate-50 w-11/12 mb-20 lg:w-4/12 lg:ml-3 mt-10 md:mt-0 order-2">
        <h2 className="ml-4 md:ml-0 leading-snug lg:text-[40px] max-w-md font-bold text-[Montserrat]">
          B2 BiOil
        </h2>
        <blockquote className="ml-4 md:ml-0 max-w-sm lg:text-[1.2rem] text-semibold font-sans">
          Change your oil, Change the world - Others are just crude!
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
      <div className="h-48 md:h-[65%] bottom-10 md:bottom-0 w-full lg:w-6/12 mt-20 md:mt-0  relative lg:order-2">
        <Image src="/images/b2.png" layout="fill" alt="hero" />
      </div>
    </div>
    <div className="">
      <div className=" text-gray-200 bg-green-800 p-5  shadow-sm shadow-gray-300">
        <div className="lg:grid grid-cols-1 md:grid-cols-5 col-span-1 item-baseline">
          <div className="relative md:w-1/4 mb-5 md:rounded-full lg:h-full w-2/3 m-auto lg:w-8/12 lg:rounded-md h-[16vh] mt-2">
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
          <button className="mt-4 w-36 md:col-start-2 md:ml-3 lg:ml-0 hover:scale-110 border-[1.2px] h-10 shadow-sm shadow-orange-200 bg-white rounded-full text-green-700">
            <a href="http://www.b2oil.com/sneak-peak.html">LEARN MORE</a>
          </button>
        </div>
      </div>
      {/* refactor */}
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
        <div className="grid tracking-wide bg-gradient-to-br from-slate-50 to-slate-200 border-[1.2px] border-green-500 mt-5">
          <div className="p-5 col-span-2 md:col-span-1 border-b-[1.2px] md:border-b-0 border-green-500 ">
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

            <div className=" m-auto h-52  md: p-10 md:w-6/12 lg:w-4/12 relative md:mt-20 mt-8 md:h-80  lg:bg-gradient-to-r lg:rounded-full from-emerald-400 to-emerald-600 ">
              {" "}
              <Image
                className="bg-none"
                alt="B2 Oil Hero"
                src="/images/oilbl.png"
                objectFit="scale"
                layout="fill"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Product;
