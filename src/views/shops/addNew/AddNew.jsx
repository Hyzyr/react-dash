import React, { useState } from "react";
import { Box, Button, TextField, Tooltip, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import IconSVG from "components/items/iconSVG/IconSVG";
import PopupWrapper from "components/popups/PopupWrapper";

import "./addNew.scss";

const AddNew = ({ closePopup }) => {
  const [isError, setIsError] = useState(false);
  const { t } = useTranslation();
  const sxTypography = {
    fontWeight: 300,
    fontSize: 14,
    lineHeight: 1.2,
    padding: "0.5em 0.3em",
  };

  return (
    <PopupWrapper addClass="popup--new" close={closePopup}>
      <div className="popupAdd">
        <div className="popupAdd__row">
          <AddNewField
            label={t("home.popup.shopName")}
            variant="outlined"
            onFocus={() => setIsError(false)}
            error={isError}
            tooltip={
              <Typography sx={sxTypography}>
                <b>Название магазина. </b>
                <br />
                Используйте осмысленные названия. Поле обязательно для
                заполнения
              </Typography>
            }
          />
          <AddNewField
            label={t("home.popup.comment")}
            variant="outlined"
            onFocus={() => setIsError(false)}
            error={isError}
            tooltip={
              <Typography sx={sxTypography}>
                <b>Комментарий. </b>
                <br />
                Для удобного поиска
              </Typography>
            }
          />
          <AddNewField
            label={t("home.popup.apiKey")}
            variant="outlined"
            onFocus={() => setIsError(false)}
            error={isError}
            tooltip={
              <Typography sx={sxTypography}>
                <b>Ключ API. </b>
                <br />
                Ключ из ЛК Wildberries
              </Typography>
            }
          />
          <Button
            className="popupAdd-submit"
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

const AddNewField = ({ tooltip, ...props }) => {
  return (
    <Box className="popupAdd__field">
      <TextField {...props} className="popupAdd__field-input" />
      <Tooltip title={tooltip} placement="bottom" arrow>
        <Button className="popupAdd__field-icon" color="muted">
          <IconSVG iconName={"info"} />
        </Button>
      </Tooltip>
    </Box>
  );
};
export default AddNew;
