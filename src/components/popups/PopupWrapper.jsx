import React from "react";
import ReactDOM from "react-dom";
import IconSVG from "components/items/iconSVG/IconSVG";

const PopupWrapper = ({ addClass = "", close, children }) => {
  const onFogClick = (e) => {
    if (e.target === e.currentTarget) close();
  };
  return ReactDOM.createPortal(
    <div className={`popup ${addClass}`} onClick={onFogClick}>
      <div className="popup__inner">
        <button type="button" className="popup__inner-close" onClick={close}>
          <IconSVG iconName={"close2"} />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("popups")
  );
};

export default PopupWrapper;
