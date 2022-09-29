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
  setUserRegistered: (user: IUser) => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}

export interface RegisterUserResponse {
  RegisterUserMutation?: RegisterUser;
}

export interface RegisterUser {
  token: string;
  me: User;
  error: string;
}

export interface UserEdge {
  node: Node;
}

export interface Node {
  id: string;
  title: string;
  genre: string;
}

export interface EmailParams {
  email: string;
  name: string;
  link: string;
}
