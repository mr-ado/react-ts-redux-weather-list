import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { mainReducer, defaultState } from "./reducers";

// redux DevTools to inspect redux store locally
const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create single redux store
export default function configureStore() {
  return createStore(
    mainReducer,
    defaultState(),
    composeEnhancer(applyMiddleware(thunk))
  );
}
