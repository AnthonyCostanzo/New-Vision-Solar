import Image from "next/image";

const Goal = () => {
  return (
    <div className="h-3/4  bg-gradient-to-br from-[#5e5d5d] to-[#dbd7d7] border-b-2 border-orange-100">
      <div className="grid med:grid-cols-2 pt-4 bg-top-right bg-opacity-10 z-0 led:bg-[url('/images/p.svg')] md:bg-left bg-[url('/images/p2.svg')]">
        <div>
          <h3 className="font-[Open-Sans] m-auto w-fit  relative mt-3 text-center text-2xl text-[#95ff9ff7] ">
            Technology & Research
            <div className="w-fit top-[-.8rem] right-[-3.3rem] absolute group inline-block">
              <Image
                alt="science"
                className="group-hover:animate-spin"
                src="/images/chemical.png"
                height={40}
                width={40}
              />
            </div>
          </h3>
          <p className="m-3 mb-8 md:m-auto pt-3 lg:w-[35rem] font-[Merriweather] text-white leading-7 px-5 tracking-wide">
            New Vision Solar Inc. is developing New Graphene/h-BN Solar
            technology. Dr. Zuckerman, the Founder, has created a solar
            technology that will change the Solar Industry over the next 5 years
            introduction of Graphene/h-BN Solar with 300% More Energy and
            significantly lower cost than Silicon Solar. New Graphene/h-BN Solar
            Enhanced performance of Graphene/h-BN Solar has the enormous impact
            to increase the efficiency from Silicon Solar in the 20% range to
            the 70% range.The Graphene/h-BN Solar development began in November
            2014 and we expect to have, after date of funding, pre-production
            panel within 4-6 months, sales of production panel within 15-18
            months, and cash positive within 24 to 30 months.
          </p>
        </div>
        {/* Valuation Div Here */}
        <div className="flex items-center">
          <div className="w-full px-3 pb-10 lg:pb-[50px]">
            <Image
              src="/images/competition.png"
              className=" inline-block"
              alt="competition"
              height={500}
              width={800}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
