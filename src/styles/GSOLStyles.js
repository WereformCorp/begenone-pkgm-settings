import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/* General settings overview layout styles */
export const GSOLStyles = StyleSheet.create({
  container: {
    // Root settings container
    flexDirection: "column",
    marginRight: 12,
    marginLeft: 12,
  },

  secondaryContainer: {
    // Bottom spacing for scroll safety
    marginBottom: 96,
  },

  historyContainer: {
    // Divider for history section
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.colors.colorPrimary400,
  },

  historyText: {
    // History section heading
    color: "#fff",
    fontWeight: "800",
    fontSize: 24,
    padding: 12,
  },

  videoCardLayoutContainer: {
    // Horizontal card layout wrapper
    flexDirection: "row",
  },

  generalSettings: {
    // General settings section container
    flexDirection: "column",
    marginTop: 24,
  },

  generalText: {
    // General settings heading
    color: "#fff",
    fontWeight: "800",
    fontSize: 24,
    paddingBottom: 12,
    paddingLeft: 12,
  },

  settingsButtonContainer: {
    // Settings action container
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: globalStyles.borders.borderPrimary400,
    padding: 24,
  },
});
