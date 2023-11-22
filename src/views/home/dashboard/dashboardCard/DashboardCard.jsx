import React from "react";
import "./styles/dashboardCards.scss";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { PlusSVG } from "components/SVG";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const DASHBOARD_CARD_BG = {
  blue: `var(--white-blue)`,
  violet: `var(--white-violet)`,
  mint: `var(--white-mint)`,
};

const DashboardCard = ({ bg = DASHBOARD_CARD_BG.blue, children }) => {
  return (
    <Card style={{ backgroundColor: bg }} className="dashboardCard">
      {children}
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
};

const DashboardCardFooter = ({ text }) => {
  return (
    <CardActions>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {text}
      </Typography>
      <IconButton
        variant="contained"
        size="large"
        // onClick={() => setShowPopup(!showPopup)}
      >
        <span>{PlusSVG}</span>
      </IconButton>
    </CardActions>
  );
};

export { DASHBOARD_CARD_BG, DashboardCardFooter };

export default DashboardCard;
