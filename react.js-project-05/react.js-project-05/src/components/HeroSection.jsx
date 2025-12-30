const HeroSection = () => {
  return (
    <div className="heroSection">
      <button>🔥 Now Trending</button>
      <div>
        <div className="bottom">
          <div className="top">
            <button>Drama</button>
            <button>Fartagy</button>
          </div>
          <h1>
            Dimensional Kids on <br /> an Adventure
          </h1>
          <p>
            When two curious kids stumble into a hidden porta, they travel{" "}
            <br /> across magical cimensions weile truing to find their wrai
            home ...
          </p>
          <div className="innerBottom">
          <div className="left">
              <button>
              <i className="ri-play-fill"></i>Watch Now
            </button>
            <i className="ri-download-2-line"></i>
            <i className="ri-more-2-line icon-2"></i>
          </div>
          <button className="btn">More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
