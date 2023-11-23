import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import PopupWrapper from "components/popups/PopupWrapper";
import { TextField, Button } from "@mui/material";

const ApiPopup = ({ closePopup, submitAPI }) => {
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  return (
    <PopupWrapper addClass="popup--template" close={closePopup}>
      <div className="popupTemplate popupTemplate--column">
        <TextField
          className="popupTemplate-input"
          label={t("products.popups.apiKey")}
          value={value}
          onChange={({ target }) => setValue(target?.value)}
        />
        <Button
          variant="contained"
          color="primary"
          children={t("products.popups.submitApi")}
          onClick={submitAPI}
          sx={{
            fontWeight: 400,
          }}
        />
      </div>
    </PopupWrapper>
  );
};

export default ApiPopup;
