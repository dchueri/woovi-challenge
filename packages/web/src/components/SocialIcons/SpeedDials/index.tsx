import { makeStyles } from "@material-ui/core/styles";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import allRoutes from "../../../routes/routesConfig.json";
import navBarFields from "../navBarFields.json";

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "absolute",
    top: theme.spacing(6),
    right: theme.spacing(6),
  },
}));

export const SpeedDials = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = (route: string) => {
    setOpen(false);
    if (route === "Login") {
      navigate(allRoutes.login);
    }
    if (route === "Register") {
      navigate(allRoutes.register);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const actionIcons = navBarFields.fields.map((action: any, index: number) => (
    <SpeedDialAction
      key={index}
      icon={<i className={`${action.x_icon}`}></i>}
      tooltipTitle={action.title}
      onClick={() => handleClose(action.title)}
      color="inherit"
    />
  ));

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial"
        className={classes.speedDial}
        hidden={false}
        icon={<SpeedDialIcon />}
        onClose={() => setOpen(false)}
        onOpen={handleOpen}
        open={open}
        direction="down"
      >
        {actionIcons}
      </SpeedDial>
    </>
  );
};
