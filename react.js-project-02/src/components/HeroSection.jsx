import img1 from "../assets/menTrainer1.avif";
import img3 from "../assets/menTrainer2.avif";
import img2 from "../assets/femaleTrainer.avif";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="top">
        <h1>
          Unleash Your Inner Champion Today. <br /> All In One Place.
        </h1>
        <p>
          Join the ultimate tennis experience - where passion meets performance,
          and every swing brings you closer to victory.
        </p>
        <button className="btn">
          Start your own journey
          <i className="ri-arrow-right-up-long-line"></i>
        </button>
      </div>

      <div className="bottom">
        <div className="trainers">
          <p>
            Train with real professionals <br />
            Get the real results.
          </p>
          <div className="trainersPic">
            <img src={img1} alt="" />
            <img className="overlay" src={img2} alt="" />
            <img className="overlay" src={img3} alt="" />
          </div>
        </div>
        <div className="reference">
          <button className="refRtn">
            Instagrame
            <i className="ri-arrow-right-up-long-line"></i>
          </button>
          <button className="refRtn">
            FaceBook
            <i className="ri-arrow-right-up-long-line"></i>
          </button>

          <button className="refRtn">
            Tik Tok
            <i className="ri-arrow-right-up-long-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
