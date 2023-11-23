import React from "react";

const SVG_PATH = "assets/svgs";
const IconSVG = ({ iconName }) => {
  return <ReactSVG src={`${SVG_PATH}/${iconName}.svg`} />;
};

export default IconSVG;
