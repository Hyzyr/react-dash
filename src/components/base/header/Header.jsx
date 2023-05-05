import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AutoContainer from "../../layouts/AutoContainer";
import Nav from "./Nav";
import HeaderMenu from "./HeaderMenu";
import { Badge, IconButton } from "@mui/material";
import { BellSVG } from "../../SVG";

const publicFolder = process.env.PUBLIC_URL;

const Header = ({ navEnabled }) => {
  const [menu, setMenu] = useState(false);
  const [badgeContent, setBadgeContent] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setMenu(false);
  }, [location]);

  const toggleMenu = () => setMenu(!menu);
  const badgeColor = (count) => (count > 0 ? "primary" : "muted");

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
            <Badge
              badgeContent={badgeContent}
              color={badgeColor(badgeContent)}
              showZero
            >
              <IconButton onClick={() => setBadgeContent(badgeContent + 1)}>
                {BellSVG}
              </IconButton>
            </Badge>
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
