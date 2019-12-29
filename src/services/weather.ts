import { WeatherModel } from "../models/Weather";
import initialData from "./data/weather.json";

const API_URL = "https://api.openweathermap.org/data/2.5/group";
const API_KEY = "8d2de98e089f1c28e1a22fc19a24ef04";
const CITY_IDS = JSON.parse(JSON.stringify(initialData))
  .list.map((a: any) => a.id)
  .toString();
const API_OPTIONS = "&units=metric";

const parseJSON = (response: any): any => response.json();
const checkStatus = (response: any): any => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(response.statusText);
  }
};

export default class WeatherService {
  static getAllWeathers = (): Promise<WeatherModel[]> => {
    return fetch(`${API_URL}?id=${CITY_IDS}&appid=${API_KEY}${API_OPTIONS}`)
      .then(checkStatus)
      .then(parseJSON)
      .then((data: any) => data.list);
  };
}
