import React from "react";
import { OutlinedInput } from "@mui/material";
import { useIMask } from "react-imask";

const CodeInputGroup = () => {
  return (
    <>
      <div className="auth__form-row">
        <label>SMS code</label>
        {Array.from({ length: 6 }).map((item, index) => (
          <OutlinedInput
            inputProps={{
              "aria-label": "number 1",
            }}
          />
        ))}
      </div>
    </>
  );
};

export const CodeInput = ({ ariaLabel, onAccept, onComplete }) => {
  const { ref } = useIMask(
    {
      mask: "0",
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
    <OutlinedInput
      inputRef={ref}
      inputProps={{
        "aria-label": ariaLabel,
      }}
    />
  );
};
export default CodeInputGroup;
