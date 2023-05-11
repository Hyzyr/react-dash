import React from "react";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { t } = useTranslation();
  return (
    <>
      <Tooltip title={t("header.user.title")}>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>
            <i className="icon icon--account"></i>
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> {t("header.user.profile")}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> {t("header.user.account")}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <i className="icon icon--plus"></i>
          </ListItemIcon>
          {t("header.user.addAccount")}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <i className="icon icon--plus"></i>
          </ListItemIcon>
          {t("header.user.settings")}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <i className="icon icon--plus"></i>
          </ListItemIcon>
          {t("header.user.logout")}
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;
