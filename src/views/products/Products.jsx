import React, { useState } from "react";
import CenterBox from "../../components/layouts/centerBox/CenterBox";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import IconSVG from "components/items/iconSVG/IconSVG";
import TemplateButton from "components/items/templateButton/TemplateButton";
import TemplatePopup from "./popups/TemplatePopup";
import ApiPopup from "./popups/ApiPopup";
import { TEST_DATA } from "./hooks/useProductsColumns";
import ProductsTable from "./ProductsTable";
import useProductsActivity from "./hooks/useProductsActivity";
import ActivityUpdates from "./popups/ActivityUpdates";

const Products = () => {
  const [popup, setPopup] = useState(null);
  const [selected, setSelected] = useState("");

  const { t } = useTranslation("products");
  const { data, updates, isUpdated, updateData, resetState } =
    useProductsActivity({
      data: TEST_DATA,
    });

  const submitAPI = () => {
    setPopup(null);
  };
  const onSubmitActivityChanges = () => {
    resetState();
    setPopup(null);
  };

  //  popups functionality
  const togglePopup = (popupName, state) => {
    if (state === undefined) setPopup(popup === popupName ? null : popupName);
    else setPopup(!state ? null : popupName);
  };

  const onApiClick = () => {
    togglePopup("api", true);
  };

  return (
    <>
      <CenterBox addClass={"centerBox--products"}>
        <Box className="productTable__outer">
          <Box className="productTable__header">
            <Select
              value={selected}
              displayEmpty
              className="smallSelect"
              onChange={({ target }) => setSelected(target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Box className="productTable__header-group">
              <Button
                children={t("loadGoods")}
                variant="contained"
                size="extraSmall"
                color="success"
                startIcon={
                  <Typography className="inlineIcon" component="span">
                    <IconSVG iconName={"market"} />
                  </Typography>
                }
              />
              <Button
                children={t("loadAdditionalInfo")}
                variant="contained"
                size="extraSmall"
                color="pink"
                startIcon={
                  <Typography className="inlineIcon" component="span">
                    <IconSVG iconName={"market"} />
                  </Typography>
                }
              />
            </Box>
            <TemplateButton
              iconName={"xls-file"}
              title={t("additionalInfoTemplate")}
              onClick={() => togglePopup("template", true)}
              sx={{
                marginLeft: "auto",
              }}
            />
          </Box>
          <ProductsTable data={data} updateData={updateData} />
          {isUpdated && (
            <Box className="productTable__footer">
              <Button
                variant="contained"
                onClick={() => togglePopup("activity", true)}
              >
                Save
              </Button>
            </Box>
          )}
        </Box>
      </CenterBox>
      {popup === "template" && (
        <TemplatePopup
          closePopup={() => togglePopup("template", false)}
          onApiClick={onApiClick}
        />
      )}
      {popup === "api" && (
        <ApiPopup
          closePopup={() => togglePopup("api", false)}
          submitAPI={submitAPI}
        />
      )}
      {popup === "activity" && (
        <ActivityUpdates
          updates={updates}
          onSubmit={onSubmitActivityChanges}
          closePopup={() => togglePopup("activity", false)}
        />
      )}
    </>
  );
};

export default Products;
