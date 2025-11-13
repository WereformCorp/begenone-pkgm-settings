import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const GSOLStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginRight: 12,
    marginLeft: 12,
  },

  secondaryContainer: {
    marginBottom: 96,
  },

  historyContainer: {
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.colors.colorPrimary400,
  },

  historyText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 24,
    padding: 12,
  },

  videoCardLayoutContainer: {
    flexDirection: "row",
  },

  generalSettings: {
    flexDirection: "column",
    marginTop: 24,
  },

  generalText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 24,
    paddingBottom: 12,
    paddingLeft: 12,
  },

  settingsButtonContainer: {
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: globalStyles.borders.borderPrimary400,
    padding: 24,
  },
});
