import React from "react";
import { useIMask } from "react-imask";
import { TextField } from "@mui/material";
import Counter from "../../../components/items/Counter";

const imagesFolder = process.env.PUBLIC_URL + "images/";

const TelInput = ({ isRequested, onAccept, onComplete }) => {
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
        c
        helperText={<HelperText isActive={isRequested} />}
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

const HelperText = ({ isActive }) => {
  if (!isActive) return <></>;
  return (
    <>
      You can request another SMS code in <Counter numberN={60} /> second
    </>
  );
};
export default TelInput;
