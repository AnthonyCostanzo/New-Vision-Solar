const MobileNavDropdown = ({ toggleNav }) => {
  return (
    <button
      onClick={toggleNav}
      className="bg-[#171753] h-8 bg-opacity-7 p-[.75px] rounded-md w-12 flex flex-col items-center md:hidden"
    >
      <div className=" border-[1.5px] border-green-500 mb-[4px] w-8 mt-[7px]"></div>
      <div className=" border-[1.5px] border-lime-400 mb-[4px] w-8"></div>
      <div className=" border-[1.5px] border-sky-300 mb-[4px] w-8"></div>
    </button>
  );
};

export default MobileNavDropdown;
