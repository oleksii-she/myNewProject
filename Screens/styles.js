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
    position: "absolute",
    bottom: 8,
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
    paddingHorizontal: 16,
    // paddingVertical: 32,

    flex: 1,
    justifyContent: "space-between",
  },
  imgBox: {
    alignItems: "center",
  },
  image: {
    borderRadius: 8,
    height: 240,
  },

  boxEdited: {
    marginBottom: 48,
  },
  editedText: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
  },

  createInput: {
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 16,
    paddingBottom: 15,
  },

  boxMapIcon: {
    position: "relative",
    marginTop: 32,
  },

  iconMap: {
    position: "absolute",
    top: 4,
    left: 0,
  },

  buttonPuplication: {
    alignItems: "center",
    backgroundColor: "#FF6C00",
    paddingBottom: 16,
    paddingTop: 16,
    borderRadius: 100,
  },
  buttonBixDelete: {
    alignItems: "center",
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

///coments

export const comentsStyles = StyleSheet.create({
  box: {
    flex: 1,

    paddingHorizontal: 16,

    paddingVertical: 16,
  },

  inputBox: {
    position: "relative",
  },
  input: {
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    height: 50,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    padding: 16,
    borderColor: "#E8E8E8",
  },

  btnArrow: {
    position: "absolute",
    zIndex: 100,
    bottom: 8,

    right: 8,
    backgroundColor: "#FF6C00",
    width: 34,
    height: 34,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  imgBox: {
    marginBottom: 8,
  },

  comentBox: {
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 6,
    maxWidth: 299,
    marginBottom: 24,
  },

  comentConteiner: {
    border: 1,
    // maxHeight: 50,
  },

  text: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 13,
    marginBottom: 8,
  },
});

///profile

export const profileStyles = StyleSheet.create({
  profileBox: {
    backgroundColor: "#FFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,

    paddingHorizontal: 16,

    paddingTop: 25,
  },

  title: {
    fontFamily: "Roboto-Bold",
    fontWeight: "500",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 18,
  },
});
