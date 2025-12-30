import tvIcon from "../assets/tvIcon.png";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="top">
        <div className="innerTop">
          <div className="left">
            <img src={tvIcon} alt="" />
            <h2>Drameeo</h2>
          </div>
          <i className="ri-menu-unfold-4-line"></i>
        </div>

        <div className="menu">
          <p>
            <i className="ri-home-2-fill"></i> Home
          </p>
          <p>
            <i className="ri-ie-line"></i> Explore
          </p>
          <p>
            <i className="ri-stack-line"></i> Genres
          </p>
          <p>
            <i className="ri-bookmark-line"></i> Favourites
          </p>
        </div>

        <div className="opection">
          <p>
            <i className="ri-home-2-fill"></i> Home
          </p>
          <p>
            <i className="ri-ie-line"></i> Explore
          </p>
          <p>
            <i className="ri-stack-line"></i> Genres
          </p>
          <p>
            <i className="ri-bookmark-line"></i> Favourites
          </p>
        </div>
        <div className="setting">
          <p>
            {" "}
            <i className="ri-settings-4-line"></i>
            Setting
          </p>
        </div>
      </div>

      <div className="bottom">
        <p>
          {" "}
          <i className="ri-logout-box-r-line"></i>
          Logout
        </p>
      </div>
    </div>
  );
};

export default SideBar;
