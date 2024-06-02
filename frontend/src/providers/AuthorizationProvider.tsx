import { ReactNode, createContext } from "react";

import { AuthorizationRouter } from "../routers";

import { deleteCookie, getCookie, setCookie } from "../utils";

export interface IAuthorizationProviderProps {
  /** Дочерние элементы. */
  children: ReactNode;
}

export const AuthorizationContext = createContext({
  isLogin: false,
  login: () => {},
  logout: () => {},
});

function AuthorizationProvider(props: IAuthorizationProviderProps) {
  const { children } = props;

  const isLogin = Boolean(getCookie("isAuth"));

  /** Авторизоваться в аккаунт. */
  const login = () => {
    setCookie("isAuth", "true");
    document.location.reload();
  };

  /** Выйти из аккаунта. */
  const logout = () => {
    deleteCookie("isAuth");
    document.location.reload();
  };

  const value = {
    isLogin,
    login,
    logout,
  };

  return (
    <AuthorizationContext.Provider value={value}>
      {isLogin ? children : <AuthorizationRouter />}
    </AuthorizationContext.Provider>
  );
}

export default AuthorizationProvider;
