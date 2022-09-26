import { createContext, useEffect, useState } from "react";
import { useMutation } from "react-relay";
import { LoginMutation } from "../../modules/user/LoginMutation";
import { LoginMutation as LoginMutationType } from "../../modules/user/__generated__/LoginMutation.graphql";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();
  const [loginMutation] = useMutation<LoginMutationType>(LoginMutation);

  useEffect(() => {
    const user = getUserLocalStorage();
    if (user) {
      setUser(user);
    }
  }, []);

  async function setUserRegistered(user: IUser) {
    setUser(user);
    setUserLocalStorage(user);
  }

  async function authenticate(email: string, password: string) {
    let payload: any;
    const variables = { email: email, password: password };
    loginMutation({
      variables,
      onCompleted: (res) => {
        if (!res.LoginMutation) {
          return;
        }
        payload = {
          token: res.LoginMutation?.token,
          me: res.LoginMutation?.me,
        };
        setUser(payload);
        setUserLocalStorage(payload);
      },
      onError: (error) => console.log(error),
    });
  }

  function logout(): void {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider
      value={{ ...user, authenticate, logout, setUserRegistered }}
    >
      {children}
    </AuthContext.Provider>
  );
};
