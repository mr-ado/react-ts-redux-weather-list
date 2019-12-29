import React from "react";
import { Fragment } from "react";
import { WeatherModel } from "../../models/Weather";
import moment from "moment";
import { round, upperFirst } from "lodash";
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
    // modify to local time, from UTC offset
    const now = moment();
    var nowTimeWithOffset = (seconds: number) =>
      nowInLocalTimezone(seconds).format("h:mm");
    var nowDateWithOffset = (seconds: number) =>
      nowInLocalTimezone(seconds).format("D/MMM");
    var nowInLocalTimezone = (seconds: number) => now.utcOffset(seconds / 60);

    // WIND SPEED
    // wind speed is initially metre/second, formula is ( x * 3.6 )
    var metresPerSecondtoKilometresPerHour = (metres: number) =>
      round(metres * 3.6, 1);

    // WIND DIRECTION ROTATION
    // modify the icon direction by -45deg - it's initial pointing position is top/right
    var windRotation = (degrees: number) => degrees - 45;
    var windStyle = (degrees: number) => ({
      transform: `rotate(${windRotation(degrees)}deg)`
    });

    return (
      <li className="slice">
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

        <div className="slice__data slice__data--location">
          <h2 className="slice__data__item slice__data__item--city">
            {weather.name}
          </h2>
        </div>

        <div className="slice__data slice__data--conditions">
          {weather.weather.map(({ description }, index) => (
            <Fragment key={index}>
              <p className="slice__data__item slice__data__item--condition">
                {upperFirst(description)}
              </p>
            </Fragment>
          ))}
        </div>

        <div className="slice__data slice__data--period">
          <span className="slice__data__item slice__data__item--icon">
            <FontAwesomeIcon icon={faClock} />
          </span>
          <span className="slice__data__item slice__data__item--time">
            &nbsp;{nowTimeWithOffset(weather.sys.timezone)}
          </span>
          <span className="slice__data__item slice__data__item--date">
            &nbsp;{nowDateWithOffset(weather.sys.timezone)}
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
            <FontAwesomeIcon
              icon={faLocationArrow}
              style={windStyle(weather.wind.deg)}
            />
          </span>
          <span className="slice__data__item slice__data__item--wind-speed">
            {metresPerSecondtoKilometresPerHour(weather.wind.speed)} km/h
          </span>
        </div>
      </li>
    );
  }
}
