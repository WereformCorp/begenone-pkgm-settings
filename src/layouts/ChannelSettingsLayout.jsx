import {
  ScrollView,
  Image,
  View,
  Text,
  Pressable,
} from "react-native";
import { CustomizedButton, InputField } from "@wereform/pkgm-shared";
import { ChannelSettingsLayoutStyles as S } from "../styles/ChannelSettingsLayoutStyles";
import { memo, useCallback, useState } from "react";

const DEFAULT_AVATAR =
  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg";

const INPUT_FIELDS = [
  { id: "name" },
  { id: "username" },
  { id: "about" },
];

function ChannelSettingsLayoutComponent({
  userName,
  profilePic,
  onPressUserSettingsText,
  handleChannelUpdateCreate,
  channelExist,
  showHistory: _showHistory,
}) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    about: "",
  });

  const handleChange = useCallback((fieldId, value) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  }, []);

  const handleChannelUpdate = useCallback(() => {
    handleChannelUpdateCreate({
      name: formData.name,
      username: formData.username,
      about: formData.about,
    });
  }, [formData, handleChannelUpdateCreate]);

  return (
    <ScrollView
      style={S.scroll}
      contentContainerStyle={S.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={S.profileSection}>
        <View style={S.avatarWrapper}>
          <Image
            source={{ uri: profilePic || DEFAULT_AVATAR }}
            style={S.avatar}
            resizeMode="cover"
          />
        </View>
        <Text style={S.userName}>{userName || "Channel"}</Text>
        <Pressable
          onPress={onPressUserSettingsText}
          style={S.userSettingsWrap}
        >
          <Text style={S.userSettingsText}>User Settings</Text>
        </Pressable>
      </View>

      <View style={S.formSection}>
        <Text style={S.sectionHeading}>CHANNEL</Text>
        <View style={S.formCard}>
          {INPUT_FIELDS.map((field, idx) => (
            <InputField
              key={field.id}
              inputWrapper={[
                S.inputWrapper,
                idx === INPUT_FIELDS.length - 1 && S.inputWrapperLast,
              ]}
              inputStyle={
                field.id.toLowerCase() === "about"
                  ? S.aboutInput
                  : S.defaultInput
              }
              placeholder={field.id}
              value={formData[field.id]}
              onChangeText={text => handleChange(field.id, text)}
              multiline={field.id.toLowerCase() === "about"}
            />
          ))}
        </View>
      </View>

      <View style={S.actionSection}>
        <CustomizedButton
          label="Upgrade"
          textColor="#ff5e00"
          style={S.upgradeButton}
          onPress={() => {}}
        />
        <View style={S.dualButtonRow}>
          <CustomizedButton
            label={channelExist ? "Save" : "Create"}
            textColor="#fff"
            fontWeight="600"
            style={[S.dualButton, S.saveButton]}
            onPress={handleChannelUpdate}
          />
          {channelExist && (
            <CustomizedButton
              label="Delete"
              textColor="#fff"
              fontWeight="600"
              style={[S.dualButton, S.deleteButton]}
              onPress={() => {}}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

export const ChannelSettingsLayout = memo(ChannelSettingsLayoutComponent);
