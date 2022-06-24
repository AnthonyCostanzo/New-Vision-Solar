import Image from "next/image";
const Problems = () => (
  <>
    <div className="h-48 relative lg:py-32">
      <div className="bg-red-200 absolute"></div>
      <Image
        src="/images/divide.png"
        alt="p"
        className="md:rounded-lg absolute"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="md:mx-2 rounded-md grid md:grid-cols-2 gap-5 pb-5">
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
          src="/images/prod.png"
          alt="p"
          className="md:rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>{" "}
    </div>
  </>
);

export default Problems;
