import React from "react";

function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div>
            <h2 className="header__logo">logo</h2>
          </div>
          <ul className="header__list">
            <li className="header__item">
              <a href="#">About</a>
            </li>
            <li className="header__item">
              <a href="#">Menu</a>
            </li>
            <li className="header__item">
              <a href="#">Price</a>
            </li>
            <li className="header__item">
              <a href="#">FAQ</a>
            </li>
          </ul>
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
