import Image from "next/image";

const Goal = () => {
  return (
    <div
      id="tech"
      className="h-3/4  bg-gradient-to-br from-[#5e5d5d] to-[#dbd7d7] border-b-2 border-orange-100"
    >
      <div className="grid lg:grid-cols-2 pt-4 bg-top-right bg-opacity-10 z-0 led:bg-[url('/images/p.svg')] md:bg-left bg-[url('/images/p2.svg')]">
        <div>
          <h3 className="font-[Open-Sans] m-auto w-fit  relative mt-3 text-center text-2xl text-[#95ff9ff7] ">
            Products & Competition
            <div className="w-fit cursor-pointer top-[-.8rem] right-[-3rem] absolute group inline-block">
              <Image
                alt="science"
                className="group-hover:animate-spin"
                src="/images/chemical.png"
                height={40}
                width={40}
              />
            </div>
          </h3>
          <p className="m-3 mb-12 md:m-auto pt-3 lg:w-[35rem] font-[Merriweather] text-white leading-7 px-5 tracking-wide">
            New Energy Solutions, Inc. is developing Graphene/hexagonal Boron
            Nitride (Graphene/h-BN Solar) technology. Created is a solar
            technology that will change the Solar Industry over the next 5 years
            by the introduction of crystalline materials capable of capturing
            300% more energy, at a lower cost, than solar using silicon
            material. Graphene/h-BN Solar development that began in 2014 is
            forecast to produce pre-production units in 4-6 months, sales in
            15-18 months and reach positive cash flow within 24-30 months.
          </p>
        </div>
        {/* Valuation Div Here */}
        <div className="flex items-center md:mt-10">
          <div className="w-11/12 m-auto h-[22rem] md:h-[30rem] relative mb-10">
            <Image
              src="/images/prod.png"
              className=" rounded-md"
              alt="prod"
              layout="fill"
              // objectPosition={"center"}
              // objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
