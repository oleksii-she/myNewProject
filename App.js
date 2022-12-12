import React, { useState } from "react";
import "./fireBase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRoute } from "./route";

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { store } from "./redux/sore";
const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => setUser(user));

  console.log("====================================");
  console.log(user);
  console.log("====================================");
  const routing = useRoute(user);
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
};

export default App;
