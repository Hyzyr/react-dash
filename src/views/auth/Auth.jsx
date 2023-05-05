import React, { useState } from "react";
import CenterBox from "../../components/layouts/CenterBox";
import {
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import TelInput from "./components/TelInput";
import CodeInputGroup from "./components/CodeInputGroup";


const Auth = ({ setAuth }) => {
  const [isRequested, setRequested] = useState(true);
  const [isValid, setValid] = useState(true);
  const [remember, setRemember] = useState(false);

  const onRequest = () => setRequested(true);
  const telInputProps = {
    isRequested,
    onAccept: () => setValid(false),
    onComplete: () => setValid(true),
    onChange: () => {},
  };

  const onSubmit = () => {
    setAuth(true);
  };

  return (
    <CenterBox addClass={"centerBox--auth"}>
      <div className="auth">
        <div className="auth__title">
          <h3>login</h3>
        </div>
        <div className="auth__form">
          <TelInput {...telInputProps} />
          {!isRequested ? (
            <Button
              variant="contained"
              children="Request OTP"
              size="large"
              disabled={!isValid}
              onClick={onRequest}
            />
          ) : (
            <LoginForm
              onSubmit={onSubmit}
              remember={remember}
              setRemember={setRemember}
            />
          )}
        </div>
      </div>
    </CenterBox>
  );
};

const LoginForm = ({ onSubmit, remember, setRemember }) => {
  return (
    <>
      <CodeInputGroup />
      <div className="auth__form-group">
        <Button
          variant="contained"
          children="Login"
          size="large"
          onClick={() => onSubmit()}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={remember}
              onChange={({ target }) => {
                setRemember(target.checked);
              }}
            />
          }
          label="Keep me sign in"
        />
      </div>
    </>
  );
};

export default Auth;
