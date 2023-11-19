import React, { useState } from "react";
import PopupWrapper from "../../components/popups/PopupWrapper";
import { Button, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const AddNew = ({ closePopup }) => {
  const [isError, setIsError] = useState(false);
  const { t } = useTranslation();

  return (
    <PopupWrapper addClass="popup--new" close={closePopup}>
      <div className="popupAdd">
        <div className="popupAdd__row">
          <TextField
            label={t("home.popup.shopName")}
            variant="outlined"
            onFocus={() => setIsError(false)}
            error={isError}
          />
          <TextField
            label={t("home.popup.comment")}
            variant="outlined"
            onFocus={() => setIsError(false)}
            error={isError}
          />
          <TextField
            label={t("home.popup.apiKey")}
            variant="outlined"
            onFocus={() => setIsError(false)}
            error={isError}
          />
          <Button
            variant="contained"
            children={t("home.popup.addBtn")}
            size="large"
            onClick={() => setIsError(true)}
          />
        </div>
        {isError && (
          <div className="popupAdd__message">
            <Typography color="error">
              {t("home.popup.errorMessage")}
            </Typography>
          </div>
        )}
      </div>
    </PopupWrapper>
  );
};

export default AddNew;
