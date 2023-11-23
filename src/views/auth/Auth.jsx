import React, { useState } from "react";
import CenterBox from "../../components/layouts/centerBox/CenterBox";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import TelInput from "./components/TelInput";
import CodeInputGroup from "./components/CodeInputGroup";
import { useTranslation } from "react-i18next";

const Auth = ({ setAuth }) => {
  const [code, setCode] = useState("");
  const [isCodeWrong, seCodeWrong] = useState(false);
  const [isRequested, setRequested] = useState(false);
  const [isValid, setValid] = useState(false);
  const [remember, setRemember] = useState(false);

  const { t } = useTranslation();

  const onRequest = () => setRequested(true);
  const resend = () => setRequested(true);
  const telInputProps = {
    isRequested,
    onAccept: () => setValid(false),
    onComplete: () => setValid(true),
    onChange: () => {},
  };

  const onCodeChange = (data) => {
    seCodeWrong(false);
    setCode(data);
  };
  const onSubmit = () => {
    if (code.length === 6 && code.toString() === "123456") setAuth(true);
    else seCodeWrong(true);
  };

  return (
    <CenterBox addClass={"centerBox--auth"}>
      <div className="auth">
        <div className="auth__title">
          <h3>{t("auth.login")}</h3>
        </div>
        <div className="auth__form">
          <TelInput {...telInputProps} resend={resend} t={t} />
          {!isRequested ? (
            <Button
              variant="contained"
              children={t("auth.request")}
              size="large"
              disabled={!isValid}
              onClick={onRequest}
            />
          ) : (
            <LoginForm
              onSubmit={onSubmit}
              remember={remember}
              t={t}
              setRemember={setRemember}
              onCodeChange={onCodeChange}
              isError={isCodeWrong}
            />
          )}
        </div>
      </div>
    </CenterBox>
  );
};

const LoginForm = ({
  onSubmit,
  remember,
  setRemember,
  onCodeChange,
  isError,
  t,
}) => {
  return (
    <>
      <CodeInputGroup
        onChange={onCodeChange}
        isError={isError}
        label={!isError ? t("auth.codeLabel") : t("auth.codeLabelError")}
      />
      <div className="auth__form-group">
        <Button
          variant="contained"
          children={t("auth.loginBtn")}
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
          label={t("auth.keepSigned")}
        />
      </div>
    </>
  );
};

export default Auth;
