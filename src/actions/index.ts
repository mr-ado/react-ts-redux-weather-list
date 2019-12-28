import { WeatherModel } from "../models/Weather";
import { Action, Dispatch } from "redux";
import WeatherService from "../services/weather";

export const ACTION_FETCH_DATA = "FETCH_DATA";
export const ACTION_FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const ACTION_FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const ACTION_SET_WEATHERS = "SET_WEATHERS";

export function isAction<A extends Action>(
  action: Action,
  type: string
): action is A {
  return action.type === type;
}

export interface IActionFetchData extends Action {
  type: "FETCH_DATA";
}

export interface IActionFetchDataSuccess extends Action {
  type: "FETCH_DATA_SUCCESS";
}

export interface IActionFetchDataError extends Action {
  type: "FETCH_DATA_FAILURE";
  errorMessage: string;
}

export interface IActionSetWeathers extends Action {
  type: "SET_WEATHERS";
  weathers: WeatherModel[];
}

export type AppActions =
  | IActionFetchData
  | IActionFetchDataSuccess
  | IActionFetchDataError
  | IActionSetWeathers;

function dispatchFetchData(): IActionFetchData {
  return {
    type: ACTION_FETCH_DATA
  };
}

function dispatchFetchDataSuccess(): IActionFetchDataSuccess {
  return {
    type: ACTION_FETCH_DATA_SUCCESS
  };
}

function dispatchFetchDataError(e: Error): IActionFetchDataError {
  return {
    type: ACTION_FETCH_DATA_FAILURE,
    errorMessage: e.message
  };
}

function dispatchSetWeathers(weathers: WeatherModel[]): IActionSetWeathers {
  return {
    type: ACTION_SET_WEATHERS,
    weathers
  };
}

export function actionFetchWeathers() {
  return (dispatch: Dispatch) => {
    dispatch(dispatchFetchData());

    return WeatherService.getAllWeathers()
      .then(weather => {
        dispatch(dispatchSetWeathers(weather));
        dispatch(dispatchFetchDataSuccess());
      })
      .catch((e: Error) => {
        return dispatch(dispatchFetchDataError(e));
      });
  };
}
