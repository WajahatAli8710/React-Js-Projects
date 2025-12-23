const Navbar = () => {
  return (
    <div className="nav">
      <h1>Horizon Courts</h1>
      <div className="menu">
        <p>About Us</p>
        <p>Services</p>
        <p>Coaches</p>
        <p>Events</p>
        <p>Contacts</p>
      </div>
      <div className="right">
        <button className="cta"> 
        Book now
        <i className="ri-arrow-right-up-long-line"></i>
      </button>
      <h2><i className="ri-menu-3-line"></i></h2>
      </div>
    </div>
  );
};

export default Navbar;
