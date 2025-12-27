const Card = () => {
  return (
    <div className="flex w-full gap-4">
      <div className="aspect-3/2  w-[25%] bg-[#181818] flex flex-col justify-between p-7 rounded-xl">
        <div className="flex flex-col gap-4 ">
          <h3 className="text-2xl text-[#FFFFFF]">INDEPENDENCY</h3>
          <p className="text-[#CECECE] text-xl">
            Explore the creativity of independent <br /> designers from around
            the globe.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <i className=" ri-arrow-down-long-line px-2 py-1 rounded-full bg-[#181818] border-1 border-[#CECECE] text-[#CECECE]"></i>
          <p className=" text-[#FFFFFF]">LEARN MORE</p>
        </div>
      </div>

      <div className="aspect-3/2  w-[25%] bg-[#181818] flex flex-col justify-between p-7 rounded-xl">
        <div className="flex flex-col gap-4 ">
          <h3 className="text-2xl text-[#FFFFFF]">UNIQUITY</h3>
          <p className="text-[#CECECE] text-xl">
            Discover the charm of unique pieces <br />
            that stand out effortlessly.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <i className=" ri-arrow-down-long-line px-2 py-1 rounded-full bg-[#181818] border-1 border-[#CECECE] text-[#CECECE]"></i>
          <p className=" text-[#FFFFFF]">LEARN MORE</p>
        </div>
      </div>
      <div className="aspect-3/2  w-[25%] bg-[#181818] flex flex-col justify-between p-7 rounded-xl">
        <div className="flex flex-col gap-4 ">
          <h3 className="text-2xl text-[#FFFFFF]">QUALITY</h3>
          <p className="text-[#CECECE] text-xl">
            Experience unparalleled <br />
            craftsmanship and attention to detail.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <i className=" ri-arrow-down-long-line px-2 py-1 rounded-full bg-[#181818] border-1 border-[#CECECE] text-[#CECECE]"></i>
          <p className=" text-[#FFFFFF]">LEARN MORE</p>
        </div>
      </div>
      <div className="aspect-3/2  w-[25%] bg-[#181818] flex flex-col justify-between p-7 rounded-xl">
        <div className="flex flex-col gap-4 ">
          <h3 className="text-2xl text-[#FFFFFF]">SUSTAINABILITY</h3>
          <p className="text-[#CECECE] text-xl">
            Embrace eco-conscious fashion choices <br />
            without compromising on style.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <i className=" ri-arrow-down-long-line px-2 py-1 rounded-full bg-[#181818] border-1 border-[#CECECE] text-[#CECECE]"></i>
          <p className=" text-[#FFFFFF]">LEARN MORE</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
