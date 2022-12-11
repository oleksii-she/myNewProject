import React from "react";

import { useRoute } from "./route";

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { store } from "./redux/sore";
const App = () => {
  const routing = useRoute(true);

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
};

export default App;
