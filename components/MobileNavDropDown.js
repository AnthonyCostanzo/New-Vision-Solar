const MobileNavDropdown = ({ toggleNav }) => {
  return (
    <div className="mb-2 lg:hidden ">
      {" "}
      <button
        onClick={toggleNav}
        className="bg-[#f7f7f7] ml-auto relative right-1 mt-2 h-8 p-[.75px] rounded-md w-10 flex flex-col items-center lg:hidden"
      >
        <div className=" border-[2px] border-main mb-[3px] w-6 mt-[5.5px]"></div>
        <div className=" border-[2px] border-main mb-[3px] w-6"></div>
        <div className=" border-[2px] border-main mb-[3px] w-6"></div>
      </button>
    </div>
  );
};

export default MobileNavDropdown;
