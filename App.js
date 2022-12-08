import React from "react";

import { useRoute } from "./route";

import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const routing = useRoute(null);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
