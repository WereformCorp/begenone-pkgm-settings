import { StyleSheet } from "react-native";

/* Video upload and selection layout styles */
export const VUSLStyles = StyleSheet.create({
  container: {
    // Bottom spacing for fixed UI
    marginBottom: 120,
  },

  VUSLStyles: {
    // Reserved placeholder
  },

  inputsContainer: {
    // Input fields wrapper
    marginRight: 24,
    marginLeft: 24,
    marginTop: 24,
  },

  inputFields: {
    // Input field container
    width: "auto",
    backgroundColor: "#252525",
    justifyContent: "space-between",
    marginTop: 18,
    paddingRight: 18,
  },

  postWireTextContainer: {
    // Post action alignment container
    width: "auto",
    alignItems: "flex-end",
  },

  videoPicker: {
    // Video picker container
    backgroundColor: "#262626",
    borderRadius: 12,
    marginTop: 16,
    height: "auto",
    width: "auto",
    justifyContent: "center",
  },

  thumbContainer: {
    // Video thumbnail preview container
    width: "100%",
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  videoContainer: {
    // Compact video preview container
    width: "100%",
    height: 80,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    // Background preview image
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.4,
    backgroundColor: "#000",
  },

  iconCloud: {
    // Centered cloud icon overlay
    position: "absolute",
    alignSelf: "center",
  },

  icon: {
    // Decorative overlay icon
    position: "absolute",
    alignSelf: "flex-end",
    paddingTop: 24,
    paddingRight: 24,
    height: "100%",
    opacity: 0.3,
  },

  iconVideo: {
    // Video icon modifier
    height: "auto",
    paddingTop: 0,
  },
});
