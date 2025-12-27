import heroImg from "../assets/heroSectionImage.png";

const HeroSection = () => {
  return (
    <div
      className="aspect-[21/9] bg-cover bg-cover  flex flex-col justify-end  p-20"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <h1 className="text-9xl text-[#FFFFFF]">
        DESIGN <br />
        &nbsp; &nbsp;& FREEDOM
      </h1>
      <div className="flex justify-between">
        <p className="text-[#CECECE]">
          Explore Independent Style by Embracing Uniqueness with <br />
          Our Exclusive Designer Apparel
        </p>

        <div className="flex gap-4 items-center">
          <i className=" ri-arrow-down-long-line px-2 py-1 rounded-full bg-[#181818] border-1 border-[#CECECE] text-[#CECECE]"></i>
          <p className=" text-[#FFFFFF]">LEARN MORE</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
