import React, { useState } from "react";

import { ButtonGroup, Button, Tab, Tabs, useMediaQuery } from "@mui/material";
import { HEADER_CONSTANTS } from "./constants";
import { useNavigate } from "react-router-dom";
import useCurrentPath from "../../../hooks/useCurrentPath";

const Nav = ({ isActive, setActive, disabled }) => {
  const [value, setValue] = useState(HEADER_CONSTANTS.tabLinks[0] || "");
  const [language, setLanguage] = useState("ru");
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:1025px)");

  useCurrentPath({
    routes: HEADER_CONSTANTS.tabLinks,
    onChange: (newPath) => {
      if (newPath && newPath !== value) setValue(newPath);
    },
  });

  const tabProps = {
    iconPosition: "start",
    disabled,
  };

  const handleChange = (event, value) => {
    setValue(value);
    setTimeout(() => navigate(value), 200);
  };
  const langColor = (lang) => (language === lang ? "primary" : "muted");
  const closeMenu = (event) => {
    if (event.target === event.currentTarget) setActive();
  };

  return (
    <nav className={`nav ${isActive ? "active" : ""}`} onClick={closeMenu}>
      <div className="nav__inner">
        <div className={`nav__inner-tabs ${disabled ? "disabled" : ""}`}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="navigation bar"
            textColor="primary"
            indicatorColor="primary"
            orientation={matches ? "vertical" : "horizontal"}
          >
            {HEADER_CONSTANTS.tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.title}
                value={tab.value}
                icon={<i className={tab.iconClass}></i>}
                {...tabProps}
              />
            ))}
          </Tabs>
        </div>
        <div className="nav__inner-group">
          <ButtonGroup variant="text" aria-label="swithc language">
            <Button color={langColor("ru")} onClick={() => setLanguage("ru")}>
              ru
            </Button>
            <Button color={langColor("en")} onClick={() => setLanguage("en")}>
              EN
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
