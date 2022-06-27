const MobileNavDropdown = ({ toggleNav }) => {
  return (
    <button
      onClick={toggleNav}
      className="bg-[#f7f7f7]  p-[.75px] rounded-md w-10 flex flex-col items-center md:hidden"
    >
      <div className=" border-[2px] border-main mb-[3px] w-6 mt-[5.5px]"></div>
      <div className=" border-[2px] border-main mb-[3px] w-6"></div>
      <div className=" border-[2px] border-main mb-[3px] w-6"></div>
    </button>
  );
};

export default MobileNavDropdown;
