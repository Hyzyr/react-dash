import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import PopupWrapper from "components/popups/PopupWrapper";
import { Box, Button } from "@mui/material";

const TemplatePopup = ({ closePopup, onApiClick }) => {
  const fileRef = useRef(null);
  const { t } = useTranslation("products");

  const clickFile = () => {
    if (fileRef.current) fileRef.current.click();
  };

  return (
    <PopupWrapper addClass="popup--template" close={closePopup}>
      <Box className="popupTemplate">
        <input className="hiddenInput" ref={fileRef} type="file" />
        <Button
          variant="contained"
          color="primary"
          onClick={onApiClick}
          children={t("popups.enterApi")}
          sx={{
            fontWeight: 400,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          children={t("popups.uploadExcelFile")}
          onClick={clickFile}
          sx={{
            fontWeight: 400,
          }}
        />
      </Box>
    </PopupWrapper>
  );
};

export default TemplatePopup;
