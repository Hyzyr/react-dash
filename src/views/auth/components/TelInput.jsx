import React, { useState } from "react";
import { useIMask } from "react-imask";
import { Link, TextField } from "@mui/material";
import { useCounter } from "../../../components/items/Counter";

const imagesFolder = process.env.PUBLIC_URL + "images/";

const TelInput = ({ isRequested, onAccept, onComplete, resend, t }) => {
  const { ref } = useIMask(
    {
      mask: "(#00) 000-00-00",
      definitions: {
        "#": /[1-9]/,
      },
    },
    {
      onAccept,
      onComplete,
    }
  );
  return (
    <div className="auth__form-input">
      <TextField
        label={t("auth.fieldLabel")}
        variant="standard"
        inputRef={ref}
        helperText={<HelperText isActive={isRequested} resend={resend} t={t} />}
        InputProps={{
          startAdornment: <InputPrefix />,
        }}
      />
    </div>
  );
};
const InputPrefix = () => {
  return (
    <div className="regionPrefix">
      <div className="regionPrefix__icon">
        <img src={`${imagesFolder}/lang/ru.png`} alt="ru" />
      </div>
      <span>+7</span>
    </div>
  );
};

const HelperText = ({ isActive, resend, t }) => {
  const [isEnd, setIsEnd] = useState(false);
  const { n: seconds, reset: resetTimer } = useCounter({
    numberN: 60,
    onEnd: () => setIsEnd(true),
  });
  const resendFunc = () => {
    resend();
    setIsEnd(false);
    resetTimer();
  };

  if (!isActive) return <></>;
  if (isEnd)
    return (
      <Link
        children={t("auth.resend")}
        underline="hover"
        component={"button"}
        onClick={resendFunc}
      />
    );
  return (
    <>
      {t("auth.requestSMS", { seconds })}
      {/* You can request another SMS code in */}
      {/* second */}
    </>
  );
};
export default TelInput;
