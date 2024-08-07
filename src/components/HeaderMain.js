const HeaderMain = () => {
  return (
    <>
        <nav className="navber-main">
          <div className="logo"><h1>LEX<span>DATA</span></h1></div>
          <nav className="main-navber">
            <ul>
              <li className="active">Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact</li>
              <li> <a className="btn-free-run" href="#">Run Free Pilot</a></li>
            </ul>
          </nav>
          <div className="social-media">
            <ul>
              <li><a className="fab fa-facebook fb" href="" target="_blank" rel="noopener noreferrer"></a></li>
              <li><a className="fab fa-instagram insta" href="" target="_blank" rel="noopener noreferrer"></a></li>
              <li><a className="fab fa-twitter twitter" href="" target="_blank" rel="noopener noreferrer"></a></li>
            </ul>
          </div>
        </nav>
    </>
  );
};

export default HeaderMain;
