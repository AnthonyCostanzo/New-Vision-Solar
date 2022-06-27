import Link from "next/link";

const navRouteLink =
  "text-gray-100 font-[Open-Sans] text-[20px] cursor-pointer hover:text-main hover:scale-110";
const navItems = [
  { name: "Home", link: "/" },
  { name: "Product", link: "/product" },
  { name: "Patent", link: "/patent" },
  { name: "Neat Green", link: "/neatgreen" },
  { name: "Our Team", link: "/team" },

  { name: "Contact", link: "/contact" },
];

const DesktopNav = () => (
  <ul className="hidden w-[48rem] text-lg md:ml-3 md:flex justify-evenly space-x-3">
    {navItems.map((route, i) => (
      <Link key={i} href={route.link} passHref scroll={false}>
        <li className={navRouteLink}>{route.name}</li>
      </Link>
    ))}
  </ul>
);

export default DesktopNav;
