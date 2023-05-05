import React, { useState } from "react";
import { useIMask } from "react-imask";
import { Link, TextField } from "@mui/material";
import Counter from "../../../components/items/Counter";

const imagesFolder = process.env.PUBLIC_URL + "images/";

const TelInput = ({ isRequested, onAccept, onComplete, resend }) => {
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
        label="Phone"
        variant="standard"
        inputRef={ref}
        helperText={<HelperText isActive={isRequested} resend={resend} />}
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

const HelperText = ({ isActive, resend }) => {
  const [isEnd, setIsEnd] = useState(false);
  const resendFunc = () => {
    resend();
    setIsEnd(false);
  };

  if (!isActive) return <></>;
  if (isEnd)
    return (
      <Link
        children="send new code"
        underline="hover"
        component={"button"}
        onClick={resendFunc}
      />
    );
  return (
    <>
      You can request another SMS code in{" "}
      <Counter numberN={60} onEnd={() => setIsEnd(true)} /> second
    </>
  );
};
export default TelInput;
