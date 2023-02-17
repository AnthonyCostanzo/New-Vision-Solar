const MobileNavDropdown = ({ toggleNav }) => {
  return (
    <div className="mb-2 md:hidden ">
      {" "}
      <button
        onClick={toggleNav}
        className="bg-[#f7f7f7] ml-auto relative right-1 mt-2 h-7 p-[.75px] rounded-md w-12 flex flex-col items-center lg:hidden"
      >
        <div className=" border-[.13em] border-slate-500 mb-[3px] w-8 mt-[4px]"></div>
        <div className=" border-[.13em] border-slate-500 mb-[3px] w-8"></div>
        <div className=" border-[.13em] border-slate-500 mb-[3px] w-8"></div>
      </button>
    </div>
  );
};

export default MobileNavDropdown;
