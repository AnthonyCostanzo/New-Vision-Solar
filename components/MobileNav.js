import MobileNavDropdown from "./MobileNavDropDown";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import Link from "next/link";

const navRouteLink =
  "text-white shadow-sm shadow-slate-200 font-[Open-Sans] text-[21px] px-14 cursor-pointer hover:translate-x-2 hover:text-main";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Product", link: "/product" },
  { name: "Patent", link: "/patent" },
  { name: "Petro Fluids", link: "/petro" },
  { name: "Our Team", link: "/team" },

  { name: "Contact", link: "/contact" },
];
const MobileNav = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  const toggleNavMenu = (e) => {
    setIsOpenNavMenu((prevNavState) => !prevNavState);
  };
  return (
    <div className="bg-gradient-to-r from-[#5e5d5d] to-[#949494] min-h-max py-2 ">
      <div className="flex py-3 items-center w-11/12">
        <div className="mx-7">
          <Link href="/" passHref={true} scroll={false}>
            <h1 className="text-[21px] min-w-max cursor-pointer font-bold text-gray-50 text-[Open-Sans] ">
              New Energy Solutions Inc.
            </h1>
          </Link>
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
            {navItems.map((route, i) => (
              <Link scroll={false} key={i} href={route.link} passHref>
                <li className={navRouteLink}>{route.name}</li>
              </Link>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
