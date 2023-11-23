import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { ButtonGroup, Button, Tab, Tabs, useMediaQuery } from "@mui/material";
import { HEADER_CONSTANTS } from "./constants";
import { useNavigate } from "react-router-dom";
import useCurrentPath from "../../../hooks/useCurrentPath";
import IconSVG from "components/items/iconSVG/IconSVG";

const Nav = ({ isActive, setActive, disabled }) => {
  const [value, setValue] = useState(HEADER_CONSTANTS.tabLinks[0] || "");
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:1025px)");
  const { t, i18n } = useTranslation();
  const navTitles = t("nav", { returnObjects: true });

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
  const langColor = (lang) => (i18n.language === lang ? "primary" : "muted");
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
            {HEADER_CONSTANTS.tabs.map((tab, index) => (
              <Tab
                key={tab.value}
                label={"" + navTitles[index]}
                value={tab.value}
                icon={<IconSVG iconName={tab.iconName} />}
                {...tabProps}
              />
            ))}
          </Tabs>
        </div>
        <div className="nav__inner-group">
          <ButtonGroup variant="text" aria-label="swithc language">
            <Button
              color={langColor("ru")}
              onClick={() => {
                if (i18n.language !== "ru") i18n.changeLanguage("ru");
              }}
            >
              ru
            </Button>
            <Button
              color={langColor("en")}
              onClick={() => {
                if (i18n.language !== "en") i18n.changeLanguage("en");
              }}
            >
              EN
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
