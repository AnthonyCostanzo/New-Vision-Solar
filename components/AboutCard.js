import Image from "next/image";

const AboutCard = ({ text, img, name }) => (
  <div className="bg-gradient-to-r p-5 shadow-md shadow-green-300 from-main to-green-300 m-7 rounded-lg med:gap-2 med:grid md:grid-cols-3">
    <div className="flex justify-center p-5 pt-7 md:pt-5">
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
    <div className="col-span-2 mt-5 px-2 text-slate-900">
      <h1 className="m-2 font-bold font-[Merriweather] ">{name}</h1>
      <p className="m-2 font-serif">{text}</p>
    </div>
  </div>
);

export default AboutCard;
