import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

import "./CircularProgressWithLabel.scss";

const CircularProgressWithLabel = ({ value, percentage, ...props }) => {
  return (
    <Box className="circularProgress">
      <CircularProgress
        className="circularProgress-line"
        variant="determinate"
        {...props}
        value={percentage}
      />
      <Box className="circularProgress-label">
        <span>{value}</span>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
