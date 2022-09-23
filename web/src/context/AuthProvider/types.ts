export interface IUser {
  token?: string;
  me?: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
