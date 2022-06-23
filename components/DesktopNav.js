import Link from "next/link";

const navRouteLink =
  "text-gray-100 font-[Open-Sans] text-[20px] cursor-pointer hover:text-orange-200 hover:scale-110";
const navItems = [
  { name: "Home", link: "/" },
  { name: "Our Team", link: "/team" },
  { name: "Services", link: "Services" },
  { name: "Contact", link: "/contact" },
];

const DesktopNav = () => (
  <ul className="hidden md:visible md:flex w-full justify-evenly">
    {navItems.map((route, i) => (
      <Link key={i} href={route.link} passHref>
        <li className={navRouteLink}>{route.name}</li>
      </Link>
    ))}
  </ul>
);

export default DesktopNav;
