import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import DashboardCard, {
  DASHBOARD_CARD_STYLE,
  DashboardCardBody,
  DashboardCardFooter,
  DashboardCardHeader,
} from "./dashboardCard/DashboardCard";
import DashboardCardAmount from "./dashboardCard/DashboardCardAmount";

import "./styles/dashboard.scss";
import DashboardCardState from "./dashboardCard/DashboardCardState";

const Dashboard = () => {
  return (
    <Box className="dashboard">
      <DashboardTitle title={"Вам доступно:"} />
      <Box className="dashboard__cards">
        <DashboardCard style={DASHBOARD_CARD_STYLE.blue}>
          <DashboardCardHeader label="Магазины" />
          <DashboardCardBody>
            <DashboardCardAmount amount={0} />
          </DashboardCardBody>
          <DashboardCardFooter
            title={
              <>
                из <b>100</b> магазинов
              </>
            }
          />
        </DashboardCard>
        <DashboardCard style={DASHBOARD_CARD_STYLE.violet}>
          <DashboardCardHeader label="SKU" />
          <DashboardCardBody>
            <DashboardCardAmount amount={0} />
          </DashboardCardBody>
          <DashboardCardFooter
            title={
              <>
                из <b>100 000</b> SKU
              </>
            }
          />
        </DashboardCard>
        <DashboardCard style={DASHBOARD_CARD_STYLE.mint}>
          <DashboardCardHeader label="Акции" />
          <DashboardCardBody>
            <DashboardCardState value={3} percentage={20} color="error">
              -60% до -90% на всё
            </DashboardCardState>
            <DashboardCardState value={11} percentage={60} color="warning">
              Лови момент!!! <br />
              Скидки до 65%
            </DashboardCardState>
          </DashboardCardBody>
          <DashboardCardFooter hideAddButton>
            <Link
              color={"success.dark"}
              href="/"
              sx={{
                fontWeight: 500,
                fontSize: 14,
                marginLeft: "auto",
              }}
            >
              все акции
            </Link>
          </DashboardCardFooter>
        </DashboardCard>
      </Box>
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
