import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
  StyleSheet,
  Platform,
} from "react-native";
import { UserSettingsLayoutStyles } from "../styles/UserSettingsLayoutStyles";
import { VUSLStyles } from "../styles/VUSLStyles";
import * as ImagePicker from "expo-image-picker";
import * as VideoThumbnails from "expo-video-thumbnails";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export function VideoUploadSettingsLayout({ profilePic, userName }) {
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const generateThumbnail = async uri => {
    try {
      const { uri: thumbUri } = await VideoThumbnails.getThumbnailAsync(uri, {
        time: 1000,
      });
      return thumbUri;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const videoUri = result.assets[0].uri;
      const thumbUri = await generateThumbnail(videoUri);
      setThumbnail(thumbUri);
    }
  };

  const displaySource = Platform.OS === "ios" ? thumbnail : image;

  return (
    <View style={VUSLStyles.container}>
      {/* Profile Section */}
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
          <TouchableOpacity
            onPress={() => Linking.openURL("https://begenone.com")}
          >
            <Text style={UserSettingsLayoutStyles.channelSettingsText}>
              View Channel
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Upload Section */}
      <View style={VUSLStyles.inputsContainer}>
        <Text style={{ color: "#fff" }}>
          Post a <Text style={{ color: "#ff6600" }}>Wire</Text>
        </Text>

        <TouchableOpacity
          onPress={pickImage}
          style={{
            backgroundColor: "#262626",
            // padding: 16,
            borderRadius: 12,
            marginTop: 16,
            height: "auto",
            width: "auto",
            marginRight: 24,
            marginLeft: 24,
            justifyContent: "center",
          }}
        >
          <View style={styles.thumbContainer}>
            {thumbnail && (
              <Image source={{ uri: thumbnail }} style={styles.image} />
            )}

            {/* Icon always centered */}
            <Ionicons
              name="cloud-upload"
              size={40}
              color="#fff"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbContainer: {
    width: "100%",
    height: 200,
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

  icon: {
    position: "absolute",
    alignSelf: "center",
  },
});
