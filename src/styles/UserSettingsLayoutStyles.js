import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/* User settings screen layout styles */
export const UserSettingsLayoutStyles = StyleSheet.create({
  container: {
    // Root screen container
    flex: 1,
    paddingVertical: 24,
  },

  profileSection: {
    // User profile header section
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingTop: 18,
    paddingBottom: 18,
    marginLeft: 36,
    marginRight: 36,
    borderColor: globalStyles.colors.colorPrimary450,
  },

  userImage: {
    // User avatar image
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
  },

  userInfo: {
    // User identity info stack
    flexDirection: "column",
    justifyContent: "center",
  },

  userName: {
    // Username display
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  channelSettingsText: {
    // Link to channel settings
    color: "#ff6600",
    marginTop: 4,
  },

  inputFieldsContainer: {
    // Editable fields container
    flexGrow: 1,
    justifyContent: "flex-start",
  },

  headingText: {
    // Page heading text
    fontSize: 36,
    color: "#fff",
    marginTop: 24,
    fontWeight: "800",
    textAlign: "center",
  },

  inputWrapper: {
    // Input field wrapper
    backgroundColor: "#202020",
    marginTop: 18,
    width: "auto",
    marginRight: 36,
    marginLeft: 36,
  },

  aboutTextArea: {
    // Multiline input field
    textAlignVertical: "top",
    minHeight: 120,
    color: "white",
    paddingTop: 12,
  },

  defaultInput: {
    // Default text input
    color: "#fff",
    height: 40,
  },

  buttonSection: {
    // Bottom action button section
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 48,
    marginBottom: 120,
    marginRight: 36,
    marginLeft: 36,
    padding: 18,
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: 12,
  },

  singleButton: {
    // Single full-width button
    backgroundColor: "#252525",
    width: "auto",
    marginBottom: 12,
  },

  dualButtonRow: {
    // Row for paired action buttons
    flexDirection: "row",
    justifyContent: "space-between",
    width: "auto",
    flex: 1,
  },

  dualButton1: {
    // Primary action button
    backgroundColor: globalStyles.colors.colorPrimary600,
    flex: 1,
    minWidth: 60,
    width: "auto",
    maxWidth: 150,
    marginRight: 4,
    color: "#fff",
  },

  dualButton2: {
    // Destructive action button
    backgroundColor: "#ff0000ff",
    flex: 1,
    width: "auto",
    minWidth: 60,
    maxWidth: 150,
    marginLeft: 4,
  },
});
