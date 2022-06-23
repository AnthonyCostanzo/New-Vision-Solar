import Image from "next/image";

const AboutCard = ({ text, img, name }) => (
  <div className="bg-gradient-to-r shadow-sm shadow-green-50 from-main to-sky-100 m-7 rounded-lg med:gap-2 med:grid md:grid-cols-3">
    <div className="flex justify-center p-5 pt-7 md:pt-5">
      <div className="">
        <Image
          src={`/images/${img}`}
          className="rounded-full shadow-sm shadow-green-200"
          height={300}
          width={400}
          // layout="responsive"
          alt="a"
        ></Image>
      </div>{" "}
    </div>
    <div className="col-span-2 mt-5">
      <h1 className="m-2 font-bold">{name}</h1>
      <p className="m-2">{text}</p>
    </div>
  </div>
);

export default AboutCard;
