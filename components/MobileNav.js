import MobileNavDropdown from "./MobileNavDropDown";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import { useRouter } from "next/router";
import Link from "next/link";
const navRouteLink =
  "text-white shadow-sm shadow-slate-200 font-[Open-Sans] text-[21px] px-14 cursor-pointer hover:translate-x-2 hover:text-main";

const MobileNav = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const router = useRouter();
  const toggleNavMenu = (e) => {
    setIsOpenNavMenu((prevNavState) => !prevNavState);
  };
  const handleChange = (event) => {
    if (event.target.value === "") return;
    router.push(event.target.value);
  };
  return (
    <div className="bg-gradient-to-r from-[#5e5d5d] to-[#949494] min-h-max py-2 ">
      <div className="flex py-3 items-center w-11/12">
        <div className=" border-r-2 border-main">
          <div className="mx-7 ">
            <Link href="/" passHref={true} scroll={false}>
              <h1 className="text-[21px] min-w-max cursor-pointer font-bold text-gray-50 text-[Open-Sans] ">
                New Energy Solutions Inc
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <MobileNavDropdown toggleNav={toggleNavMenu} />
          <DesktopNav />
        </div>
      </div>
      {/* dropdown menu */}
      {isOpenNavMenu && (
        <ul className="border-t-2 lg:hidden bg-gradient-to-r from-[#494848] to-[#83ad8a] pb-5 animate-fade border-slate-100 leading-8">
          <div className="mt-5">
            <Link scroll={false} href="/" passHref>
              <li className={navRouteLink}>Home</li>
            </Link>
            <Link scroll={false} href="/product" passHref>
              <li className={navRouteLink}>Product</li>
            </Link>

            <Link scroll={false} href="/patent" passHref>
              <li className={navRouteLink}>Patent</li>
            </Link>

            <Link scroll={false} href="/team" passHref>
              <li className={navRouteLink}>Our Team</li>
            </Link>

            <select
              onChange={handleChange}
              className="bg-inherit w-full text-white shadow-sm shadow-slate-200 font-[Open-Sans] text-[21px] px-14 cursor-pointer hover:translate-x-2 hover:text-main "
            >
              <option className="bg-white" value="">
                New Products
              </option>

              <option value="/petro">Petro Fluids</option>

              <option value="/b2oil"> B2 Oil</option>
            </select>

            <Link scroll={false} href="/contact" passHref>
              <li className={navRouteLink}>Contact</li>
            </Link>
          </div>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
