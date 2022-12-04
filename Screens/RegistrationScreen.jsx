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
} from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
// import * as Font from "expo-font";
// import { useFonts } from "expo-font";
// import { AppLoading } from "expo";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

const initialState = {
  name: "",
  email: "",
  password: "",
};

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-bold": require("./fonts/Roboto-bold"),
//   });
// };

export const RegistrationScreen = () => {
  // const [iasReady, setIasReady] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dataState, setDataState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setDataState(initialState);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
      }}
    >
      <View style={{ ...styles.regBox, minHeight: isShowKeyboard ? 360 : 515 }}>
        <View style={styles.imgBox}>
          <Image
            source={require("./images/avatar.png")}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.buttonLogin}>
            <Image
              source={require("./images/btn/add.svg")}
              style={styles.btnAdd}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Регистрация</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Логин"
              onFocus={() => setIsShowKeyboard(true)}
              value={dataState.name}
              onChangeText={(value) =>
                setDataState((prevState) => ({ ...prevState, name: value }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              onFocus={() => setIsShowKeyboard(true)}
              value={dataState.email}
              onChangeText={(value) =>
                setDataState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
              value={dataState.password}
              onSubmitEditing={Keyboard.dismiss}
              onChangeText={(value) =>
                setDataState((prevState) => ({ ...prevState, password: value }))
              }
            />

            <TouchableOpacity
              style={styles.buttonRegistr}
              onPress={keyboardHide}
            >
              <Text style={styles.refistrTextButton}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.buttonLoginText}>
                Уже есть аккаунт? Войти
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
