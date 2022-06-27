import Image from "next/image";
const GrapheneSection = () => {
  return (
    <div className="md:rounded-md  border-b-2 mt-5 border-orange-100 md:border-b-0 md:mt-10">
      <h2 className="font-bold mb-3 ml-5 font-[Open-Sans] text-yellow-200 text-2xl pt-2 flex-1">
        Graphene/h-BN Solar{" "}
      </h2>
      <article className="lg:flex">
        <div className="lg:w-3/4 lg:flex justify-end">
          <div className="mb-7 ">
            <p className=" font-[Merriweather] text-white leading-7 px-5 tracking-wide text-[18px]">
              Enhanced performance of Graphene/h-BN material has the enormous
              impact to increase the efficiency from Silicon Solar 22.5% (high
              peak) to 71.6%. Graphene/h-BN Solar will make a dramatic change in
              efficiency for the solar market of today. The thickness of
              Graphene/h-BN Solar is the 1/100,000th of the Silicon Solar that
              makes it possible to achieve a new higher level of efficiency
              through elimination of electron loss due to minimizing distance of
              travel to point of harvest and thermal electric cool to maintain
              almost constant operating temperature, and reduce the cost by
              requiring only pennies of photoactive materials to manufacture
              Graphene and Hexagonal Boron Nitrate (h-BN) Solar.
            </p>
          </div>
        </div>
        <div className="w-3/4 m-auto mb-7 px-4">
          <Image
            className="rounded-md"
            src="/images/LED.jpg"
            alt="g"
            height={50}
            width={100}
            layout="responsive"
          />
        </div>
      </article>
    </div>
  );
};

export default GrapheneSection;
