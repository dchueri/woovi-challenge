import { CircularProgress } from "@mui/material";
import { Suspense, useEffect, useState } from "react";

import { useMutation } from "react-relay";
import styled from "styled-components";
import Helper from "../components/Helper";
import HelperCards from "../components/Helper/HelperCards";
import { LogoutButton } from "../components/LogoutButton";
import MovieForm from "../components/MovieForm";
import MoviesList from "../components/MoviesList";
import {
  getUserLocalStorage,
  setUserLocalStorage
} from "../context/AuthProvider/util";
import { UpdateUserMutation } from "../modules/user/UpdateUserMutation";
import { UpdateUserMutation as UpdateUserMutationType } from "../modules/user/__generated__/UpdateUserMutation.graphql";

const Div = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WebKit = styled.div`
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid black;
  }
`;

function MoviesPanel() {
  const [open, setOpen] = useState(false);
  const [updateUserMutation] =
    useMutation<UpdateUserMutationType>(UpdateUserMutation);
    const user = getUserLocalStorage();

  useEffect(() => {
    if (!user.me.helperSeen) {
      setOpen(true);
    }
  }, [open]);

  const closeWindow = () => {
    setHelperOfUser();
    user.me.helperSeen = true;
    setUserLocalStorage(user);
    setOpen(false);
  };

  const setHelperOfUser = () => {
    const variables = { email: user.me.email, helperSeen: true };
    updateUserMutation({
      variables,
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <Suspense
      fallback={
        <Div>
          <CircularProgress />
        </Div>
      }
    >
      <WebKit>
        {open && (
          <Helper
            close={closeWindow}
            children={<HelperCards closeWindow={closeWindow} />}
          />
        )}
        <LogoutButton />
        <MovieForm />
        <MoviesList />
      </WebKit>
    </Suspense>
  );
}

export default MoviesPanel;
