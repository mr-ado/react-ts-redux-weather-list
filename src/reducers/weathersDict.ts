import { AppActions } from "../actions";
import { WeatherModel } from "../models/Weather";

export type WeathersDict = {
  [Key: number]: WeatherModel;
};

export type WeathersDictState = {
  byId: WeathersDict;
  allIds: number[];
};

export function defaultWeathersDictState(): WeathersDictState {
  return {
    byId: {},
    allIds: []
  };
}

export function weathersDictReducer(
  state: WeathersDictState,
  action: AppActions
): WeathersDictState {
  switch (action.type) {
    case "SET_WEATHERS":
      return {
        byId: action.weathers.reduce(
          (acc, weather) => ({ ...acc, [weather.id]: weather }),
          state
        ),
        allIds: action.weathers.map(weather => weather.id)
      };

    default:
      return state;
  }
}
