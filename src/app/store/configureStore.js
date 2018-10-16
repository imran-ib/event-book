import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../../app/reducers/rootReducer";

export const configureStore = preloadedState => {
  const middleWare = [];
  const middleWareEnahcer = applyMiddleware(...middleWare);

  const storeEnhancer = [middleWareEnahcer];

  const composeEnahncer = composeWithDevTools(...storeEnhancer);

  const store = createStore(rootReducer, preloadedState, composeEnahncer);

  return store;
};
