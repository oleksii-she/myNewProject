import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { styles } from "./Screens/styles";
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./Screens/images/PhotoBG.png")}
        style={styles.image}
      >
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
};

export default App;
