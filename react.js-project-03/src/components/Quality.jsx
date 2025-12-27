import img from "../assets/mannequin.png";

const Quality = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[50%] aspect-[16/10]     flex flex-col gap-4 ">
        <div className="h-[50%] bg-[#181818] rounded-xl flex flex-col gap-4  justify-center px-10">
          <h1 className="text-2xl text-[#FFFFFF]">HIGH QUALITY</h1>
          <div className="flex items-end justify-between">
            <p className="text-[#CECECE] text-lg w-[70%]">
              Embrace superior craftsmanship with our meticulously curated,
              enduringly high-quality garments. Discover garments crafted with
              utmost attention to detail and finest materials, promising
              longevity and timeless style.
            </p>
            <div className="flex gap-4 items-center">
              <i className=" ri-arrow-down-long-line px-2 py-1 rounded-full bg-[#181818] border-1 border-[#CECECE] text-[#CECECE]"></i>
              <p className=" text-[#FFFFFF]">LEARN MORE</p>
            </div>
          </div>
        </div>

        <div className="h-[50%] bg-[#181818] rounded-xl flex flex-col gap-4 justify-center px-10">
          <h1 className="text-2xl text-[#FFFFFF]">ECO-FRIENDLY</h1>
          <div className="flex items-end justify-between">
            <p className="text-[#CECECE] text-lg w-[70%]">
              Join our commitment to sustainability with eco-friendly fashion
              options. stylish yet mindful of our planet. Explore guilt-free
              shopping with our eco-conscious collections, crafted with
              planet-friendly materials and ethical practices.
            </p>
            <div className="flex gap-4 items-center">
              <i className=" ri-arrow-down-long-line px-2 py-1 rounded-full bg-[#181818] border-1 border-[#CECECE] text-[#CECECE]"></i>
              <p className=" text-[#FFFFFF]">LEARN MORE</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-[50%] aspect-[16/10] bg-[#181818] bg-cover  rounded-xl flex flex-col justify-between p-10"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

export default Quality;
