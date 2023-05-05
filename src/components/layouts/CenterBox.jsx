import React from "react";
import { Paper } from "@mui/material";

const CenterBox = ({ addClass, children }) => {
  return (
    <section className={`centerBox ${addClass}`}>
      <div className="centerBox__inner">
        <Paper elevation={1}>{children}</Paper>
      </div>
    </section>
  );
};

export default CenterBox;
