import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { useIMask } from "react-imask";

const MASK_SETTINGS = {
  mask: "0",
  definitions: {
    "#": /[1-9]/,
  },
};

const CodeInputGroup = ({ onChange, isError }) => {
  const [code, setCode] = useState(Array.from({ length: 6 }));

  const updateInput = (index) => ({ target }) => {
    updateValue(index)(target.value);
    let currentRefIndex = -1;
    refs.find((refItem, index) => {
      if (refItem.current === target) {
        currentRefIndex = index;
        return true;
      }
    });

    if (target.value !== "" && currentRefIndex + 1 !== refs.length)
      refs[currentRefIndex + 1].current.focus();
  };
  const updateValue = (index, ref = null) => (value) => {
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
            {isError ? "SMS code icorrect" : "SMS code"}
          </Typography>
        </label>
        <CodeInput
          inputRef={ref1}
          aria-label={`code digit ${0}`}
          value={code[0] || ""}
          onChange={updateInput(0)}
          error={isError}
        />
        <CodeInput
          inputRef={ref2}
          aria-label={`code digit ${1}`}
          value={code[1] || ""}
          onChange={updateInput(1)}
          error={isError}
        />
        <CodeInput
          inputRef={ref3}
          aria-label={`code digit ${2}`}
          value={code[2] || ""}
          onChange={updateInput(2)}
          error={isError}
        />
        <CodeInput
          inputRef={ref4}
          aria-label={`code digit ${3}`}
          value={code[3] || ""}
          onChange={updateInput(3)}
          error={isError}
        />
        <CodeInput
          inputRef={ref5}
          aria-label={`code digit ${4}`}
          value={code[4] || ""}
          onChange={updateInput(4)}
          error={isError}
        />
        <CodeInput
          inputRef={ref6}
          aria-label={`code digit ${5}`}
          value={code[5] || ""}
          onChange={updateInput(5)}
          error={isError}
        />
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
