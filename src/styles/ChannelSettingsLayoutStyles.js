import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/* Channel settings screen layout styles */
export const ChannelSettingsLayoutStyles = StyleSheet.create({
  container: {
    // Root screen container
    flex: 1,
    paddingVertical: 24,
  },

  profileSection: {
    // Channel profile header section
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
    // Channel avatar image
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
  },

  userInfo: {
    // Username and settings info stack
    flexDirection: "column",
    justifyContent: "center",
  },

  userName: {
    // Channel display name
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  channelSettingsText: {
    // Channel settings helper text
    color: "#ff6600",
    marginTop: 4,
  },

  inputFieldsContainer: {
    // Wrapper for editable fields
    flexGrow: 1,
    justifyContent: "flex-start",
  },

  headingText: {
    // Section heading text
    fontSize: 24,
    color: "#fff",
    paddingLeft: 36,
    marginTop: 24,
    fontWeight: "800",
  },

  inputWrapper: {
    // Input field container
    backgroundColor: "#202020",
    marginTop: 18,
    width: "auto",
    marginRight: 36,
    marginLeft: 36,
  },

  aboutTextArea: {
    // Multiline about input
    textAlignVertical: "top",
    minHeight: 120,
    color: "white",
    paddingTop: 12,
  },

  inputField: {
    // Single-line input field
    minHeight: 40,
    color: "white",
  },

  buttonSection: {
    // Primary action button section
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 84,
    marginBottom: 120,
    marginRight: 36,
    marginLeft: 36,
    padding: 18,
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: 12,
  },

  navigationBtns: {
    // Secondary navigation buttons container
    width: "auto",
    marginRight: 36,
    marginLeft: 36,
    backgroundColor: globalStyles.colors.colorPrimary200,
    marginTop: 12,
    alignItems: "flex-start",
    paddingLeft: 24,
  },

  singleButton: {
    // Single full-width action button
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
    // Destructive / secondary action button
    backgroundColor: "rgba(255, 22, 22, 1)",
    flex: 1,
    width: "auto",
    minWidth: 60,
    maxWidth: 150,
    marginLeft: 4,
  },
});
