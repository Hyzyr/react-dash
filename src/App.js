import React, { useState } from "react";

import Header from "./components/base/header/Header";
import Theme from "./Theme";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Auth from "./views/auth/Auth";
import CenterBox from "./components/layouts/CenterBox";
import Products from "./views/products/Products";
import Prices from "./views/prices/Prices";
import { Typography } from "@mui/material";

const App = () => {
  const [auth, setAuth] = useState(true);

  return (
    <Theme>
      <Header navEnabled={auth} />
      <Routes>
        {auth ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/manage-prices" element={<Prices />} />
            <Route
              path="/manage-shop"
              element={
                <CenterBox>
                  <Typography sx={{ padding: "60px" }} variant="h4">
                    manage-shop
                  </Typography>
                </CenterBox>
              }
            />
            <Route path="/*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/auth" element={<Auth setAuth={setAuth} />} />
            <Route path="/*" element={<Navigate to="/auth" />} />
          </>
        )}
      </Routes>
    </Theme>
  );
};

export default App;
