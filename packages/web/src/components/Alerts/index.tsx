import Alert from "@mui/material/Alert";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { alertState } from "../../utils/atom";

function Alerts() {
  const alert = useRecoilValue(alertState);

  const Text = styled.p`
    margin: 0;
    mswordbreak: "break-word";
    width: 15em;
  `;

  const AlertDiv = styled.div`
    width: 100vw;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    margin: 0 2em;
    align-items: center;
    display: ${alert.display ? null : "none"};
  `;
  return (
    <AlertDiv>
      <Alert
        variant="filled"
        severity={alert.severity}
        sx={{
          width: "20em",
          alignItems: "center",
          margin: "0 5em 0 0",
          textAlign: "center",
        }}
      >
        <Text>{alert.content}</Text>
      </Alert>
    </AlertDiv>
  );
}

export default Alerts;
