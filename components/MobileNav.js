import MobileNavDropdown from "./MobileNavDropDown";
import { useState } from "react";
const navLinkStyle = "px-10 py-7 cursor-pointer";
const navRouteLink =
  "text-white shadow-sm shadow-slate-200 font-[Open-Sans] text-[21px] px-14 cursor-pointer hover:translate-x-2 hover:text-orange-300";

const navRoutes = ["Home", "About", "Services", "Contact"];

const MobileNav = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  const toggleNavMenu = (e) => {
    setIsOpenNavMenu((prevNavState) => !prevNavState);
  };
  return (
    <div className="max-w-full min-h-full  bg-gradient-to-br from-[#747474] to-[#dbd7d7]">
      <ul className="flex divide-x-2 divide-main">
        <li className={` ${navLinkStyle} flex-1 `}>
          <h2 className="text-2xl min-w-max mx-5 w-fit font-bold text-[#11e795] font-[georgia]">
            New Vision Solar Inc
            <span className="inline ml-2"></span>
          </h2>
        </li>
        <li className="w-1/3 flex items-center justify-center">
          <MobileNavDropdown toggleNav={toggleNavMenu} />
        </li>
      </ul>
      {/* dropdown menu */}
      {isOpenNavMenu && (
        <ul className="border-t-2 bg-[#717171] pb-5 animate-fade border-main w-screen leading-8">
          <div className="mt-5">
            {navRoutes.map((route, i) => (
              <li key={i} className={`${navRouteLink}`}>
                {route}
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
