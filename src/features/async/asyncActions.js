import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR
} from "./asyncConstants";

export const asyncActionsStart = () => dispatch => {
  return dispatch({ type: ASYNC_ACTION_START });
};

export const asyncActionsFinish = () => dispatch => {
  return dispatch({ type: ASYNC_ACTION_FINISH });
};

export const asyncActionsError = () => dispatch => {
  return dispatch({ type: ASYNC_ACTION_ERROR });
};
