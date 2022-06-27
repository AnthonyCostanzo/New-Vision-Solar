import Image from "next/image";
const Problems = () => (
  <>
    <div className="md:mx-2 divide-y-4 md:divide-y-0 divide-green-100 lg:mt-5 rounded-md grid  grid-cols-1 md:grid-cols-2 md:gap-5 md:pb-5">
      <div className="">
        <Image
          src="/images/prod.png"
          alt="p"
          className="md:rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>{" "}
      <div className="">
        <Image
          src="/images/Problem.png"
          alt="p"
          className="md:rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>
      <div className="">
        <Image
          src="/images/clov-0.png"
          alt="p"
          className="md:rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>
      <div className="">
        <Image
          src="/images/man.png"
          alt="p"
          className="md:rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>
      <div className="" id="finance">
        <Image
          src="/images/cash-3.png"
          alt="p"
          className="md:rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>
      <div className="">
        <Image
          src="/images/fin.png"
          alt="p"
          className="md:rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>
      <div className="col-span-2">
        <Image
          src="/images/map-2.png"
          alt="p"
          className="md:rounded-lg"
          height={75}
          width={125}
          layout="responsive"
        />
      </div>
      <div className="col-span-2" id="inventor">
        <Image
          src="/images/inventor.png"
          alt="p"
          className="md:rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>
    </div>
  </>
);

export default Problems;
