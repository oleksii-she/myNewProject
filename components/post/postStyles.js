import { StyleSheet } from "react-native";

export const postStyles = StyleSheet.create({
  postConteiner: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 32,
  },

  title: {
    color: "#212121",
    fontSize: 16,
    marginBottom: 11,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    textAlign: "left",
  },

  descriptionBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionText: {
    marginLeft: 10,
  },
});
