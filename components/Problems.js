import Image from "next/image";
const Problems = () => (
  <>
    <div className="h-48 relative lg:py-40">
      <div className="bg-red-200 absolute"></div>
      <Image
        src="/images/divide.png"
        alt="p"
        className="md:rounded-lg absolute"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="md:mx-2 lg:mt-20 rounded-md grid md:grid-cols-2 gap-5 pb-5">
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
      <div className="mx-0 md:mx-0 h-80 md:pt-[30rem] lg:pt-[50rem] md:h-96 bg-cover md:bg-center bg-no-repeat lg:h-96 bg-[url('/images/r.png')] relative col-span-2 order-3"></div>
      <div className="">
        <Image
          src="/images/prod.png"
          alt="p"
          className=""
          height={200}
          width={250}
          layout="responsive"
        />
      </div>{" "}
    </div>
  </>
);

export default Problems;
