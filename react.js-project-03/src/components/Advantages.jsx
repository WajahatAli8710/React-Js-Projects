import img from "../assets/girlModel.png";

const Advantages = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-6xl text-[#FFFFFF] pt-12">OUR ADVANTAGES</h1>
      <div className="flex gap-4">
        <div
          className="w-[50%] aspect-[16/10] bg-[#181818] bg-cover rounded-xl flex flex-col justify-between p-10"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="w-[50%] aspect-[16/10]     flex flex-col gap-4 ">
          <div className="h-[50%] bg-[#181818] rounded-xl flex flex-col gap-4  justify-center px-10">
            <h1 className="text-2xl text-[#FFFFFF]">INDEPENDENT DESIGNERS</h1>
            <div className="flex items-end justify-between">
              <p className="text-[#CECECE] text-lg w-[70%]">
                Our platform celebrates the ingenuity of independent designers,
                offering a diverse range of fashion-forward garments that
                reflect the creativity and innovation of the artists behind
                them. Explore curated collections showcasing unique creations by
                independent designers.
              </p>
              <div className="flex gap-4 items-center">
                <i className=" ri-arrow-down-long-line px-2 py-1 rounded-full bg-[#181818] border-1 border-[#CECECE] text-[#CECECE]"></i>
                <p className=" text-[#FFFFFF]">LEARN MORE</p>
              </div>
            </div>
          </div>

          <div className="h-[50%] bg-[#181818] rounded-xl flex flex-col gap-4 justify-center px-10">
            <h1 className="text-2xl text-[#FFFFFF]">EXCLUSIVE & UNIQUITY</h1>
            <div className="flex items-end justify-between">
              <p className="text-[#CECECE] text-lg w-[70%]">
                Indulge in curated collections showcasing exclusive,
                one-of-a-kind pieces. each with its own story and charm.
                Experience the allure of unique fashion pieces that radiate
                sophistication and individuality, curated for those who seek
                exclusivity.
              </p>
              <div className="flex gap-4 items-center">
                <i className=" ri-arrow-down-long-line px-2 py-1 rounded-full bg-[#181818] border-1 border-[#CECECE] text-[#CECECE]"></i>
                <p className=" text-[#FFFFFF]">LEARN MORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
