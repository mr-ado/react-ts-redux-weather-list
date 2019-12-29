import React from "react";
import { Fragment } from "react";
import { WeatherModel } from "../../models/Weather";
import moment from "moment";
import { round } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faThermometerThreeQuarters,
  faLocationArrow
} from "@fortawesome/free-solid-svg-icons";

export interface WeatherProp {
  weather: WeatherModel;
}

export interface WeatherState {}

export default class Weather extends React.Component<
  WeatherProp,
  WeatherState
> {
  render() {
    const { weather } = this.props;

    // WEATHER CONDITION IAMGE
    // weird bug in openweathermap, icon value either returns
    // `http://openweathermap.org/img/wn/02d@2x.png` or `02d`
    function WeatherIcon(value: string) {
      return value.length === 3
        ? `https://openweathermap.org/img/wn/${value}@2x.png`
        : value;
    }

    // CURRENT TIME / DATE
    const nowTime = moment().format("h:mm");
    const nowDate = moment().format("D/MMM");

    // WIND SPEED
    // wind speed is initially metre/second, formula is ( x * 3.6 )
    function MetresPerSecondtoKilometresPerHour(value: number) {
      return round(value * 3.6, 1);
    }

    // WIND DIRECTION ROTATION
    // modify the icon direction by -45deg - it's initial pointing position is top/right
    function WindRotation(value: number) {
      return value - 45;
    }

    // WIND DIRECTION ROTATION STYLE
    const windStyle = {
      transform: `rotate(${WindRotation(weather.wind.deg)}deg)`
    };

    return (
      <div className="slice">
        <div className="wstate-wrap">
          {weather.weather.map(({ description, icon }, index) => (
            <Fragment key={index}>
              <img
                className="wstate"
                src={WeatherIcon(icon)}
                alt={description}
              />
            </Fragment>
          ))}
        </div>

        <div className="slice__data slice__data--period">
          <span className="slice__data__item slice__data__item--icon">
            <FontAwesomeIcon icon={faClock} />
          </span>
          <span className="slice__data slice__data--time">{nowTime}</span>
        </div>

        <div className="slice__data slice__data--dateday">
          <span className="slice__data__item slice__data__item--day">
            {weather.name}
          </span>
          <span className="slice__data__item slice__data__item--date">
            &nbsp;{nowDate}
          </span>
        </div>

        <div className="slice__data slice__data--air">
          <span className="slice__data__item slice__data__item--icon">
            <FontAwesomeIcon icon={faThermometerThreeQuarters} />
          </span>
          <span className="slice__data__item slice__data__item--temperature">
            {round(weather.main.temp, 1)} °C <br />
            <small>(feels like {round(weather.main.feels_like, 1)} °C)</small>
          </span>
        </div>

        <div className="slice__data slice__data--wind">
          <span className="slice__data__item slice__data__item--icon">
            <FontAwesomeIcon icon={faLocationArrow} style={windStyle} />
          </span>
          <span className="slice__data__item slice__data__item--wind-speed">
            {MetresPerSecondtoKilometresPerHour(weather.wind.speed)} km/h
          </span>
        </div>
      </div>
    );
  }
}
