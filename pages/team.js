import Layout from "../components/Layout";
import Image from "next/image";

const teamMembers = [
  {
    name: "Mathew Zuckerman, Ph.D., CEO, Inventor and Director",
    text: `Mat is a serial entrepreneur who for over 40 years partnered with Jeff Loch
    (Chief Branding Officer) and other members of the NewVision Solar team.
    Together at Green Earth Technologies, Inc., trading symbol GETG, produces
    over $400 million is shareholder value when there Proprietary Product G-Oil
    was awarded “Product of the Year” by Popular Mechanics Magazine’s Editors.
    Mat is uniquely qualified through academic and experience, in protecting
    intellectual property and moving technology from invention to mass
    production. He has shepherded numerous inventions through the process to
    obtain issued patents. A highlight from Mat’s professional career the
    manufacture of landmark flat panel information displays, where he directed
    the repurpose of a semi-conductor line by coordinating the activities of 50
    persons team divided into three teams, Chemistry, Manufacturing and
    Electronics. Mat holds three degrees from New York University: Bachelor of
    Civil Engineer, Master of Science in Civil Engineering; and Doctor of Philosophy
    majoring in Environmental Engineering: thesis, “High Quality Reuse Water by
    Novel Physical Chemical Process”. He also was an Alfred P. Sloan Fellow at the
    Graduate School of Business at Stanford University: thesis “A Normative
    Description for an Innovative Manufacturer”.`,
    image: "matt.png",
  },

  {
    name: "Jeffery Loch, Vice President and Chief Branding Officer (CBO)",
    text: `Jeff brings over 20 years of progressive marketing and sales responsibilities within
    the highly competitive consumer packaged goods arena. Mr. Loch authored the
    "Marketiquette" philosophy (proper marketing) because of prior companies' "best
    practices" and has been successfully applying it for the past 7 years when
    developing branding and go-to-market strategies for clients of the consulting firm
    he co-founded. In addition, Jeff has had exposure to just about every major
    retailer within a variety of trade classes and has achieved enormous success while
    working for some of the greatest branding companies in the world, including
    Clorox, Armor All Products Corporation, ConAgra Foods, Wyeth Consumer
    Healthcare and Dixon Ticonderoga. A native of Michigan and graduate of Albion
    College, Mr. Loch began his career with Pepsi Cola.`,
    image: "jeff.png",
  },
  {
    name: "John Macintyre, Vice President, Chief Operating Officer (COO) and Director",
    text: `John has 20-years of experience in broad-based semiconductor industry
  leadership and significant boardroom experience to guide technology-based
  manufacturing towards the Company’s long-term opportunities. His
  experience includes two years with Universal Semiconductor Technologies,
  Inc., Silicon Valley, delivering pure-play compounds (III-V) semiconductors in
  wafer fabrication where John contributed to a $1 billion in worldwide sales
  and group management in an organization that employed 11,000 persons.
  Among the products that he has supervised and participated in the
  manufacture are the Energy and Green Technology of a Solar Junction-
  Concentrator Solar Cell that achieved 48% Efficiency and Sol-Hybrid – 3D
  stacked Solar Cells. John received undergraduate degrees in Chemical
  Engineering from the University of California Los Angeles and a graduate
  degree in Materials Science/Crystallography Growth and Synthesis.`,
    image: "john.png",
  },
  {
    name: "Brian Kennedy, Associate and Outside Director",
    text: `Brian is an entrepreneur, experienced nanofabricator, and
    pioneering founder of Kennedy Labs. Kennedy Labs is a spin out
    of the National Research Council of Canada, first to world
    markets through global distribution, and focuses on 2D material
    and subcomponent leveraging 2D materials for industrial
    applications. He holds a certificate in nanofabrication from
    Cornell University and is a nanofabrication User at Cornell
    University in Ithaca, NY, Columbia University in NYC, and the
    University of Ottawa and Carleton University in Ottawa, Canada.
    Brian serves as a founding advisory board member of the
    National Graphene Association in the United States, and at the
    Global Center of Advanced Material Research in Ottawa. He
    graduated from McGill University with a bachelor's degree.`,
    image: "brian.png",
  },
  {
    name: "James R. Ray, Vice President, and Chief Financial Officer",
    text: `Jim has over 40 years of business experience and is a Certified Public
    Account and has previously served as an Officer and Director of several
    publicly held corporations. He was previously with Price Waterhouse
    Cooper Certified Accounts and is experienced and well versed in
    compliance filings for both private and publicly held corporations. Jim
    has been involved in taking 21 corporations to Public Markets and
    recently completed 5 Regulation A+ Financial Offerings. He is a native
    of Texas and a graduate of Lamar State University with a BBA Degree in
    Accounting.`,
    image: "james.png",
  },
];

export const Team = () => (
  <Layout
    title="Our Team"
    description={"New Energy Solution Team Members and bios"}
  >
    <h1 className="text-3xl text-main text-center mt-10">Our Team</h1>
    <div className="grid w-11/12 m-auto mt-10 mb-40 gap-20">
      <div className="bg-slate-50 shadow-md shadow-slate-500 flex flex-col lg:flex-row gap-5 p-5 ">
        <div className="relative h-[25vh] lg:h-full lg:w-3/12 mb-5">
          <div className="lg:w-8/12 md:w-10/12 m-auto relative h-[90%]">
            <Image src="/images/carol.png" alt="" layout="fill" />
          </div>
          <p className="text-center font-semibold mt-2 text-main">
            Carol Loch (Chief Executive Officer)
          </p>
        </div>
        <p className="lg:w-9/12 tracking-wide leading-7">
          {`   A take-charge detailed-oriented Fortune 100 corporate professional
          with an entrepreneurial spirt, Carol Bowley has over 30 years of
          progressive leadership, marketing and product development experiences
          within the highly competitive consumer packaged goods arena. A process
          driven team player with superior critical thinking skills, Carol knows
          how to work both smarter and harder; and, has demonstrated this
          know-how when driving results for her many clients of Marketiquette,
          Inc., a boutique branding and go-to-market strategies firm she
          co-founded back in 2001. She is credited and instrumental in the
          creation of this firm’s strategic branding and go-to-market
          initiatives, providing cradle-to-grave as well as concept-to-consumer
          plans and services based on the Marketiquette pioneered model of
          “proper marketing.”   Spearheading a “greener”
          environmentally-friendlier focus for the past two decades, Ms.
          Bowley’s area of expertise comprises a broad list of proven leadership
          and marketing skills, including executive team management, public
          relations, consistent corporate communication, P&L – budgeting, life
          cycle analysis, multi-platform advertising & digital marketing/social
          media, brand management and product marketing.`}
        </p>
      </div>
      <div className="bg-slate-50 shadow-md shadow-slate-500 flex flex-col lg:flex-row gap-5 p-5 ">
        <div className="relative h-[25vh] lg:h-full lg:w-3/12 mb-5">
          <div className="lg:w-8/12 md:w-10/12 m-auto relative h-[90%]">
            <Image src="/images/jeff.png" alt="" layout="fill" />
          </div>
          <p className="text-center font-semibold mt-2 text-main">
            Jeffrey Loch (Chief Operations – Marketing Officer )
          </p>
        </div>
        <p className="lg:w-9/12 tracking-wide leading-7">
          {`         A super-charged entrepreneur and an accomplished C-Level Executive,
          Mr. Loch has over 35 years of progressive leadership, marketing and
          sales experience within the highly competitive consumer packaged goods
          arena.  Based on these experiences, Mr. Loch pioneered the concept of
          “Marketiquette,” which describes 'proper marketing’ philosophy, which
          he has been successfully applying for the past 20 years.   The art and
          scientific process of uncovering unmet needs to satisfy consumer
          demand and then implementing branding and go-to-market strategies
          provides profitable solutions for clients of his consulting firm
          (Techtronic Industries -TTI, Valeo, PPG and others).  In addition,
          Jeff has had exposure to just about every major retailer within a
          variety of trade classes and has achieved enormous success while
          working for some of the most successful branding companies in the
          world, including Clorox/Armor All Products Corporation, ConAgra Foods,
          Pfizer Consumer Healthcare (American Home Products) and Dixon
          Ticonderoga.     For the past two decades, Mr. Loch has been driving
          an environmental agenda based on the ideology that end-users should
          not have to compromise performance or sacrifice value when choosing a
          safer “eco-friendlier” alternative product, ultimately making this
          GREEN choice a LOGICAL choice. This foundation led him to the creation
          of the bio-based/biodegradable lubrication category (EAL –
          environmentally accepted lubricant), now listed within the USDA
          Bio-Preferred “mandated” Federal Procurement Program, with the
          introduction of G-OIL®, the world’s first and only API/ILSAC GF-5
          commercially available certified motor oil…who’s performance was
          successfully proven in NASCAR and market acceptability upon consumer
          consumption with product purchases from off the shelves of Walmart and
          The Home Depot to name a few.`}
        </p>
      </div>
      <div className="bg-slate-50 shadow-md shadow-slate-500 flex flex-col lg:flex-row gap-5 p-5 ">
        <div className="relative h-[25vh] lg:h-full lg:w-3/12 mb-5">
          <div className="lg:w-8/12 md:w-10/12 m-auto relative h-[90%]">
            <Image src="/images/robert.jpg" alt="" layout="fill" />
          </div>
          <p className="text-center font-semibold mt-2 text-main">
            Robert Stepan ( Science – R&D Officer)
          </p>
        </div>
        <p className="lg:w-9/12 tracking-wide leading-7">
          {`  Mr. Stepan is a seasoned and highly educated research scientist with
          demonstrated successes within the lubrication and oil & gas
          industries, specializing in both the development of unique bio-based
          and specialty lubricants as well as crafting nonconventional,
          environmentally friendly complementary products. He has been awarded
          patents for these groundbreaking technologies and has developed well
          over 300 new products for world markets. These products range from
          lubricants, greases, biodegradability stimulators and refractories to
          eco-friendlier heavy duty degreasers and corrosion inhibitors.   Mr.
          Stepan graduated Magna Cum Laude with a BS in Polymer Chemistry from
          the University of Akron, a Golden Key Honors in Polymer Engineering
          from the University of Akron Graduate School and developed
          applications using cruciferous extractions of sulforaphane
          glucosinolate for T-cell inhibition while a Research Fellow at John
          Hopkins University Cancer Research Center.   Currently residing in
          Strongsville, Ohio, Robert is a skilled e-commerce and
          cross-functional team leader earning his Master of Business
          Administration (MBA) from Cleveland State University‘s John Nance
          School of Business. Previous employment history includes Vice
          President of Technology for Green Earth Technologies…the creators and
          manufacturers of G-OIL®. `}
        </p>
      </div>
    </div>
  </Layout>
);

export default Team;
