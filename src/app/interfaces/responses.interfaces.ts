export interface currentUser {
  first_name: string;
  last_name: string;
  role: string;
  token: string;
}

export interface loginForm {
  email: string;
  password: string;
}

export interface userAssesment {
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url: string;
}

export interface userGraph {
  data: {
    Agreeableness: number;
    Drive: number;
    Luck: number;
    Openness: number;
  };
  type: string;
}
