import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import PopupWrapper from "components/popups/PopupWrapper";
import { Button } from "@mui/material";

const TemplatePopup = ({ closePopup, onApiClick }) => {
  const fileRef = useRef(null);
  const { t } = useTranslation();
  const clickFile = () => {
    if (fileRef.current) fileRef.current.click();
  };

  return (
    <PopupWrapper addClass="popup--template" close={closePopup}>
      <div className="popupTemplate">
        <input className="hiddenInput" ref={fileRef} type="file" />
        <Button
          variant="contained"
          color="primary"
          onClick={onApiClick}
          children={t("products.popups.enterApi")}
          sx={{
            fontWeight: 400,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          children={t("products.popups.uploadExcelFile")}
          onClick={clickFile}
          sx={{
            fontWeight: 400,
          }}
        />
      </div>
    </PopupWrapper>
  );
};

export default TemplatePopup;
