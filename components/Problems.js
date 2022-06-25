import Image from "next/image";
const Problems = () => (
  <>
    <div className="my-5 ">
      <h1 className="text-center text-slate-800 text-xl font-[Open-Sans] font-semibold">
        Product Info & Financing
      </h1>
    </div>

    <div className="md:mx-2 divide-y-4 md:divide-y-0 divide-main  md:my-5 lg:mt-20 rounded-md grid  grid-cols-1 md:grid-cols-2 md:gap-5 md:pb-5">
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
          src="/images/Problems.png"
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
      <div className="">
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
          className="rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>
      <div className="col-span-2">
        <Image
          src="/images/map-2.png"
          alt="p"
          className="rounded-lg"
          height={75}
          width={125}
          layout="responsive"
        />
      </div>
      <div className="col-span-2">
        <Image
          src="/images/inventor.png"
          alt="p"
          className="rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>
    </div>
  </>
);

export default Problems;
