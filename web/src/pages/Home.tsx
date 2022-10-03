import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@mui/material";
import { Content } from "../components/Content";
import { SocialIcons } from "../components/SocialIcons";
import { SpeedDials } from "../components/SocialIcons/SpeedDials";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "80vh",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="home">
        <Content />
        <Hidden mdDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
      </div>
    </>
  );
}

export default Home;
