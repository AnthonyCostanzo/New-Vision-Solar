const navDropDownLinkStyle = "border-[1.5px] my-1 border-gray-500";

const MobileNavDropdown = ({ toggleNav }) => {
  return (
    <button
      onClick={toggleNav}
      className="bg-gray-100 h-fit w-14 rounded-lg px-2 pb-1 cursor-pointer"
    >
      <li className={`mt-3 ${navDropDownLinkStyle}`}></li>
      <li className={`${navDropDownLinkStyle}`}></li>
      <li className={`${navDropDownLinkStyle}`}></li>
    </button>
  );
};

export default MobileNavDropdown;
