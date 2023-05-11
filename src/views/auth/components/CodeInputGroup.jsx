import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { useIMask } from "react-imask";

const MASK_SETTINGS = {
  mask: "0",
  definitions: {
    "#": /[1-9]/,
  },
};

const CodeInputGroup = ({ onChange, isError, label }) => {
  const [code, setCode] = useState(Array.from({ length: 6 }));

  const onKeyUp = (index) => (e) => {
    let currentRefIndex = index;
    if (
      (e.key === "Backspace" ||
        e.key === "Delete" ||
        e.keyCode === 13 ||
        e.keyCode === 8) &&
      refs[currentRefIndex - 1]
    ) {
      refs[currentRefIndex - 1].current.focus();
      refs[currentRefIndex - 1].current.select();
    }
  };
  const updateInput = (index) => (e) => {
    updateValue(index)(e.target.value);
    let currentRefIndex = index;

    if (e.target.value !== "" && currentRefIndex + 1 !== refs.length) {
      refs[currentRefIndex + 1].current.focus();
      refs[currentRefIndex + 1].current.select();
    }
  };

  const updateValue =
    (index, ref = null) =>
    (value) => {
      let newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (onChange) onChange(newCode.join(""));
    };

  const { ref: ref1 } = useIMask(MASK_SETTINGS, {
    onAccept: updateValue(0),
  });
  const { ref: ref2 } = useIMask(MASK_SETTINGS, {
    onAccept: updateValue(1),
  });
  const { ref: ref3 } = useIMask(MASK_SETTINGS, {
    onAccept: updateValue(2),
  });
  const { ref: ref4 } = useIMask(MASK_SETTINGS, {
    onAccept: updateValue(3),
  });
  const { ref: ref5 } = useIMask(MASK_SETTINGS, {
    onAccept: updateValue(4),
  });
  const { ref: ref6 } = useIMask(MASK_SETTINGS, {
    onAccept: updateValue(5),
  });
  const refs = [ref1, ref2, ref3, ref4, ref5, ref6];

  return (
    <>
      <div className="auth__form-row">
        <label>
          <Typography
            component={"span"}
            color={isError ? "error" : "default"}
            variant="inherit"
          >
            {label}
          </Typography>
        </label>
        {refs.map((reff, index) => (
          <CodeInput
            key={index}
            inputRef={reff}
            aria-label={`code digit ${index}`}
            value={code[index] || ""}
            onChange={updateInput(index)}
            onKeyUp={onKeyUp(index)}
            error={isError}
          />
        ))}
      </div>
    </>
  );
};

export const CodeInput = ({
  inputRef,
  ariaLabel,
  value,
  onChange,
  ...other
}) => {
  return (
    <TextField
      value={value}
      variant="outlined"
      onChange={onChange}
      inputRef={inputRef}
      inputProps={{
        "aria-label": ariaLabel,
      }}
      {...other}
    />
  );
};
export default CodeInputGroup;
