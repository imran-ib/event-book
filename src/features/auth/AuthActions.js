import { LOGIN_USER, LOGOUT_USER } from "./AuthConstatns";

export const loginUser = creds => {
  return {
    type: LOGIN_USER,
    payload: {
      creds
    }
  };
};

export const LogoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};
