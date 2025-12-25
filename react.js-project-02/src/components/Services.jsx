const Services = () => {
  return (
    <div className="Services">
      <div className="showCards">
        <div className="card card1">
          <button className="btn1">About Horizon</button>
          <p>
            Professional hard courts with tournament-grade lighting & climate
            control - play in perfect conditions, in any season.
          </p>
          <button className="btn2">
            Explore More
            <i className="ri-arrow-right-up-long-line"></i>
          </button>
        </div>
        <div className="card card2">
          <button className="btn">Training Programs</button>
          <div className="bottom">
            <p>
              Programs designed for <br />
              all ages and abilities.
            </p>
            <h4>
              <i className="ri-arrow-right-up-long-line"></i>
            </h4>
          </div>
        </div>
        <div className="card card3">
          <div className="top">
            <button className="btn">Training Programs</button>
            <p>Hourly Court Rental</p>
          </div>

          <div className="bottom">
            <p>
              Step into a space built for <br />
              players - to grow, compete, <br />
              and thrive.
            </p>
            <div className="more">
              <i className="ri-arrow-left-long-line"></i>

              <i className="ri-arrow-right-long-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
