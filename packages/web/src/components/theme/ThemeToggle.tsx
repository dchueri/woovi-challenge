import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { useRecoilState } from "recoil";
import { darkState } from "../../utils/atom";

export default function ThemeToggle() {
  const [dark, setDarkState] = useRecoilState(darkState);
  const theme = useTheme();
  return (
    <Grid
      sx={{
        display: "flex",
        width: "fitcontent",
        alignItems: "center",
        justifyContent: "end",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        padding: "0em 3em",
        height: '5vh'
      }}
    >
      <IconButton
        sx={{ padding: '0.5em' }}
        onClick={() => setDarkState(dark == "light" ? "dark" : "light")}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Grid>
  );
}
