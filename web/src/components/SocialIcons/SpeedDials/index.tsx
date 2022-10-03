import { makeStyles } from "@material-ui/core/styles";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/lab";
import React from "react";
import resume from "../resume.json";

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "absolute",
    top: theme.spacing(6),
    right: theme.spacing(6),
  },
}));

export const SpeedDials = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const actionIcons = resume.profiles.map((action: any) => (
    <SpeedDialAction
      key={action.title.toLowerCase()}
      icon={<i className={`${action.x_icon}`}></i>}
      tooltipTitle={action.title}
      onClick={handleClose}
      ref={action.url}
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
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
      >
        {actionIcons}
      </SpeedDial>
    </>
  );
};
