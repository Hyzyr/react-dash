import React from "react";
import "./styles/dashboardCards.scss";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { PlusSVG } from "components/SVG";
import { GridMoreVertIcon } from "@mui/x-data-grid";

const DASHBOARD_CARD_STYLE = {
  blue: "blue",
  violet: "violet",
  mint: "mint",
};

const DASHBOARD_CARD_STYLE_THEME = {
  blue: {
    className: "_blue",
    bg: `var(--white-blue)`,
  },
  violet: {
    className: "_violet",
    bg: `var(--white-violet)`,
  },
  mint: {
    className: "_mint",
    bg: `var(--white-mint)`,
  },
};

const DashboardCard = ({ style = DASHBOARD_CARD_STYLE.blue, children }) => {
  const styleTheme = DASHBOARD_CARD_STYLE_THEME[style];

  return (
    <Card
      style={{ backgroundColor: styleTheme.bg }}
      className={`dashboardCard ${styleTheme.className}`}
    >
      {children}
    </Card>
  );
};

const DashboardCardHeader = ({ label }) => {
  const labelItem = <Chip color="white" label={label} />;

  return (
    <CardHeader
      className="dashboardCard__header"
      avatar={labelItem}
      action={
        <IconButton aria-label="settings">
          <GridMoreVertIcon />
        </IconButton>
      }
    >
      <b>asd</b>
    </CardHeader>
  );
};
const DashboardCardBody = ({ children }) => {
  return <CardContent className="dashboardCard__body">{children}</CardContent>;
};

const DashboardCardFooter = ({ title, hideAddButton = false, children }) => {
  return (
    <CardActions className="dashboardCard__footer">
      {!hideAddButton && (
        <>
          <Typography sx={{ mb: 0 }}>{title ?? children}</Typography>
          <IconButton
            variant="contained"
            size="large"
            className="circleButton circleButton--primary"
            // onClick={() => setShowPopup(!showPopup)}
          >
            <span>{PlusSVG}</span>
          </IconButton>
        </>
      )}
      {hideAddButton && children && <>{children}</>}
    </CardActions>
  );
};

export {
  DASHBOARD_CARD_STYLE,
  DashboardCardHeader,
  DashboardCardBody,
  DashboardCardFooter,
};

export default DashboardCard;
