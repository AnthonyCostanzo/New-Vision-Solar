import Image from "next/image";
const Goal = () => {
  return (
    <div className=" bg-gradient-to-br from-[#5e5d5d] to-[#dbd7d7]   med:flex border-b-2 border-orange-100">
      <div className="med:w-6/12">
        <h2 className="text-center underline text-2xl text-slate-800">
          <span className="mt-4 inline-block text-[#4ae2a8]">
            Technology & Research
          </span>
        </h2>
        <p className="mt-3 font-[Merriweather] text-white leading-7 px-5 tracking-wide text-[18px]">
          New Vision Solar Inc. is developing New Graphene/h-BN Solar
          technology. Dr. Zuckerman, the Founder, has created a solar technology
          that will change the Solar Industry over the next 5 years introduction
          of Graphene/h-BN Solar with 300% More Energy and significantly lower
          cost than Silicon Solar. New Graphene/h-BN Solar Enhanced performance
          of Graphene/h-BN Solar has the enormous impact to increase the
          efficiency from Silicon Solar in the 20% range to the 70% range.The
          Graphene/h-BN Solar development began in November 2014 and we expect
          to have, after date of funding, pre-production panel within 4-6
          months, sales of production panel within 15-18 months, and cash
          positive within 24 to 30 months.
          <aside className="text-center md:text-right md:mr-7 mt-10 md:mt-0">
            <Image
              alt="science"
              className="bg-orange-300 rounded-md p-2"
              src="/images/chemical.png"
              height={100}
              width={100}
            />
          </aside>
        </p>
      </div>
      <div className="med:w-6/12 md:m-auto md:p-2">
        <Image
          src="/images/competition.png"
          className="md:rounded-md "
          alt="competition"
          height={175}
          width={280}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Goal;
