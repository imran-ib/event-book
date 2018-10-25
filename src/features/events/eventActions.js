import { toastr } from "react-redux-toastr";

import {
  UPDATE_EVENT,
  ADD_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS
} from "./eventsContants";

import {
  asyncActionsStart,
  asyncActionsFinish,
  asyncActionsError
} from "../async/asyncActions";
import { fetchSampleData } from "../../app/data/mockApi";

export const createEvent = event => async dispatch => {
  dispatch({
    type: ADD_EVENT,
    payload: {
      event
    }
  });
  toastr.success("Success!", "The event has been created");
};

export const updateEvent = event => async dispatch => {
  dispatch({
    type: UPDATE_EVENT,
    payload: {
      event
    }
  });
  toastr.success("Success!", "The event has been updated");
};

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};

export const fetchEvents = events => {
  return {
    type: FETCH_EVENTS,
    payload: events
  };
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionsStart());
      let events = await fetchSampleData();
      dispatch(fetchEvents(events));
      dispatch(asyncActionsFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionsError());
    }
  };
};
