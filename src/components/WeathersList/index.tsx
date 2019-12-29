import React, { Fragment } from "react";
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
      <ul className="slices">
        {this.props.weathers.map((weather: WeatherModel) => (
          <Fragment key={weather.id}>
            <Weather weather={weather} />
          </Fragment>
        ))}
      </ul>
    );
  }
}
