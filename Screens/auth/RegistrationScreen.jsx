import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  ImageBackground,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import { styles, loginStyle } from "../styles";
import React, { useState, useCallback } from "react";

// import Profile from "../../assets/image/Profile.svg";

const initialState = {
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dataState, setDataState] = useState(initialState);
  const { height, width } = useWindowDimensions();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setDataState(initialState);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });

  const onFontsLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onFontsLoaded}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/image/PhotoBG.png")}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setIsShowKeyboard(false);
            Keyboard.dismiss();
          }}
        >
          <View
            style={{
              ...styles.regBox,
              maxHeight: isShowKeyboard ? 290 : null,
              paddingBottom: height <= 420 ? 8 : 45,
            }}
          >
            {/* <TouchableOpacity style={styles.buttonLogin}>
          <Profile width={120} height={40} fill="black" />
        </TouchableOpacity> */}
            <View style={styles.imgBox}>
              <Image
                source={require("../../assets/image/avatar.png")}
                style={styles.avatar}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.title}>Войти</Text>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Логин"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={dataState.name}
                  onSubmitEditing={keyboardHide}
                  onChangeText={(value) =>
                    setDataState((prevState) => ({ ...prevState, name: value }))
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                  onFocus={() => setIsShowKeyboard(true)}
                  onSubmitEditing={keyboardHide}
                  value={dataState.email}
                  onChangeText={(value) =>
                    setDataState((prevState) => ({
                      ...prevState,
                      email: value,
                    }))
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={dataState.password}
                  onSubmitEditing={keyboardHide}
                  onChangeText={(value) =>
                    setDataState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />

                <TouchableOpacity
                  style={styles.buttonRegistr}
                  onPress={keyboardHide}
                >
                  <Text style={styles.refistrTextButton}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonLogin}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text
                    style={{
                      ...styles.buttonLoginText,
                    }}
                  >
                    Уже есть аккаунт? Войти
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
