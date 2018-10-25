import { combineReducers } from "redux";
import testReducer from "./testReducer";
import { reducer as formReducer } from "redux-form";
import eventReducers from "../../features/events/eventReducers";
import ModalReducer from "../../features/modals/ModalReducers";
import AuthReucer from "../../../src/features/auth/AuthReucer";
import AsyncReducer from "../../features/async/asynReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducers,
  form: formReducer,
  modals: ModalReducer,
  auth: AuthReucer,
  async: AsyncReducer,
  toastr: toastrReducer
});

export default rootReducer;
