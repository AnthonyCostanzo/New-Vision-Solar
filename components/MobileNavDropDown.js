const MobileNavDropdown = ({ toggleNav }) => {
  return (
    <div className="w-3/4 flex justify-end">
      {" "}
      <button
        onClick={toggleNav}
        className="bg-[#f7f7f7] mt-4 h-8 p-[.75px] rounded-md w-9 flex flex-col items-center md:hidden"
      >
        <div className=" border-[2px] border-main mb-[3px] w-6 mt-[5.5px]"></div>
        <div className=" border-[2px] border-main mb-[3px] w-6"></div>
        <div className=" border-[2px] border-main mb-[3px] w-6"></div>
      </button>
    </div>
  );
};

export default MobileNavDropdown;
