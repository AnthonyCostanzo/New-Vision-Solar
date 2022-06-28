import Image from "next/image";
import { motion } from "framer-motion";
const Problems = () => (
  <>
    <div
      className="rounded-md divide-y-2 divide-green-200 md:divide-y-0 grid grid-cols-1 lg:grid-cols-2
    lg:gap-5 lg:m-5
     min-h-max relative"
    >
      <div className="relative h-[25rem] lg:h-[35rem] ">
        <Image
          src="/images/prod.png"
          alt="p"
          className="md:rounded-lg"
          layout="fill"
        />
      </div>{" "}
      <div className="relative h-[25rem] lg:h-[35rem] ">
        <Image
          src="/images/Problem.png"
          alt="p"
          className="md:rounded-lg"
          layout="fill"
        />
      </div>
      <div className="relative h-[25rem] lg:h-[35rem] ">
        <Image
          src="/images/clov-0.png"
          alt="p"
          className="md:rounded-lg"
          layout="fill"
        />
      </div>
      <div className="relative h-[25rem] lg:h-[35rem] ">
        <Image
          src="/images/man.png"
          alt="p"
          className="md:rounded-lg"
          layout="fill"
        />
      </div>
      <div className="relative h-[25rem] lg:h-[42rem] col-span-2 ">
        <Image
          src="/images/cash.png"
          alt="p"
          className="md:rounded-lg"
          layout="fill"
        />
      </div>
      <div className="relative h-[20rem] lg:h-[37rem] col-span-2 ">
        <Image
          src="/images/map-2.png"
          alt="p"
          className="md:rounded-lg"
          height={75}
          width={125}
          layout="fill"
        />
      </div>
      <div
        className="relative col-span-2  h-[25rem] lg:h-[35rem]"
        id="inventor"
      >
        <Image
          src="/images/inventor.png"
          alt="p"
          className="md:rounded-lg"
          layout="fill"
        />
      </div>
    </div>
  </>
);

export default Problems;
