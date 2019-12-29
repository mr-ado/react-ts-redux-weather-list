export type WeatherModel_Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherModel_Main = {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
};

export type WeatherModel_Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type WeatherModel_Clouds = {
  all: string;
};

export type WeatherModel_Sys = {
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type WeatherModel_Rain = {
  hours_one: number;
  hours_three: number;
};

export type WeatherModel_Snow = {
  hours_one: number;
  hours_three: number;
};

export interface WeatherModel {
  base: string;
  weather: WeatherModel_Weather[];
  main: WeatherModel_Main;
  wind: WeatherModel_Wind;
  clouds: WeatherModel_Clouds;
  rain: WeatherModel_Rain;
  snow: WeatherModel_Snow;
  sys: WeatherModel_Sys;
  id: number;
  name: string;
  visibility: number;
}
