import { combineReducers } from "redux";
import testReducer from "./testReducer";
import { reducer as formReducer } from "redux-form";
import eventReducers from "../../features/events/eventReducers";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducers,
  form: formReducer
});

export default rootReducer;
