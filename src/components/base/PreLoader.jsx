import React from "react";

const PreLoader = () => {
  return (
    <div className="spinner">
      <div></div>
      <div></div>
    </div>
  );
};
export const PreLoaderWrapper = ({ fullScreen = false, ...props }) => (
  <div className={`spinner__outer ${fullScreen ? "_fixed" : ""}`} {...props} />
);

export default PreLoader;
