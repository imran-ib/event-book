import { createStore, applyMiddleware } from "redux";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../../app/reducers/rootReducer";
import thunk from "redux-thunk";
import firebase from "../config/firebase";

const rfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};

export const configureStore = preloadedState => {
  const middleWare = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  const middleWareEnahcer = applyMiddleware(...middleWare);

  const storeEnhancer = [middleWareEnahcer];

  const composeEnahncer = composeWithDevTools(
    ...storeEnhancer,
    reactReduxFirebase(firebase, rfConfig),
    reduxFirestore(firebase)
  );

  const store = createStore(rootReducer, preloadedState, composeEnahncer);

  return store;
};
