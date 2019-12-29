import React from "react";
import { mount } from "enzyme";
import WeathersList from ".";

describe("WeathersList component", () => {
  const deleteMock = jest.fn();

  const props = [
    {
      coord: {
        lon: 153.03,
        lat: -27.47
      },
      sys: {
        country: "AU",
        timezone: 36000,
        sunrise: 1577559212,
        sunset: 1577609115
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      main: {
        temp: 21.84,
        feels_like: 20.49,
        temp_min: 18.89,
        temp_max: 24.44,
        pressure: 1019,
        humidity: 60
      },
      visibility: 10000,
      wind: {
        speed: 3.6,
        deg: 100
      },
      clouds: {
        all: 40
      },
      dt: 1577621343,
      id: 2174003,
      name: "Brisbane"
    }
  ];

  const component = mount(<WeathersList weathers={props} />);

  it("Should render successfully", () => {
    expect(component.exists()).toEqual(true);
  });

  it("Should display a weather when passed in as a prop", () => {
    expect(component.find(".slice__data__item--city").text()).toEqual(
      props[0].name
    );
  });
});
