import React from "react";
import "./fireBase/config";
import "react-native-get-random-values";

import { Provider } from "react-redux";

import { store } from "./redux/sore";

import Main from "./components/main";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
