import React from "react";
import { Box, Paper } from "@mui/material";

import "./centerBox.scss";

const CenterBox = ({ addClass = "", children }) => {
  return (
    <Box component={"section"} className={`centerBox ${addClass}`}>
      <Box className="centerBox__inner">
        <Paper elevation={1}>{children}</Paper>
      </Box>
    </Box>
  );
};

export default CenterBox;
