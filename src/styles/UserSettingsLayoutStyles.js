import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const UserSettingsLayoutStyles = StyleSheet.create({
  container: {
    flex: 1, // or your desired background
    paddingVertical: 24,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 36,

    borderBottomWidth: 1,
    paddingTop: 18,
    paddingBottom: 18,
    marginLeft: 36,
    marginRight: 36,
    borderColor: globalStyles.colors.colorPrimary450,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
  },
  userInfo: {
    flexDirection: "column",
    justifyContent: "center",
  },
  userName: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  channelSettingsText: {
    color: "#ff6600",
    marginTop: 4,
  },
  inputFieldsContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },

  headingText: {
    fontSize: 24,
    color: "#fff",
    paddingLeft: 36,
    marginTop: 24,
    fontWeight: "800",
  },

  inputWrapper: {
    backgroundColor: "#202020",
    marginTop: 24,
    width: "auto",
    marginRight: 36,
    marginLeft: 36,
  },

  aboutTextArea: {
    textAlignVertical: "top",
    minHeight: 120,
    color: "white",
    paddingTop: 12,
  },

  defaultInput: {
    height: 40,
  },

  buttonSection: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 84,
    marginBottom: 120,

    // borderTopWidth: 1,
    // borderColor: globalStyles.colors.colorPrimary400,
    marginRight: 36,
    marginLeft: 36,
    padding: 18,
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: 12,
  },
  singleButton: {
    backgroundColor: "#252525",
    width: "auto",

    // marginTop: 12,
    marginBottom: 12,
    // border: 1,
    // borderColor: globalStyles.colors.colorPrimary600,
  },
  dualButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "auto",
    flex: 1,
    // marginRight: 36,
    // marginLeft: 36,
  },
  dualButton1: {
    backgroundColor: globalStyles.colors.colorPrimary600,
    flex: 1,
    minWidth: 60,
    width: "auto",
    maxWidth: 150,
    marginRight: 4,
    color: "#fff",
    // marginRight: 36,
    // marginLeft: 36,
  },
  dualButton2: {
    backgroundColor: "#ff0000ff",
    flex: 1,
    width: "auto",
    minWidth: 60,
    maxWidth: 150,
    marginLeft: 4,
    // marginRight: 36,
    // marginLeft: 36,
  },
});
