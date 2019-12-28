import { AppActions } from "../actions";
import { WeatherModel } from "../models/Weather";
import { WeathersDictState } from "./weathersDict";

export interface WeathersListState {
  isLoading: boolean;
  weathers: number[];
  errorMessage: string;
}

export function defaultWeathersListState() {
  return {
    isLoading: false,
    weathers: [],
    errorMessage: ""
  };
}

export function weathersListReducer(
  state: WeathersListState,
  action: AppActions,
  weathers: WeathersDictState
): WeathersListState {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        isLoading: true,
        errorMessage: ""
      };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false
      };

    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage
      };

    case "SET_WEATHERS":
      return {
        ...state,
        weathers: [
          ...action.weathers.map((weather: WeatherModel) => weather.id)
        ]
      };

    default:
      return state;
  }
}
