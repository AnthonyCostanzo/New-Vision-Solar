import Layout from "../components/Layout";
import Image from "next/image";
const PetroFluids = () => (
  <Layout
    title="Petro Fluids Inc"
    description="Petro Fluids/Index API Gravity Increaser"
  >
    <div className="mt-10">
      <h1 className="font-[Open-Sans] font-bold text-[18px] text-center text-gray-50 mb-5 ">
        PetroFluids Inc&trade; - Index API Gravity Increaser
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 m-3 text-gray-50">
        <div className=" border-t-main border-t-2 features md:border-main bg-gray-500 md:border-2 p-3 order-2">
          <h2 className="md:text-center text-main mb-1 text-xl italic font-[Open-Sans]">
            Features
          </h2>
          <ul className="space-y-3 font-[Merriweather]">
            <li>Blends with Naphtha to Make “Super Naphtha&trade;”</li>
            <li>Wellhead Bendable Without Any Naphtha or Lighter Crude</li>
            <li>Higher Dose than Standard Dose Shows No Greater Results</li>
            <li>Available in 275 gallon totes to treat 3,275 bbl. of Crude</li>
          </ul>
          <h2 className="md:text-center mt-5 mb-1 text-xl text-main italic font-[Open-Sans]">
            Benefits
          </h2>
          <ul className="space-y-3 font-[Merriweather]">
            <li>
              Standard Dose is Slightly More than One Half Pint per BBL of Crude
            </li>
            <li>API Increase &Viscosity are Permanent</li>
            <li>Eliminates Pipeline Incrustation (GRAS)</li>
            <li>Flash Point Above 200&deg; F</li>
            <li>No Detectable Odor</li>
            <li>“Green” Generally Regarded as Safe (GRAS)</li>
          </ul>
        </div>

        <div className="lg:col-span-2 p-2 bg-gray-500 lg:order-2 font-[Merriweather]">
          <h2 className="md:text-center text-main text-xl mb-1 italic font-[Open-Sans]">
            Product Highlights
          </h2>
          <p>
            PetroFluids Inc&trade; attaches to the Resin present in Crude Oil to
            allow the Aromatic and Saturate components, found in the bulk of the
            Crude, to migrate across the Resin, that previously acted as a
            barrier, and deconstruct the Asphaltene. Asphaltene deconstructs
            back into its former Aromatic and Saturates building Any Naphtha or
            Lighter Crude block components are returned to the bulk of the Crude
            to produce the desirable increase in the API Gravity and an
            associated Viscosity decrease. Oil deposits continue to evolve, over
            millenniums of time, on a road leading from younger Crudes to older
            Bitumen. Over this time Aromatics and Saturates, present in the bulk
            of the oil, are depleted and condenses into Asphaltene and
            walled-off behind the Resin shell.PetroFluids Inc&trade; is a unique
            chemical rejuvenation of old Bitumen, that takes only a minute to
            reverse millenniums of time to produce a younger lighter Crude.
          </p>
          <div className="h-48 my-5 relative w-11/12 lg:w-3/4 lg:h-52 m-auto">
            <Image
              className="rounded-lg"
              src="/images/image1.png"
              alt="g"
              layout="fill"
            />
          </div>

          <h2 className="border-t-2 text-main border-main pt-3 md:text-center mt-3 text-xl mb-1 italic font-[Open-Sans]">
            Index API Gravity Increaser
          </h2>
          <p>
            Both PetroFluids Inc&trade; concentrate or blended to form Super
            Naphtha&trade;, blended at standard dose, results in a reduction of
            approximately 7.5% Asphaltene present, to upgrade Bitumen or Heavy
            Crudes such as Venezuelan Merey 8 to Merey 16 or Canadian Heavy
            Crude with API 12 to Intermediate Crude with API 26.
          </p>
        </div>
        <div className="lg:col-span-3 grid md:grid-cols-2 gap-2 mt-5 order-4 ">
          <div className="bg-gray-500 p-3 rounded-md ">
            <h2 className="md:text-center text-main text-xl mb-1 italic font-[Open-Sans]">
              Technical Specifications
            </h2>
            <ul className="space-y-2 space-x-5 grid grid-cols-2">
              <li className="mt-2 mx-5">Description: Heavy Crude Diluent</li>
              <li>Harmonized Tariff Code: 3402.11.4000</li>
              <li>Appearance: Light Amber Liquid</li>
              <li>Viscosity: Slightly Viscous</li>
              <li>Odor: Faint Soapy Odor</li>
              <li>Flammable Properties: Non-flammable</li>
              <li>Flash Point: 248&deg; F</li>
              <li>Physical State: Liquid</li>
              <li>Solubility in Water: Complete</li>
              <li>Vapor Pressure: 2.70 mm/Hg</li>
              <li>pH: 6.5</li>
              <li>Specific Gravity: 0.9850</li>
              <li>Vapor Density: 4 lb./gal</li>
              <li>Boiling Point: 281&deg; F</li>
              <li>Freezing Point: 28&deg; F</li>
              <li>Stability: Stable</li>
            </ul>
          </div>
          <div className="bg-gray-500 p-3 rounded-md ">
            <h2 className="md:text-center text-main text-xl mb-1 italic font-[Open-Sans]">
              Pricing
            </h2>
            <table className="w-full md:mt-3">
              <thead>
                <tr>
                  <th>Container</th>
                  <th>Volume/Gallons</th>
                  <th>Unit Price</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>Drum</td>
                  <td>55 </td>
                  <td>$6,548 </td>
                </tr>
                <tr>
                  <td>Tote</td>
                  <td>275 </td>
                  <td>$32,740 </td>
                </tr>
                <tr>
                  <td>Flexi-Tot</td>
                  <td>6,600</td>
                  <td>$785.760 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mx-3 m-auto h-[23rem] lg:h-[40rem] relative mb-5">
        <Image
          className="rounded-lg"
          src="/images/ng.jpg"
          alt="g"
          layout="fill"
        />
      </div>
    </div>
  </Layout>
);

export default PetroFluids;
