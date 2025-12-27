const Rating = () => {
  return (
    <div className="flex items-center justify-between p-8">
      <div className="flex flex-col items-center">
        <p className="text-[#CECECE] text-lg">DESIGNERS</p>
        <h1 className="text-6xl text-[#FFFFFF]">100+</h1>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[#CECECE] text-lg"></p>
        <h1 className="text-6xl text-[#FFFFFF]">500+</h1>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[#CECECE] text-lg">MASTERPIECES</p>
        <h1 className="text-6xl text-[#FFFFFF]">20K+</h1>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[#CECECE] text-lg">EVENTS</p>
        <h1 className="text-6xl text-[#FFFFFF]">50+</h1>
      </div>
    </div>
  );
};

export default Rating;
