import { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import { UserSettingsLayoutStyles } from "../styles/UserSettingsLayoutStyles";
import { VUSLStyles } from "../styles/VUSLStyles";
import * as ImagePicker from "expo-image-picker";
import * as VideoThumbnails from "expo-video-thumbnails";
import { Ionicons } from "@expo/vector-icons";
import { CustomizedButton, DropDown, InputField } from "@begenone/pkgm-shared";

/**
 * VideoUploadSettingsLayout
 *
 * UI component that allows users to select a video from their device,
 * generates a thumbnail for display, and renders the selected preview.
 * Supports both iOS and Android behavior by using platform-specific
 * thumbnail handling.
 */

export function VideoUploadSettingsLayout({ profilePic, userName }) {
  // Local state for raw video URI (Android-only used in UI)
  const [imageAndroid, setImageAndroid] = useState(null);

  // Local state for generated thumbnail image (iOS + Android)
  const [videoThumbnail, setThumbnailIOS] = useState(null);

  const [imageThumb, setImageThumb] = useState(null);

  /**
   * generateThumbnail
   *
   * Creates a still-frame thumbnail from a video URI using expo-video-thumbnails.
   * Returns the thumbnail URI if successful, or null if thumbnail extraction fails.
   *
   * @param {string} uri - The local file URI of the selected video.
   * @returns {Promise<string|null>} - Generated thumbnail URI.
   */
  const generateThumbnail = async uri => {
    try {
      const { uri: thumbUri } = await VideoThumbnails.getThumbnailAsync(uri, {
        time: 1000, // Extract frame at 1 second into the video
      });
      return thumbUri;
    } catch (e) {
      console.error("Thumbnail generation failed:", e);
      return null;
    }
  };

  /**
   * pickVideo
   *
   * Opens the user's media library and allows them to select a video file.
   * After selection:
   *  - Saves the raw video URI (Android uses this directly)
   *  - Generates a thumbnail (required for iOS UI preview)
   */
  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["videos"], // Only allow video selection
      allowsEditing: true,
      aspect: [4, 3], // Crop ratio if editing is used
      quality: 1,
    });

    console.log("Picker result:", result);

    // Exit if user cancels the selection
    if (!result.canceled) {
      const videoUri = result.assets[0].uri;

      // Save raw video URI
      setImageAndroid(videoUri);

      // Generate & store thumbnail
      const thumbUri = await generateThumbnail(videoUri);
      setThumbnailIOS(thumbUri);
    }
  };

  const pickThumb = async () => {
    let imageResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"], // Only allow video selection
      allowsEditing: true,
      aspect: [16, 9], // Crop ratio if editing is used
      quality: 1,
    });

    console.log("Picker result:", imageResult);

    // Exit if user cancels the selection
    if (!imageResult.canceled) {
      const imageUri = imageResult.assets[0].uri;

      // Save raw video URI
      setImageThumb(imageUri);
    }
  };

  /**
   * displaySource
   *
   * Platform-specific logic:
   *  - iOS: always uses generated thumbnail (Image cannot display videos directly)
   *  - Android: raw video URI may return a preview, but thumbnail is present anyway
   */
  const displayVideoSource =
    Platform.OS === "ios" ? videoThumbnail : imageAndroid;

  return (
    <ScrollView>
      <View style={VUSLStyles.container}>
        {/* --------------------- Profile Header Section --------------------- */}
        <View style={UserSettingsLayoutStyles.profileSection}>
          <Image
            source={{
              uri:
                profilePic ||
                "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
            }}
            style={UserSettingsLayoutStyles.userImage}
          />

          <View style={UserSettingsLayoutStyles.userInfo}>
            <Text style={UserSettingsLayoutStyles.userName}>
              {userName || "Default Username"}
            </Text>

            {/* Link to user's public-facing channel page */}
            <TouchableOpacity
              onPress={() => Linking.openURL("https://begenone.com")}
            >
              <Text style={UserSettingsLayoutStyles.channelSettingsText}>
                View Channel
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* -------------------------- Upload Section -------------------------- */}
        <View style={VUSLStyles.inputsContainer}>
          <View style={VUSLStyles.postWireTextContainer}>
            <Text style={{ color: "#fff" }}>
              Post a <Text style={{ color: "#ff6600" }}>Wire</Text>
            </Text>
          </View>

          <TouchableOpacity
            onPress={pickThumb} // Tap to open picker or re-pick video
            style={VUSLStyles.videoPicker}
          >
            {/* Thumbnail Container (Image behind + Icon overlay) */}
            <View style={VUSLStyles.thumbContainer}>
              {/* Render thumbnail only if available */}
              {imageThumb && (
                <Image
                  source={{ uri: imageThumb }}
                  style={VUSLStyles.image}
                  resizeMode="cover"
                />
              )}

              {/* Always show icon — appears above thumbnail or alone if no image */}
              <Ionicons
                name="cloud-upload"
                size={32}
                color="#fff"
                style={VUSLStyles.iconCloud}
              />

              <Ionicons
                name="image"
                size={24}
                color="#fff"
                style={VUSLStyles.icon}
              />
            </View>
          </TouchableOpacity>

          {/* Upload Button / Thumbnail Preview Wrapper */}
          <TouchableOpacity
            onPress={pickVideo} // Tap to open picker or re-pick video
            style={VUSLStyles.videoPicker}
          >
            {/* Thumbnail Container (Image behind + Icon overlay) */}
            <View style={VUSLStyles.videoContainer}>
              {/* Render thumbnail only if available */}
              {displayVideoSource && (
                <Image
                  source={{ uri: displayVideoSource }}
                  style={VUSLStyles.image}
                />
              )}

              {/* Always show icon — appears above thumbnail or alone if no image */}
              <Ionicons
                name="videocam"
                size={24}
                color="#fff"
                style={[VUSLStyles.icon, VUSLStyles.iconVideo]}
              />

              <Ionicons
                name="cloud-upload"
                size={24}
                color="#fff"
                style={VUSLStyles.iconCloud}
              />
            </View>
          </TouchableOpacity>

          <InputField
            placeholder={"Enter Title"}
            inputWrapper={VUSLStyles.inputFields}
          />
          <InputField
            placeholder={"Enter Description"}
            inputWrapper={VUSLStyles.inputFields}
          />
          <DropDown
            styles={{ marginLeft: 24, marginRight: 24, marginTop: 18 }}
            selectText={"Select Age Group"}
            data={[
              { key: 1, label: "Under 14 of age" },
              { key: 2, label: "Above 14 of age" },
            ]}
          />

          <DropDown
            styles={{ marginLeft: 24, marginRight: 24, marginTop: 18 }}
            selectText={"Comments"}
            data={[
              { key: 1, label: "Turn — ON" },
              { key: 2, label: "Turn — OFF" },
            ]}
          />

          <View
            style={{
              flexDirection: "row",
              width: "auto",
              justifyContent: "space-between",

              marginTop: 60,
              marginLeft: 24,
              marginRight: 24,
            }}
          >
            <CustomizedButton
              label={"Post Video"}
              style={{
                backgroundColor: "#ff6000",
                marginRight: 6,
              }}
              textColor={"#fff"}
            />
            <CustomizedButton
              label={"Schedule"}
              style={{
                backgroundColor: "#7f7f7f",
                marginLeft: 6,
              }}
              textColor={"#fff"}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
