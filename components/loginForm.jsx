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
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignInUser } from "../redux/auth/authOperation";

const initialState = {
  email: "",
  password: "",
};

export const LoginForm = ({ navigationRegistr, navigationPosts }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [passHidden, setPassHidden] = useState(true);
  const [dataState, setDataState] = useState(initialState);
  const { height, width } = useWindowDimensions();
  const [errorMessage, setErrorMessage] = useState(null);
  const [borderColorLogin, setBorderColorLogin] = useState("transparent");
  const [borderColorPass, setBorderColorPass] = useState("transparent");

  const { statusSignInUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setPassHidden(true);
  };

  const hendlerSubmit = () => {
    if (dataState.email === "" || dataState.password === "") {
      return setErrorMessage(" All fields must be filled");
    }
    setErrorMessage(null);

    setIsShowKeyboard(false);
    Keyboard.dismiss();

    dispatch(authSignInUser(dataState));

    setDataState(initialState);
    setPassHidden(true);
  };
  useEffect(() => {
    statusErrorMessage();
  });
  const statusErrorMessage = () => {
    switch (statusSignInUser) {
      case "Firebase: Error (auth/user-not-found).":
        setErrorMessage("такой емейл не существует");
        break;
      case "Firebase: Error (auth/invalid-email).":
        setErrorMessage("неверный емейл");
        break;
      case "Firebase: Error (auth/wrong-password).":
        setErrorMessage("неверный пароль");
        break;
      case "Firebase: Error (auth/network-request-failed).":
        setErrorMessage(
          "проверьте сойденение с интернетом, или перезайдите позже"
        );
        break;
      default:
        break;
    }
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
          {errorMessage && (
            <Text
              style={{
                marginBottom: 5,
                fontSize: 15,
                color: "red",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </Text>
          )}
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
              onPress={() => {
                hendlerSubmit();
              }}
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
