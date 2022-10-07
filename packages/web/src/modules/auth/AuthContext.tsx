import React, { useEffect, useState } from 'react';

import { IUser } from '../../types/UserTypes';
import { getUserLocalStorage, setUserLocalStorage } from './util';

export interface AuthContextValue extends IUser{
  signin: (user: IUser) => void;
  signout: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = React.createContext<AuthContextValue>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>();

  const signin = (user: IUser) => {
    setUser(user)
    setUserLocalStorage(user);
  };

  const signout = () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  useEffect(() => {
    const user = getUserLocalStorage();
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
