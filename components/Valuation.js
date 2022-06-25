import Image from "next/image";
const Valuation = () => (
  <div className="w-full" id="solar">
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
    <div className="justify-center mx-4 lg:mb-20 ">
      <Image
        src={`/images/bs.png`}
        className="shadow-sm rounded-lg shadow-green-200"
        alt="a"
        height={300}
        width={500}
        layout="responsive"
      ></Image>
    </div>
  </div>
);

export default Valuation;
