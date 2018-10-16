import { UPDATE_EVENT, ADD_EVENT, DELETE_EVENT } from "./eventsContants";

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
