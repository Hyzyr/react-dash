import React, { useState } from "react";
import AddNew from "./addNew/AddNew";
import ApiTable from "./ApiTable";
import { Box, IconButton, Tooltip } from "@mui/material";
import { PlusSVG } from "../../components/SVG";
import CenterBox from "../../components/layouts/centerBox/CenterBox";
import Dashboard from "./dashboard/Dashboard";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => setShowPopup(false);
  return (
    <>
      <CenterBox>
        <ApiTable />
        {/* <Dashboard /> */}
      </CenterBox>
      <Tooltip title="Добавить магазин" arrow placement="left">
        <IconButton
          className="popupButton"
          variant="contained"
          size="large"
          onClick={() => setShowPopup(!showPopup)}
        >
          <span className="popupButton-ico">{PlusSVG}</span>
        </IconButton>
      </Tooltip>
      {showPopup && <AddNew closePopup={closePopup} />}
    </>
  );
};

export default Home;
