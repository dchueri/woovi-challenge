import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(50),
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(10),
    },
  },
  jobs: {
    fontWeight: 500,
    textAlign: "left",
    "@media (max-width: 768px)": {
      fontSize: "3rem",
    },
  },
  text: {
    margin: 0,
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography variant="h5" component="h2">
          <TextDecrypt text={"Woovi Challenge"} />
        </Typography>
        <Typography variant="h1" component="h1" className={classes.jobs}>
          <TextDecrypt text={"Movies "} className={classes.text} />
          <TextDecrypt text={"Catalog"} className={classes.text} />
        </Typography>
      </div>
    </Container>
  );
};
