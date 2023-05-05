import React, { useState } from "react";

import {
  ButtonGroup,
  Button,
  Tab,
  Tabs,
  Badge,
  IconButton,
} from "@mui/material";
import { HEADER_CONSTANTS } from "./constants";
import { BellSVG } from "../../SVG";
import { useNavigate } from "react-router-dom";
import useCurrentPath from "../../../hooks/useCurrentPath";

const Nav = ({ isActive, setActive, disabled }) => {
  const [value, setValue] = useState(HEADER_CONSTANTS.tabs[0].value);
  const [language, setLanguage] = useState("ru");
  const navigate = useNavigate();
  useCurrentPath({
    routes: HEADER_CONSTANTS.tabLinks,
    onChange: (newPath) => {
      if (newPath !== value) setValue(newPath);
    },
  });

  const tabProps = {
    iconPosition: "start",
    disabled,
  };
  const badgeContent = 0;

  const handleChange = (event, value) => {
    setValue(value);
    navigate(value);
  };
  const langColor = (lang) => (language === lang ? "primary" : "muted");
  const badgeColor = (count) => (count > 0 ? "primary" : "muted");
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

          <Badge
            badgeContent={badgeContent}
            color={badgeColor(badgeContent)}
            showZero
          >
            <IconButton>{BellSVG}</IconButton>
          </Badge>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
