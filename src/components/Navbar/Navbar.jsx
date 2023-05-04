import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div>
            <h2 className="header__logo">logo</h2>
          </div>
          <ul className="header__list">
            <Button className="header__item">About</Button>
            <Button className="header__item">Menu</Button>
            <Button component={Link} to="/create" className="header__item">
              Create
            </Button>
            <Button className="header__item">ADD</Button>
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
