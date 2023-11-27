import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import PopupWrapper from "components/popups/PopupWrapper";
import { TextField, Button, Box } from "@mui/material";

const ApiPopup = ({ closePopup, submitAPI }) => {
  const [value, setValue] = useState("");
  const { t } = useTranslation("products");

  return (
    <PopupWrapper addClass="popup--template" close={closePopup}>
      <Box className="popupTemplate popupTemplate--column">
        <TextField
          className="popupTemplate-input"
          label={t("popups.apiKey")}
          value={value}
          onChange={({ target }) => setValue(target?.value)}
        />
        <Button
          variant="contained"
          color="primary"
          children={t("popups.submitApi")}
          onClick={submitAPI}
          sx={{
            fontWeight: 400,
          }}
        />
      </Box>
    </PopupWrapper>
  );
};

export default ApiPopup;
