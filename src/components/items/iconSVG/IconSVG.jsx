import React from "react";
import { ReactSVG } from "react-svg";
import "./IconSVG.scss";

const SVG_PATH = "./images/icons";

const IconSVG = ({ iconName, ...props }) => {
  return (
    <ReactSVG
      className="icon"
      wrapper="span"
      src={`${SVG_PATH}/${iconName}.svg`}
      {...props}
    />
  );
};

export default IconSVG;
