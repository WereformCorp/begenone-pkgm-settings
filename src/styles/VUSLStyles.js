import { StyleSheet } from "react-native";

export const VUSLStyles = StyleSheet.create({
  container: {
    marginBottom: 120,
  },

  VUSLStyles: {},

  inputFields: {
    height: 50,
    width: "auto",
    backgroundColor: "#252525",
    justifyContent: "space-between",
    marginLeft: 24,
    marginRight: 24,
    marginTop: 18,
    paddingRight: 18,
  },

  postWireTextContainer: {
    width: "auto",
    marginTop: 36,
    marginRight: 24,
    marginLeft: 24,
    // justifyContent: "center",
    alignItems: "flex-end",
  },

  videoPicker: {
    backgroundColor: "#262626",
    borderRadius: 12,
    marginTop: 16,
    height: "auto",
    width: "auto",
    marginRight: 24,
    marginLeft: 24,
    justifyContent: "center",
  },

  thumbContainer: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  videoContainer: {
    width: "100%",
    height: 80,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "#000",
  },

  iconCloud: {
    position: "absolute",
    alignSelf: "center",
  },

  icon: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingTop: 24,
    paddingRight: 24,
    height: "100%",
    opacity: 0.3,
  },

  iconVideo: {
    height: "auto",
    paddingTop: 0,
  },
});
