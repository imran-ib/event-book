import { combineReducers } from "redux";
import testReducer from "./testReducer";
import eventReducers from "../../features/events/eventReducers";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducers
});

export default rootReducer;
