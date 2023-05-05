import React, { useState } from "react";
import { Link } from "react-router-dom";
import AutoContainer from "../../layouts/AutoContainer";
import Nav from "./Nav";
import HeaderMenu from "./HeaderMenu";

const publicFolder = process.env.PUBLIC_URL;

const Header = ({ navEnabled }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <header className="header">
      <AutoContainer>
        <div className="header__inner">
          <Link to={"/"}>
            <img src={publicFolder + "logo.svg"} alt="HiPrice" />
          </Link>
          <Nav
            isActive={menu}
            setActive={() => setMenu(false)}
            disabled={!navEnabled}
          />
          <div className="header__inner-group">
            <HeaderMenu />
            <BurgerButton isActive={menu} onClick={toggleMenu} />
          </div>
        </div>
      </AutoContainer>
    </header>
  );
};

const BurgerButton = ({ isActive, onClick }) => {
  return (
    <button className={`burger ${isActive ? "active" : ""}`} onClick={onClick}>
      <span></span>
    </button>
  );
};

export default Header;
