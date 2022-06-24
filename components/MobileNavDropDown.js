const MobileNavDropdown = ({ toggleNav }) => {
  return (
    <button
      onClick={toggleNav}
      className="bg-gray-200 h-8 rounded-md w-10 flex flex-col items-center md:hidden"
    >
      <div className=" border-[2px] border-green-500 mb-[3px] w-8 mt-2"></div>
      <div className=" border-[2px] border-blue-400 mb-[3px] w-8"></div>
      <div className=" border-[2px] border-sky-700 mb-[3px] w-8"></div>
    </button>
  );
};

export default MobileNavDropdown;
