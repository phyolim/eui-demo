import React from "react";
import { Provider } from "react-redux";
import HomePage from "./Containers/HomePage";
import configureStore from "./configureStore"
import '@elastic/eui/dist/eui_theme_light.css';

const initialState = {};
const store = configureStore(initialState);

function App() {
  return (
      <Provider store={store}>
        <HomePage />
      </Provider>
  )
}

export default App;
