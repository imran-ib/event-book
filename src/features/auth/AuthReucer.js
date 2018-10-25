import { LOGIN_USER, LOGOUT_USER } from "./AuthConstatns";

const initialState = {
  currentUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: action.payload.creds.email
      };
    case LOGOUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: {}
      };

    default:
      return state;
  }
};
