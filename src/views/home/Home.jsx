import React, { useState } from "react";
import AddNew from "./AddNew";
import ApiTable from "./ApiTable";
import { IconButton } from "@mui/material";
import { PlusSVG } from "../../components/SVG";
import CenterBox from "../../components/layouts/CenterBox";
import Dashboard from "./dashboard/Dashboard";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => setShowPopup(false);
  return (
    <>
      <CenterBox>
        {/* <ApiTable /> */}
        <Dashboard />
      </CenterBox>
      <IconButton
        className="popupButton"
        variant="contained"
        size="large"
        onClick={() => setShowPopup(!showPopup)}
      >
        <span className="popupButton-ico">{PlusSVG}</span>
      </IconButton>
      {showPopup && <AddNew closePopup={closePopup} />}
    </>
  );
};

export default Home;
