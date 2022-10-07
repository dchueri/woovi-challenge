import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Link, Tooltip, Zoom } from "@mui/material";
import navBarFields from "./navBarFields";

const useStyles = makeStyles((theme) => ({
  socialIcons: {
    position: "fixed",
    alignItems: "center",
    top: theme.spacing(6),
    right: theme.spacing(6),
  },
  icon: {
    fontSize: "1.25rem",
  },
}));

export const SocialIcons = () => {
  const classes = useStyles();

  const socialItems = navBarFields.fields.map((socialItem: any) => (
    <Link
      href={socialItem.url}
      rel="noopener noreferrer"
      underline="none"
      color="inherit"
    >
      <Tooltip
        title={socialItem.title}
        placement="left"
        TransitionComponent={Zoom}
        sx={{ justifyContent: "center" }}
      >
        <IconButton
          color="inherit"
          aria-label={socialItem.title}
          sx={{
            display: "block",
            width: "min-content",
            height: "fit-content",
            marginBottom: "0.5em",
          }}
        >
          <i className={`${socialItem.x_icon}`}></i>
        </IconButton>
      </Tooltip>
    </Link>
  ));

  return <div className={classes.socialIcons}>{socialItems}</div>;
};
