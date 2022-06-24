import Image from "next/image";
const Problems = () => (
  <div className=" rounded-md grid md:grid-cols-2 gap-5 lg:mx-10 pt-5 pb-5">
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
);

export default Problems;
