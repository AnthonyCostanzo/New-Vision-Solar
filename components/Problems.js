import Image from "next/image";
const Problems = () => (
  <div className="md:mx-2 rounded-md grid md:grid-cols-2 gap-5 pt-5 pb-5">
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
