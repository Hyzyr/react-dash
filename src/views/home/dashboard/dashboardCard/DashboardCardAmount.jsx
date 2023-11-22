import React from "react";
import { Typography } from "@mui/material";

import "./styles/dashboardCardAmount.scss";

const DashboardCardAmount = ({ amount, children }) => {
  return (
    <Typography variant="h2" component="div" className="dashboardCard-amount">
      {amount ?? children}
    </Typography>
  );
};

export default DashboardCardAmount;
