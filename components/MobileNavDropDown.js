const MobileNavDropdown = ({ toggleNav }) => {
  return (
    <button
      onClick={toggleNav}
      className="bg-[#f7f7f7] h- p-[.75px] rounded-md w-9 flex flex-col items-center md:hidden"
    >
      <div className=" border-[1.5px] border-main mb-[3.5px] w-6 mt-[5.5px]"></div>
      <div className=" border-[1.5px] border-main mb-[3.5px] w-6"></div>
      <div className=" border-[1.5px] border-main mb-[3.5px] w-6"></div>
    </button>
  );
};

export default MobileNavDropdown;
