/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { AuthorizationContext } from "../providers/AuthorizationProvider";

/**
 * Хук для получения информации и действий для авторизации пользователя.
 * * isLogin - Статус авторизованности.
 * * login - Хэндлер для авторизации
 * * logout - Хэндлер для деавторизации
 */
const useAuthorization = () => useContext(AuthorizationContext);

export default useAuthorization;
