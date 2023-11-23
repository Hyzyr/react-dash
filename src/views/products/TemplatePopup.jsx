import React from "react";
import { useTranslation } from "react-i18next";

// import "./addNew.scss";
import PopupWrapper from "components/popups/PopupWrapper";

const TemplatePopup = ({ closePopup }) => {
  const { t } = useTranslation();

  return (
    <PopupWrapper addClass="popup--new" close={closePopup}>
      <div className="popupTemplate">
        <h1>popupTemplate</h1>
      </div>
    </PopupWrapper>
  );
};

export default TemplatePopup;
