import { useState } from "react";
import {
  Image,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { VUSLStyles as S } from "../styles/VUSLStyles";
import * as ImagePicker from "expo-image-picker";
import * as VideoThumbnails from "expo-video-thumbnails";
import { Ionicons } from "@expo/vector-icons";
import { CustomizedButton, InputField } from "@wereform/pkgm-shared";

/**
 * VideoUploadSettingsLayout
 *
 * UI component that allows users to select a video from their device,
 * generates a thumbnail for display, and renders the selected preview.
 * Supports both iOS and Android behavior by using platform-specific
 * thumbnail handling.
 */

export function VideoUploadSettingsLayout({
  profilePic,
  userName,
  onPressWireUploadScreen,
  onPressVideoUploadAsync,
  postVideo,
}) {
  const [videoAssets, setVideoAssets] = useState(null);
  const [imageAndroid, setImageAndroid] = useState(null);
  const [videoThumbnail, setThumbnailIOS] = useState(null);
  const [imageThumb, setImageThumb] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const generateThumbnail = async uri => {
    try {
      const { uri: thumbUri } = await VideoThumbnails.getThumbnailAsync(uri, {
        time: 1000,
      });
      return thumbUri;
    } catch (e) {
      console.error("Thumbnail generation failed:", e);
      return null;
    }
  };

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const videoAsset = result.assets[0];
      const videoUri = videoAsset.uri;

      // Set the maximum video size to 100MB
      if (videoAsset.fileSize > 100 * 1024 * 1024) {
        alert("Video too large for upload. Please select a video under 100MB.");
        return;
      }

      setImageAndroid(videoUri);
      const thumbUri = await generateThumbnail(videoUri);
      setThumbnailIOS(thumbUri);
      setVideoAssets(result.assets);
    }
  };

  const pickThumb = async () => {
    let imageResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!imageResult.canceled) {
      setImageThumb(imageResult.assets[0].uri);
    }
  };

  const displayVideoSource =
    Platform.OS === "ios" ? videoThumbnail : imageAndroid;

  return (
    <ScrollView style={S.scroll}>
      <View style={S.container}>
        {/* profile strip */}
        <View style={S.profileSection}>
          <View style={S.avatarWrapper}>
            <Image
              source={{
                uri:
                  profilePic ||
                  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
              }}
              style={S.avatarImage}
              resizeMode="cover"
            />
          </View>
          <View style={S.profileInfo}>
            <Text style={S.profileName}>{userName || "Default Username"}</Text>
            <Pressable onPress={() => Linking.openURL("https://begenone.com")}>
              <Text style={S.profileLink}>View Channel</Text>
            </Pressable>
          </View>
        </View>

        {/* form */}
        <View style={S.formArea}>
          {/* heading */}
          <View style={S.headingRow}>
            <Text style={S.heading}>
              Create <Text style={S.headingAccent}>Video</Text>
            </Text>
            <Pressable
              onPress={onPressWireUploadScreen}
              style={({ pressed }) => [
                S.wireLink,
                { opacity: pressed ? 0.8 : 1 },
              ]}
            >
              <Text style={S.wireLinkText}>
                Post a <Text style={S.wireLinkAccent}>Wire</Text>
              </Text>
            </Pressable>
          </View>

          {/* thumbnail picker */}
          <Text style={S.sectionLabel}>Thumbnail</Text>
          <Pressable onPress={pickThumb}>
            <View style={[S.pickerCard]}>
              <View style={S.thumbPicker}>
                {imageThumb && (
                  <Image
                    source={{ uri: imageThumb }}
                    style={S.pickerPreview}
                    resizeMode="cover"
                  />
                )}
                <View style={S.pickerIconRow}>
                  <Ionicons
                    name="image-outline"
                    size={20}
                    color="rgba(255,255,255,0.5)"
                  />
                  <Text style={S.pickerLabel}>
                    {imageThumb ? "Change thumbnail" : "Upload thumbnail"}
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>

          {/* video picker */}
          <Text style={S.sectionLabel}>Video</Text>
          <Pressable onPress={pickVideo}>
            <View style={[S.pickerCard]}>
              <View style={S.videoPicker}>
                {displayVideoSource && (
                  <Image
                    source={{ uri: displayVideoSource }}
                    style={S.pickerPreview}
                    resizeMode="cover"
                  />
                )}
                <View style={S.pickerIconRow}>
                  <Ionicons
                    name="videocam-outline"
                    size={20}
                    color="rgba(255,255,255,0.5)"
                  />
                  <Text style={S.pickerLabel}>
                    {displayVideoSource ? "Change video" : "Select video"}
                  </Text>
                </View>
                {displayVideoSource && (
                  <View style={S.pickerBadge}>
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  </View>
                )}
              </View>
            </View>
          </Pressable>

          {/* title */}
          <Text style={S.sectionLabel}>Details</Text>
          <View style={S.inputOuter}>
            <InputField
              placeholder="Enter Title"
              inputWrapper={S.inputWrapper}
              inputStyle={S.titleInput}
              onChangeText={text => setTitle(text)}
            />
            <View style={S.inputIconTopRight}>
              <Ionicons
                name="reader-outline"
                size={18}
                color="rgba(255,255,255,0.3)"
              />
            </View>
          </View>

          {/* description */}
          <View style={S.inputOuter}>
            <InputField
              placeholder="Enter Description"
              inputWrapper={S.inputWrapper}
              inputStyle={S.descInput}
              multiline
              onChangeText={text => setDescription(text)}
            />
            <View style={S.inputIconTopRight}>
              <Ionicons
                name="reader-outline"
                size={18}
                color="rgba(255,255,255,0.3)"
              />
            </View>
          </View>

          {/* actions */}
          <View style={S.actionRow}>
            <CustomizedButton
              label={postVideo === true ? "Posting.." : "Post Video"}
              style={S.postButton}
              textColor="#fff"
              onPress={() => {
                if (postVideo) return;
                onPressVideoUploadAsync({
                  title,
                  description,
                  videoFile: videoAssets?.[0] || null,
                  videoUri: imageAndroid,
                  thumbUri: imageThumb,
                  generatedThumb: videoThumbnail,
                });
              }}
            />
            <CustomizedButton
              label="Schedule"
              style={S.scheduleButton}
              isDisabled
              textColor="rgba(255,255,255,0.4)"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
