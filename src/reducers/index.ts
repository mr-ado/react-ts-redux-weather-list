import {
  weathersListReducer,
  WeathersListState,
  defaultWeathersListState
} from "./weathersList";
import {
  weathersDictReducer,
  WeathersDictState,
  defaultWeathersDictState
} from "./weathersDict";
import { Action } from "redux";

export interface AppState {
  entities: {
    weathers: WeathersDictState;
  };
  ui: {
    list: WeathersListState;
  };
}

export function defaultState() {
  return {
    entities: {
      weathers: defaultWeathersDictState()
    },
    ui: {
      list: defaultWeathersListState()
    }
  };
}

export function mainReducer(state: AppState = defaultState(), action: Action) {
  return {
    entities: {
      weathers: weathersDictReducer(state.entities.weathers, action)
    },
    ui: {
      list: weathersListReducer(state.ui.list, action, state.entities.weathers)
    }
  };
}
