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
    paddingBottom: 45,
    paddingHorizontal: 16,
  },

  imgBox: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 120,
    position: "absolute",
    bottom: 32,
    borderRadius: 16,
  },

  btnAdd: {
    position: "absolute",
    width: 50,
    height: 50,
    bottom: 15,
    zIndex: 9999,
  },

  title: {
    color: "#212121",
    fontSize: 30,
    marginBottom: 32,
    fontFamily: "Roboto-Bold",
    fontWeight: "500",
    textAlign: "center",
  },
  form: {
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "transparent",
    backgroundColor: "#F6F6F6",
    height: 50,
    padding: 16,
    marginBottom: 16,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
  },
  inputPass: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "transparent",
    backgroundColor: "#F6F6F6",
    height: 50,
    padding: 16,
    marginBottom: 16,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
  },

  inputPassBox: {
    position: "relative",
  },
  hiddenPass: {
    position: "absolute",
    top: 16,
    right: 16,
  },

  textPassHidden: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
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
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
  },

  buttonLogin: {
    alignItems: "center",

    borderTopEndRadius: 8,
  },
  buttonLoginText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
  },
});

export const loginStyle = StyleSheet.create({
  loginBox: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 111,
  },
});

export const publicationStyles = StyleSheet.create({
  publicationBox: {
    backgroundColor: "#E5E5E5",
  },
});

export const CameraStyle = StyleSheet.create({
  createBox: {
    flex: 1,
  },

  camera: {
    flex: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonCamera: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
  },
});

export const createPostStyles = StyleSheet.create({
  photoBox: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  imgBox: {
    alignItems: "center",
  },
  image: {
    borderRadius: 8,
    width: 343,
    height: 240,
  },

  boxEdited: {
    marginTop: 8,
    marginBottom: 48,
    justifyContent: "flex-start",
  },
  editedText: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    justifyContent: "flex-start",
  },

  buttonPuplication: {
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    paddingBottom: 16,
    paddingTop: 16,
    borderRadius: 100,
    marginBottom: 120,
  },

  buttonDellete: {
    backgroundColor: "#F6F6F6",
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
