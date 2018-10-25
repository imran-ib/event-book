import { combineReducers } from "redux";
import testReducer from "./testReducer";
import { reducer as formReducer } from "redux-form";
import eventReducers from "../../features/events/eventReducers";
import ModalReducer from "../../features/modals/ModalReducers";
import AuthReucer from "../../../src/features/auth/AuthReucer";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducers,
  form: formReducer,
  modals: ModalReducer,
  auth: AuthReucer
});

export default rootReducer;
