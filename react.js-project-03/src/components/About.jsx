import img from "../assets/girlWearingLongCoat.png";

const About = () => {
  return (
    <div className="flex gap-4">
      <div
        className="w-[50%] aspect-[16/10] bg-[#181818]  rounded-xl flex flex-col justify-between p-10"
      >
        <p className="text-[#CECECE] text-lg">ABOUT</p>
        <div className=" flex flex-col gap-4">
          <h1 className="text-6xl text-[#FFFFFF]">
            WHERE FASHION MEETS <br />
            FREEDOM
          </h1>

          <div className="flex items-center justify-between gap-8">
            <p className="text-[#CECECE] text-xl leading-tight">
              We believe that fashion should be an expression of individuality.
              We encourage creativity and originality in every item we offer,
              presenting customers with exclusive collections from independent
              designers. With a commitment to fostering a community of
              creativity and innovation,
            </p>
            <p className="text-[#CECECE] text-xl leading-tight">
              we strive to connect designers with fashion enthusiasts who
              appreciate the artistry and individuality behind each piece.
              Driven by our dedication to authenticity, we curate each
              collection with a keen eye for unique designs that inspire
              confidence and self-expression.
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-[50%] aspect-[16/10] rounded-xl"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

export default About;
