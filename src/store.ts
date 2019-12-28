import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// todo: remove this
function todos(state = [], action: any) {
  switch (action.type) {
    case "ADD_TODO":
      return state;
    default:
      return state;
  }
}

// redux DevTools to inspect redux store locally
const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create single redux store
export default function configureStore() {
  return createStore(todos, composeEnhancer(applyMiddleware(thunk)));
}
