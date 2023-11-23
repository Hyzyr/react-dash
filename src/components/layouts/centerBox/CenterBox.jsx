import React from "react";
import { Box, Paper } from "@mui/material";

import "./centerBox.scss";

const CenterBox = ({ addClass = "", alignCenter = false, children }) => {
  const centerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "7.5vh",
  };
  return (
    <Box component={"section"} className={`centerBox ${addClass}`}>
      <Box className="centerBox__inner">
        <Paper elevation={1} sx={alignCenter ? { ...centerStyles } : {}}>
          {children}
        </Paper>
      </Box>
    </Box>
  );
};

export default CenterBox;
