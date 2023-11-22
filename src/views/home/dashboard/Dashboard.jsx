import { Box, Typography } from "@mui/material";
import "./styles/dashboard.scss";
import React from "react";
import DashboardCard, {
  DASHBOARD_CARD_BG,
} from "./dashboardCard/DashboardCard";

const Dashboard = () => {
  return (
    <Box className="dashboard">
      <DashboardTitle title={"Word of the Day"} />
      <div className="dashboard__cards">
        <DashboardCard bg={DASHBOARD_CARD_BG.blue}></DashboardCard>
        <DashboardCard bg={DASHBOARD_CARD_BG.violet}></DashboardCard>
        <DashboardCard bg={DASHBOARD_CARD_BG.mint}></DashboardCard>
      </div>
    </Box>
  );
};

const DashboardTitle = ({ title }) => {
  return (
    <div className="dashboard__title">
      <Typography
        sx={{ fontSize: 20, fontWeight: 600, padding: "0 1em" }}
        gutterBottom
      >
        {title}
      </Typography>
    </div>
  );
};
export default Dashboard;
