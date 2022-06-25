import Image from "next/image";
const Problems = () => (
  <>
    <div className="mx-2 my-5 lg:mt-20 rounded-md grid md:grid-cols-2 gap-5 pb-5">
      <div className="">
        <Image
          src="/images/prod.png"
          alt="p"
          className="rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>{" "}
      <div className="">
        <Image
          src="/images/Problems.png"
          alt="p"
          className="rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>
      <div className="">
        <Image
          src="/images/clov-0.png"
          alt="p"
          className="rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>
      <div className="">
        <Image
          src="/images/man.png"
          alt="p"
          className="rounded-lg"
          height={200}
          width={250}
          layout="responsive"
        />
      </div>
      <div className="">
        <Image
          src="/images/cash-3.png"
          alt="p"
          className="rounded-lg"
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
