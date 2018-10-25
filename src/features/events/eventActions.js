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

export const createEvent = event => {
  return {
    type: ADD_EVENT,
    payload: {
      event
    }
  };
};

export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: {
      event
    }
  };
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
