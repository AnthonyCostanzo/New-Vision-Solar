import Layout from "../components/Layout";
import Image from "next/image";
import AboutCard from "../components/AboutCard";

const teamMembers = [
  {
    name: "Mathew Zuckerman, Ph.D., CEO, Inventor and Director",
    text: `Matt is a serial entrepreneur who for over 40 years partnered with Jeff Loch
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
    image: "r.jpeg",
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
    image: "j.jpeg",
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
    image: "a.jpeg",
  },
];

export const Team = () => (
  <Layout>
    <div className="mb-20">
      <h1 className="text-center mt-10 text-2xl font-[Open-Sans] font-semibold">
        Our Team
      </h1>
      <div className="grid h-2/3 mt-1 gap-6">
        {teamMembers.map((member, i) => (
          <AboutCard
            key={i}
            text={member.text}
            img={member.image}
            name={member.name}
          />
        ))}
      </div>
    </div>
  </Layout>
);

export default Team;
