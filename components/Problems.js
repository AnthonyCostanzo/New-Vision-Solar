import Image from "next/image";
import { motion } from "framer-motion";
const Problems = () => (
  <div className="">
    <div
      className="lg:rounded-md divide-y-2 divide-green-200 md:divide-y-0 grid grid-cols-1 lg:grid-cols-2
    lg:gap-5 lg:m-2
    relative"
    >
      <div className="relative h-[25rem] lg:h-[35rem] ">
        <Image
          src="/images/prod.png"
          alt="p"
          className="lg:rounded-lg"
          layout="fill"
        />
      </div>{" "}
      <div className="relative h-[25rem] lg:h-[35rem] ">
        <Image
          src="/images/Problem.png"
          alt="p"
          className="lg:rounded-lg"
          layout="fill"
        />
      </div>
      <div className="relative h-[25rem] lg:h-[35rem] ">
        <Image
          src="/images/clover.jpg"
          alt="p"
          className="lg:rounded-lg"
          layout="fill"
        />
      </div>
      <div className="relative h-[25rem] lg:h-[35rem] ">
        <Image
          src="/images/man.png"
          alt="p"
          className="lg:rounded-lg"
          layout="fill"
        />
      </div>
      <div className="relative h-[25rem] lg:h-[42rem] col-span-2 ">
        <Image
          src="/images/cash.png"
          alt="p"
          className="lg:rounded-lg"
          layout="fill"
        />
      </div>
      <div className="relative h-[20rem] lg:h-[37rem] col-span-2 ">
        <Image
          src="/images/map-2.png"
          alt="p"
          className="lg:rounded-lg"
          height={75}
          width={125}
          layout="fill"
        />
      </div>
      <div
        className="col-span-2 min-h-max lg:rounded-lg p-3 relative bg-gray-700 grid grid-cols-3 lg:my-2 gap-x-5"
        id="inventor"
      >
        <div className="flex  md:my-12 flex-col">
          <div className="h-full relative">
            <Image
              src="/images/fig.jpg"
              alt="p"
              className="rounded-lg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="h-full relative">
            <Image
              src="/images/lap.png"
              alt="p"
              className="md:rounded-lg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="h-full relative">
            <Image
              src="/images/pet.png"
              alt="p"
              className="md:rounded-lg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <small className="inline-block relative text-main text-center  font-semibold">
            Product Of The Year
          </small>
        </div>
        <div className="col-span-2 my-2 text-gray-50 min-h-max">
          <h4 className="text-main text-xl italic text-center mb-2">
            Dr Zuckerman's Highlights{" "}
          </h4>
          <div className="tracking-wide font-[times] lg:text-[21.25px] xl:text-[22.5px] space-y-2">
            <p className="">
              While serving as President of CrystalVision, Inc., the first half
              dozen 24-inch diagonal and ½ inch thick flat panel was produced by
              a 50-person team practicing the multiple disciplines of Organic
              Chemistry, Digital Electronics, and Semiconductor Manufacture.
              CrystalVision was funded with $10,000,000 from Renaissance
              Capital., New York who sold the Intellectual Property to Hitachi
              for a reported $100 million plus and the work reappeared as
              Hitachi’s US patent number 4,341,445A.
            </p>
            <p>
              An example of cutting-edge patenting is the presentation of the
              Laptop computer in FIG. 2 of this US Patent that appeared six (6)
              years before the US Government Request for Proposals for Laptops.
            </p>
            <p className="border-main border-2 p-1">
              While serving as President and Chief Technical Officer of Green
              Earth Technology, Dr Zuckerman commercialized G-Oil™ a “Green”
              Motor Oil that biodegrades 90% in 9-days (ASTM D586) to eliminate
              the largest single source of oil pollution, 200 million gallons
              annually of improperly disposed of used motor oil that gets
              discharged into our lakes, rivers and streams. In the first year
              the stock price increased from $0.10 to $4.50 a $425 Million
              shareholder value increase.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Problems;
