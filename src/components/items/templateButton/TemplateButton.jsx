import React from "react";
import { Button, Typography } from "@mui/material";
import IconSVG from "../iconSVG/IconSVG";

import "./templateButton.scss";

const TemplateButton = ({ iconName, title, ...props }) => {
  return (
    <Button
      className="templateBtn"
      variant="text"
      color={"muted"}
      startIcon={
        <Typography className="templateBtn-icon" component="span">
          <IconSVG iconName={iconName} />
        </Typography>
      }
      {...props}
    >
      <Typography
        className="templateBtn-title"
        component="span"
        color={"muted.light"}
      >
        {title}
      </Typography>
    </Button>
  );
};

export default TemplateButton;
