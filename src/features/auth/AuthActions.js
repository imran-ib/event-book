import { LOGIN_USER, LOGOUT_USER } from "./AuthConstatns";
import { closeModal } from "../modals/ModalActions";

export const loginUser = creds => dispatch => {
  dispatch({ type: LOGIN_USER, payload: { creds } });
  dispatch(closeModal());
};

export const LogoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};
