import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./utils/i18n";
import PreLoader, { PreLoaderWrapper } from "./components/base/PreLoader";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <PreLoaderWrapper>
            <PreLoader />
          </PreLoaderWrapper>
        }
      >
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
