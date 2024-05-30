export type RegistrationFormData = {
  login: string;
  password: string;
  email: string;
};

export type LoginFormData = Exclude<RegistrationFormData, "email">;
