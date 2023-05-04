import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div>
            <h2 className="header__logo">logo</h2>
          </div>
          <div className="header__list">
            <Button className="header__item">hello</Button>
            <Button className="header__item">hello</Button>
            <Button component={Link} to="create" className="header__item">
              craete
            </Button>
            <Button className="header__item">hello</Button>hello
          </div>
          <ul className="header__login">
            <li>SIGN IN</li>
            <li>SIGN UP</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
