import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import App from "./App";

const mockStore = configureMockStore();
const store = mockStore({});

it("App renders without crashing", () => {
  const mockFunction = jest.fn();
  const component = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(component.exists()).toEqual(true);
});
