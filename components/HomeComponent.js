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
      {/* <div className="h-10 bg-gradient-to-br from-main to-slate-400" /> */}
      <div className=" m-auto grid bg-gray-100">
        <section className="mx-7 pt-5 ">
          <article className="">
            <p className="tracking-wide">
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
          </article>
        </section>
        <section className="mt-3 mx-7 order-3 mb-10">
          <p className="tracking-wide ">
            These readily biodegradable environmentally acceptable and preferred
            supreme synthetics are packaged in reusable & recyclable
            “sustainable” packaging that equal or outperforms comparably
            advanced synthetic positioned and parity priced mineral oil base
            products as we strive to make such products readily available when
            satisfying regulatory requirements as well as the needs for socially
            responsible consumers and customers alike as they should not have to
            sacrifice value or performance when selecting an earthy friendlier
            option. These products, branded as b2, are a natural fit as our
            Methes Energies “green” preferred choices become “logical” choices.
          </p>
        </section>
        <div className="w-full h-[18vh] md:h-[15vh] mt-5 mb-5 lg:mb-10 items-center relative flex justify-center">
          <div className="absolute w-9/12 lg:w-3/12 lg:h-50 lg:mt-5 h-[90%] ">
            <Image
              src="/images/green-removebg-preview.png"
              layout="fill"
              alt="team members"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeComponent;
