import React from "react";
import ReactDOM from "react-dom";
import { CrossSVG } from "../SVG";

const PopupWrapper = ({ addClass = "", close, children }) => {
  const onFogClick = (e) => {
    if (e.target === e.currentTarget) close();
  };
  return ReactDOM.createPortal(
    <div className={`popup ${addClass}`} onClick={onFogClick}>
      <div className="popup__inner">
        <button type="button" className="popup__inner-close" onClick={close}>
          {CrossSVG}
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("popups")
  );
};

export default PopupWrapper;
