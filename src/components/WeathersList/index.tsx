import React from "react";
import Weather from "../Weather";
import { WeatherModel } from "../../models/Weather";

export interface WeathersListProp {
  weathers: WeatherModel[];
}

export interface WeathersListState {
  weathers: number[];
}
export default class WeathersList extends React.Component<
  WeathersListProp,
  WeathersListState
> {
  render() {
    return (
      <ul>
        {this.props.weathers.map((weather: WeatherModel) => (
          <li key={weather.id}>
            <Weather weather={weather} />
          </li>
        ))}
      </ul>
    );
  }
}
