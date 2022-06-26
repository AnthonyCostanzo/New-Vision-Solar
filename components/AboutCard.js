import Image from "next/image";

const AboutCard = ({ text, img, name }) => (
  <div className=" m-2 rounded-lg med:gap-2 med:grid md:grid-cols-3 border-main">
    <div className="flex justify-center px-2 pt-7 md:pt-5 ">
      <div className="">
        <Image
          src={`/images/${img}`}
          className="rounded-full lg:rounded-lg"
          height={300}
          width={300}
          // layout="responsive"
          alt="a"
        ></Image>
      </div>{" "}
    </div>
    <div className="col-span-2 mt-5 px-2 text-gray-50">
      <h1 className="m-2 font-bold font-[Merriweather] ">{name}</h1>
      <p className="m-2 font-serif">{text}</p>
    </div>
  </div>
);

export default AboutCard;
