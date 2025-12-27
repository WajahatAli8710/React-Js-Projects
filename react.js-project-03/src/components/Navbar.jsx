const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className=" text-2xl text-[#FFFFFF]">DVSY</h1>
      <div className="flex gap-2">
        <button className="text-[#CECECE] text-sm p-3 bg-[#181818] rounded">
          DESIGNERS
        </button>
        <button className="text-[#CECECE] text-sm p-3 bg-[#181818] rounded">
          COLLASS
        </button>
        <button className="text-[#CECECE] text-sm p-3 bg-[#181818] rounded">
          EVENTS
        </button>
        <button className="text-[#CECECE] text-sm p-3 bg-[#181818] rounded">
          BLOG
        </button>
        <button className="text-[#CECECE] text-sm p-3 bg-[#181818] rounded">
          CARD
        </button>
        <button className="text-[#010100] text-sm p-3 bg-[#ED7157] rounded">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default Navbar;
