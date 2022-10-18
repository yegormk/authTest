export interface ICurrentUser {
  first_name: string;
  last_name: string;
  role: string;
  token: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}
