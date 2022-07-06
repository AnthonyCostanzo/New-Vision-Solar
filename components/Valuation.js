import Image from "next/image";
const Valuation = () => (
  <div className="" id="solar">
    <div className="h-36 lg:h-48 mb-5 md:w-3/4 relative text-center m-auto">
      <Image
        src="/images/divide.png"
        alt="p"
        className="md:rounded-lg"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="mt-[-1.8em] md:mt-[1.8em]">
      <div className="grid">
        <h3 className="text-sky-600 text-xl mx-6 font-[Open-Sans] italic">
          Patent Valuation
        </h3>
        <p className="mx-3 mt-1 px-3 font-[Merriweather]">
          Based on the industry data, the following is a financial projection.
          As the total approximate annual industry revenue is $10 billion, it is
          assumed that the patent holder will be able to capture 0.5% of the US
          market in year 1 with heavy investment and marketing. These
          projections would generate an annual revenue of approximately $5
          million. Assuming an 80% in combined COGs, development, deployment,
          penetration, and operating costs, EBITDA is $1 million in year 1 and
          is projected to grow at an average 10% each year in line with market
          trend, penetration, and saturation. For the remaining 19-year life of
          the patent and with a discount rate of 15%, the NPV of the patent is
          $119,755,375 after considering the patent strength factor. Factoring a
          5% variance, the following is the final valuation range. The Inventor,
          Dr Zuckerman is both the Inventor and Applicant of the issued and
          pending patents. We plan to attach to the acquisition agreement the
          Assignment of the patents that is made to have the patents in the
          company(s) acquired. Below is is the stream of income over the life of
          the patent if the patent is licensed to another company to manufacture
          the products.
        </p>

        <div className="mt-1 w-11/12 md:w-3/4 m-auto ">
          <h3 className="text-center mt-3 text-[26px]">
            Stream of Income over Life of Patent
            <span className="block font-bold text-[21px]">
              $113.77 million - $125.7 million
            </span>
            <small className="block"> (licenced to another company)</small>
          </h3>
          <Image
            src="/images/pv.png"
            alt="p"
            layout="responsive"
            height={125}
            width={180}
          />
        </div>
      </div>
      {/* <Image
        src={`/images/bs.png`}
        className="shadow-sm rounded-lg shadow-green-200"
        alt="a"
        height={300}
        width={500}
        layout="responsive"
      ></Image> */}
    </div>
  </div>
);

export default Valuation;
