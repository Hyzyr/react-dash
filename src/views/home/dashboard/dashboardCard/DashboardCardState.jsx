import React from "react";
import { Box, Typography } from "@mui/material";

import "./styles/dashboardCardState.scss";
import CircularProgressWithLabel from "components/items/circularProgressWithLabel/CircularProgressWithLabel";

const DashboardCardState = ({
  value = 0,
  percentage = 0,
  children,
  ...props
}) => {
  return (
    <Box className="dashboardCardState">
      <Box className="dashboardCardState-progress">
        <CircularProgressWithLabel
          percentage={percentage}
          value={value}
          {...props}
        />
      </Box>
      <Typography component="span" className="dashboardCardState-text">
        {children}
      </Typography>
    </Box>
  );
};

export default DashboardCardState;
