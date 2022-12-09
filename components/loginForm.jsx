import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
  StyleSheet,
} from "react-native";

import { styles, loginStyle } from "../Screens/styles";
import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

export const LoginForm = ({ navigationRegistr }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [passHidden, setPassHidden] = useState(true);
  const [dataState, setDataState] = useState(initialState);
  const { height, width } = useWindowDimensions();
  const [borderColorLogin, setBorderColorLogin] = useState("transparent");
  const [borderColorPass, setBorderColorPass] = useState("transparent");

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    setDataState(initialState);
    setPassHidden(true);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        setPassHidden(true);
      }}
    >
      <View
        style={{
          ...loginStyle.loginBox,
          maxHeight: isShowKeyboard ? 230 : null,
          paddingBottom: height <= 420 ? 15 : 111,
        }}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Войти</Text>
          <View>
            <TextInput
              style={{
                ...styles.input,
                borderColor: borderColorLogin,
              }}
              name="email"
              placeholder="Адрес электронной почты"
              autoFocus={true}
              onFocus={() => {
                setIsShowKeyboard(true);
                setBorderColorLogin("#FF6C00");
              }}
              onBlur={() => setBorderColorLogin("transparent")}
              value={dataState.email}
              onSubmitEditing={keyboardHide}
              onChangeText={(value) =>
                setDataState((prevState) => ({
                  ...prevState,
                  email: value,
                }))
              }
            />

            <View style={styles.inputPassBox}>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: borderColorPass,
                }}
                placeholder="Пароль"
                secureTextEntry={passHidden}
                autoFocus={true}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setBorderColorPass("#FF6C00");
                }}
                onBlur={() => {
                  setPassHidden(true);
                  setBorderColorPass("transparent");
                }}
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
                style={styles.hiddenPass}
                onPress={() => setPassHidden(false)}
              >
                <Text style={styles.textPassHidden}>Показать</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.buttonRegistr}
              onPress={keyboardHide}
            >
              <Text style={styles.refistrTextButton}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={navigationRegistr}
            >
              <Text
                style={{
                  ...styles.buttonLoginText,
                }}
              >
                Нет аккаунта? Зарегистрироваться
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
