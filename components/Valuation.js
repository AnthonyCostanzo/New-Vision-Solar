import Image from "next/image";
const Valuation = () => (
  <div className="w-full" id="solar">
    <div className="justify-center mx-2">
      <Image
        src={`/images/bs.png`}
        className="shadow-sm rounded-md shadow-green-200"
        alt="a"
        height={300}
        width={500}
        layout="responsive"
      ></Image>
    </div>{" "}
  </div>
);

export default Valuation;
