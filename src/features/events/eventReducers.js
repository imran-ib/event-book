import {
  UPDATE_EVENT,
  ADD_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS
} from "./eventsContants";

import createReducer from "../../common/utils/createReducer";

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ];
};

export const fetchEvents = (state, payload) => {
  return payload.events;
};

export const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

const initialState = [];

export default createReducer(initialState, {
  [ADD_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents
});
