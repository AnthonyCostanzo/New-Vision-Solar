const MobileNavDropdown = ({ toggleNav }) => {
  return (
    <div className="mb-2 md:hidden ">
      {" "}
      <button
        onClick={toggleNav}
        className="bg-[#f7f7f7] ml-auto relative right-1 mt-2 h-9 p-[.75px] rounded-md w-14 flex flex-col items-center lg:hidden"
      >
        <div className=" border-[2px] border-main mb-[3px] w-8 mt-[8px]"></div>
        <div className=" border-[2px] border-main mb-[3px] w-8"></div>
        <div className=" border-[2px] border-main mb-[3px] w-8"></div>
      </button>
    </div>
  );
};

export default MobileNavDropdown;
