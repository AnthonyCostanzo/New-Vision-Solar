import Image from "next/image";
import Layout from "../components/Layout";

const Packaging = () => (
  <Layout title="Packaging">
    <section className="mt-3 p-5 md:flex-row flex-col flex flex-wrap gap-3 mb-10">
      <article>
        <h3 className="text-2xl md:text-center mt-2 mb-2 text-orange-600 font-bold">
          Sustainable Packaging
        </h3>
        <p>
          Approximately 37.5 million gallons of petroleum oil is dumped into USA
          landfills each year from the more than 3 billion “used” motor oil
          bottles trashed with oil residue still left inside. Packaging
          (including proper disposal) is an incremental cost that does not
          necessarily has to be passed on to the consumer or customer
          (end-users). The company is responding to this opportunity with new
          concepts in motor oil sales and delivery…environmentally sustainable
          oil delivery or <span className="font-semibold">E-SOD</span>.
        </p>
        <h4 className="italic text-main mt-2 md:text-center">Eco-Pouch</h4>
        <p>
          Direct to the Consumer (Do It Yourself = DIY end-user, representing
          15% of the marketplace) and Military/Government 12-pack liters/quarts.
          The preprinted pouches ships in flat, shipped out filled; and then,
          with a packaged return address envelope included with shipment (6-pack
          case), can be returned free of charge to us for re-packaging or our
          proper disposal.
        </p>
      </article>
      <div className="h-48 w-11/12 m-auto md:h-60 mt-5 md:mt-14 lg:h-96  relative flex justify-center items-center">
        <Image alt="b2 oil " src="/images/packaging.png" layout="fill" />
      </div>
    </section>
    <div className="hidden lg:h-72 md:flex h-54 w-full m-auto md:h-60 relative justify-center items-center">
      <Image alt="b2 oil " src="/images/spack.png" layout="fill" />
    </div>
    <div className="md:mt-10">
      <h3 className="text-2xl text-center mt-2 mb-2 text-orange-600 font-bold">
        Packaging Specifications{" "}
      </h3>
      <div className="h-[18rem] w-11/12 m-auto md:h-96 mt-5 md:mt-14 lg:h-[67vh]  relative flex justify-center items-center">
        <Image alt="b2 oil " src="/images/b2Pack1.png" layout="fill" />
      </div>
      <div className="h-[15rem] w-10/12 m-auto md:h-96 mt-5 md:mt-14 lg:h-[60vh]  relative flex justify-center items-center">
        <Image alt="b2 oil " src="/images/pack2.png" layout="fill" />
      </div>
    </div>
    <div className="my-10 h-10 bg-gradient-to-br from-main to-slate-400" />
    <div className="">
      <h3 className="text-2xl text-center mt-2 mb-2 text-orange-600 font-bold">
        Eco-Tote
      </h3>
      <blockquote className="w-10/12 m-auto md:w-full md:text-center md:text-lg">
        Direct to the Customer (Do It For Me = DIFM end-user, representing 85%
        of the marketplace), Quick Lubes and Military/Government 5-gallon HDPE
        Tote
      </blockquote>
      <div className="h-[15rem] w-8/12 m-auto md:h-96 mt-5 md:mt-14 lg:w-5/12  relative flex justify-center items-center">
        <Image
          alt="b2 oil "
          src="/images/tote-removebg-preview.png"
          layout="fill"
        />
      </div>
      <p className="w-10/12 m-auto mt-14">
        ECO-TOTE™ is our rendition of a successfully proven direct-store
        delivery or DSD concept in the water delivery and carbonated beverage
        industries, but not executed in the installer or quick-lube service
        provider category that satisfies the DIFM marketplace. The tote will
        replace today’s 6 Gallon BAG-in-the-BOX concept and the need for
        installers to purchase bulk or excessive quantities in order to be
        competitive…especially for those performing between 20-100 oil changes
        per month looking for a point of differentiation (GREEN) versus larger
        national branded installers.
      </p>
      <aside className="text-green-700 w-10/12 m-auto mt-2 md:mt-2 mb-3">
        Weekly/monthly replenishment and pick-up deliveries will deliver the
        following benefits to Quick Lube stores and Military/Government
        locations:
      </aside>
      <div className="bg-slate-100 lg:mt-5 p-5 shadow-md shadow-slate-400 lg:w-9/12 w-10/12 m-auto lg:ml-15 mt-1">
        <ul className="lg:list-decimal space-y-3 md:space-y-1 p-2">
          <li>
            Reduced initial out-of-pocket costs, including packaging costs will
            be absorbed though re-use Inventory and product carrying costs
            Residual left over oil (approximately 0.5 – 1.5%)
          </li>
          <li>
            Reduced installation time to open, drainage and dispersal of bottles
            Waste sent to the landfill
          </li>
        </ul>
      </div>
    </div>

    <div className="md:mt-10 w-10/12 m-auto">
      <h3 className="text-xl lg:text-2xl mt-7 md:text-center md:mt-2 mb-2 text-orange-600 font-bold">
        ECO-TOTE vs BAG-in-the-BOX
      </h3>
      <div className="lg:m-auto lg:ml-15 mt-1">
        <aside className="lg:relative lg:right-4 mb-1">
          Field tests comparisons uncovered the following differences ...
        </aside>
        <ul className="list-decimal">
          <li>Eco Totes eliminate the need to be sent to a landfill</li>
          <li>
            Eco Totes are more ergonomic (less weight and easier to handle) and
            economically preferred and at a cost of $25.00 each, can be reused
            over and over exhibiting a shelf life of 2 years and growing older
            as it is much more durable
          </li>

          <li>
            Eco Totes re-purpose any remaining residual left over oil when
            re-using totes for future deliveries
          </li>
          <li>
            Eco Totes have a rotating spigot, that reduces dripping and yields
            less loss
          </li>
          <li>Eco Totes are clearly marked for accurate dispensing</li>
        </ul>
      </div>
      <div className="text-center mt-5 text-green-700">
        Quick Lube Locations
      </div>
      <div className="h-[16rem] md:w-11/12 m-auto md:h-96 lg:h-[67vh]  relative flex justify-center items-center">
        <Image alt="b2 oil " src="/images/pack4.png" layout="fill" />
      </div>
      <div className="text-center text-green-700">
        While clean cardboard can be recycled, cardboard contaminated with oil
        cannot be
      </div>
    </div>
    <div className="my-10 h-10 bg-gradient-to-br from-main to-slate-400" />
    <div className="w-10/12 m-auto mb-20">
      <h3 className="text-xl lg:text-2xl md:text-center mt-2 mb-2 text-orange-600 font-bold">
        ECO-DRUM
      </h3>
      <p>
        Direct to the Customer (Do It For Me = DIFM end-user, representing 85%
        of the marketplace), Industrial and Military/Government 55-gallon steel
        drum. ECO-DRUMs are refurbished/re-purposed reconditioned and repainted
        drums cleaned and prepped for re-use.
      </p>
      <div className="h-60 md:h-96 mt-8">
        <div className="w-full h-full relative">
          <Image alt="b2 oil " src="/images/spec.png" layout="fill" />
        </div>
      </div>
    </div>
  </Layout>
);

export default Packaging;
