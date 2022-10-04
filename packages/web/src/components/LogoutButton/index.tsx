import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { alertDispatch, Severity } from "../../utils/alerts";
import { alertState } from "../../utils/atom";

const LogoutDiv = styled.div`
  width: 100vw;
  height: 15vh;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LogoutButton = () => {
  const auth = useAuth();
  const user = getUserLocalStorage();
  const setAlertState = useSetRecoilState(alertState);

  const logoutHandle = () => {
    const alert = {
      display: true,
      severity: Severity.success,
      content: `I hope see you soon ${user.me.name}`,
    };
    alertDispatch(alert, setAlertState);
    auth.logout();
  };

  return (
    <LogoutDiv>
      <Button
        onClick={logoutHandle}
        variant="text"
        size="small"
        sx={{
          margin: "2vw",
          borderRadius: "50px",
          height: "fit-content",
          minWidth: "fit-content",
          padding: "1em",
        }}
      >
        <LogoutIcon />
      </Button>
    </LogoutDiv>
  );
};
