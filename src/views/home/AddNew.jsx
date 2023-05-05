import React, { useState } from "react";
import PopupWrapper from "../../components/popups/PopupWrapper";
import { Button, TextField, Typography } from "@mui/material";

const AddNew = ({ closePopup }) => {
  const [isError, setIsError] = useState(false);

  return (
    <PopupWrapper addClass="popup--new" close={closePopup}>
      <div className="popupAdd">
        <div className="popupAdd__row">
          <TextField
            label="Название магазина"
            variant="outlined"
            error={isError}
          />
          <TextField label="Комментарий" variant="outlined" error={isError} />
          <TextField label="Ключ API" variant="outlined" error={isError} />
          <Button
            variant="contained"
            children="Добавить магазин"
            size="large"
            // onClick={onRequest}
          />
        </div>
        {isError && (
          <div className="popupAdd__message">
            <Typography color="error">Something wrong here</Typography>
          </div>
        )}
      </div>
    </PopupWrapper>
  );
};

export default AddNew;
