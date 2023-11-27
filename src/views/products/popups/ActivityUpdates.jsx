import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import PopupWrapper from "components/popups/PopupWrapper";
import React from "react";
import { useTranslation } from "react-i18next";

const ActivityUpdates = ({ updates, closePopup, onSubmit }) => {
  const { t: tGeneral } = useTranslation();
  const { t } = useTranslation("products");

  const { deactivateList, activateList } = React.useMemo(() => {
    const deactivateList = [];
    const activateList = [];

    updates.forEach((item) => {
      item.activity === "active"
        ? activateList.push(item)
        : deactivateList.push(item);
    });
    console.log({
      deactivateList,
      activateList,
    });
    return {
      deactivateList,
      activateList,
    };
  }, [updates]);

  return (
    <PopupWrapper addClass="popup--activity" close={closePopup}>
      <Box
        className="popupActivity"
        sx={{
          fontSize: 14,
        }}
      >
        {activateList && activateList?.length > 0 && (
          <>
            <Box className="popupActivity__content">
              <ContentTitle title={t('popups.deleteItems')} />
              <ContentList
                title={t('popups.deleteItemsConfirm')}
                dataArr={activateList.map(
                  (item) => `${item.brand} - ${item.item}`
                )}
              />
            </Box>
            <Box className="popupActivity__content">
              <ContentList title={t("popups.deactivateDuration")}>
                <RadioGroup defaultValue="0" name="radio-buttons-group">
                  <ContentRadio value="0" label={t("popups.forever")} />
                  <ContentRadio value="1" label={t("popups.forPeriod")} />
                </RadioGroup>
              </ContentList>
            </Box>
          </>
        )}
        {deactivateList && deactivateList?.length > 0 && (
          <Box className="popupActivity__content">
            <ContentTitle title={t('popups.addItems')} />
            <ContentList
              title={t('popups.addItemsConfirm')}
              dataArr={deactivateList.map(
                (item) => `${item.brand} - ${item.item}`
              )}
            />
          </Box>
        )}
        <Box className="popupActivity__footer">
          <Button
            variant="outlined"
            color="primary"
            children={tGeneral("general.cancel")}
            onClick={closePopup}
            sx={{
              fontWeight: 400,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            children={tGeneral("general.submit")}
            onClick={onSubmit}
            sx={{
              fontWeight: 400,
            }}
          />
        </Box>
      </Box>
    </PopupWrapper>
  );
};

const ContentTitle = ({ title, children }) => {
  return (
    <Typography
      className="popupActivity__content-title"
      fontSize={"inherit"}
      color="primary"
    >
      {title ?? children}
    </Typography>
  );
};
const ContentList = ({ title, dataArr, children }) => {
  return (
    <Box className="popupActivity__content-list">
      {title && (
        <Typography component="strong" fontSize={"inherit"}>
          {title}
        </Typography>
      )}
      {dataArr && (
        <ul>
          {dataArr.map((item) => (
            <li>· {item}</li>
          ))}
        </ul>
      )}
      {children ?? children}
    </Box>
  );
};
const ContentRadio = ({ value, title, ...props }) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={title}
      sx={{
        fontSize: "inherit",
        "& .MuiRadio-root": {
          paddingTop: "0.3em",
          paddingBottom: "0.3em",
        },
        "& .MuiTypography-root": {
          fontSize: "inherit",
          lineHeight: 1.2,
        },
        "& .MuiSvgIcon-root": {
          fontSize: "1.6em",
        },
      }}
      {...props}
    />
  );
};
export default ActivityUpdates;
