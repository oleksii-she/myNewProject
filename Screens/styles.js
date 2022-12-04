import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "flex-end",
  },

  regBox: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
  },

  imgBox: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 120,
    position: "absolute",
    bottom: 15,
    borderRadius: 16,
  },

  btnAdd: {
    position: "absolute",
    width: 50,
    height: 50,
    bottom: 15,
    zIndex: 9999,
  },
  form: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#212121",
    fontSize: 30,
    marginBottom: 32,
    // fontFamily: "Roboto-bold",
  },

  input: {
    borderWidth: 1,
    borderColor: " #E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    padding: 16,
    marginBottom: 16,
    textAlign: "center",

    fontSize: 16,
  },

  buttonRegistr: {
    alignItems: "center",
    backgroundColor: "#FF6C00",
    paddingBottom: 16,
    paddingTop: 16,
    borderRadius: 100,
    marginBottom: 16,
  },
  refistrTextButton: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  buttonLogin: {
    alignItems: "center",

    borderTopEndRadius: 8,
  },
  buttonLoginText: {
    color: "#1B4371",
  },
});
