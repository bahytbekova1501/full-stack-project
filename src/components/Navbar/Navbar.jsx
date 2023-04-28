import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <Button component={Link} to="/">
          Логотип
        </Button>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Главная
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              О нас
            </a>
          </li>
          <li class="nav-item">
            <Button component={Link} to="/add">
              add
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
