import React, { useState, useCallback } from "react";
import { View, ImageBackground } from "react-native";

// import { styles } from "./Screens/styles";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import { useRoute } from "./route";
// SplashScreen.preventAutoHideAsync();

import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const routing = useRoute(true);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;

// const App = () => {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container} onLayout={onLayoutRootView}>
//       <ImageBackground
//         source={require("./Screens/images/PhotoBG.png")}
//         style={styles.image}
//       >
//         {/* <RegistrationScreen /> */}
//         <LoginScreen />
//       </ImageBackground>
//     </View>
//   );
// };
