import React, { useState } from "react";
import { Typography, IconButton, Tooltip } from "@mui/material";
import CenterBox from "components/layouts/centerBox/CenterBox";
import AddNew from "./addNew/AddNew";
import ApiTable from "./ApiTable";
import IconSVG from "components/items/iconSVG/IconSVG";

const rows = [
  { id: 1, description: "Snow", shop: "Jon", api_key: 35 },
  { id: 2, description: "Lannister", shop: "Cersei", api_key: 42 },
  { id: 3, description: "Lannister", shop: "Jaime", api_key: 45 },
  { id: 4, description: "Stark", shop: "Arya", api_key: 16 },
  { id: 5, description: "Targaryen", shop: "Daenerys", api_key: null },
  { id: 6, description: "Melisandre", shop: null, api_key: 150 },
  { id: 7, description: "Clifford", shop: "Ferrara", api_key: 44 },
  { id: 8, description: "Frances", shop: "Rossini", api_key: 36 },
  { id: 9, description: "Roxie", shop: "Harvey", api_key: 65 },
  { id: 11, description: "Snow", shop: "Jon", api_key: 35 },
  { id: 12, description: "Lannister", shop: "Cersei", api_key: 42 },
  { id: 13, description: "Lannister", shop: "Jaime", api_key: 45 },
  { id: 14, description: "Stark", shop: "Arya", api_key: 16 },
  { id: 15, description: "Targaryen", shop: "Daenerys", api_key: null },
  { id: 16, description: "Melisandre", shop: null, api_key: 150 },
  { id: 17, description: "Clifford", shop: "Ferrara", api_key: 44 },
  { id: 18, description: "Frances", shop: "Rossini", api_key: 36 },
  { id: 19, description: "Roxie", shop: "Harvey", api_key: 65 },
];
const columns = [
  {
    field: "shop",
    headerName: "магазин",
    width: 200,
    // editable: true,
  },
  {
    field: "description",
    headerName: "Коментарий",
    width: 200,
    // editable: true,
  },
  {
    field: "api_key",
    cellClassName: "mutedData",
    headerName: "Ключ API",
    width: 380,
    // editable: true,
  },
];

const Shops = () => {
  const [isEmpty, setEmpty] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      {!isEmpty && (
        <CenterBox>
          <ApiTable rows={rows} columns={columns} />
        </CenterBox>
      )}
      {isEmpty && (
        <EmptyBox
          text={"У вас пока нет магазинов"}
          onClick={() => setEmpty(!isEmpty)}
        />
      )}

      <AddShopButton
        title="Добавить магазин"
        onClick={() => setShowPopup(!showPopup)}
      />
      {showPopup && <AddNew closePopup={closePopup} />}
    </>
  );
};

const EmptyBox = ({ text, ...props }) => {
  return (
    <CenterBox alignCenter>
      <Typography
        color="primary"
        sx={{
          padding: "60px",
          margin: "auto",
          fontWeight: 300,
          letterSpacing: "0.02em",
        }}
        variant="h4"
        {...props}
      >
        {text}
      </Typography>
    </CenterBox>
  );
};
const AddShopButton = ({ title, onClick }) => {
  return (
    <Tooltip title={title} arrow placement="left">
      <IconButton
        className="popupButton zoomIn"
        variant="contained"
        size="large"
        onClick={onClick}
      >
        <span className="popupButton-ico">
          <IconSVG iconName={"plus"} />
        </span>
      </IconButton>
    </Tooltip>
  );
};
export default Shops;
