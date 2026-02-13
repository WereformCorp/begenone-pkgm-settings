import {
  ScrollView,
  Image,
  View,
  Text,
  Pressable,
} from "react-native";
import { CustomizedButton, InputField } from "@wereform/pkgm-shared";
import { UserSettingsLayoutStyles as S } from "../styles/UserSettingsLayoutStyles";
import { memo, useCallback, useState } from "react";

const DEFAULT_AVATAR =
  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg";

const INPUT_FIELDS = [
  { id: "Full Name" },
  { id: "Username" },
  { id: "About" },
];

function UserSettingsLayoutComponent({
  userName,
  profilePic,
  onPressChannelSettingsText,
  onPressUserSignoutFunction,
  onPressUserUpdateDetailsFunction,
}) {
  const [formData, setFormData] = useState({
    "Full Name": "",
    Username: "",
    About: "",
  });

  const handleChange = useCallback((fieldId, value) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  }, []);

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
        <Text style={S.userName}>{userName || "User"}</Text>
        <Pressable
          onPress={onPressChannelSettingsText}
          style={S.channelSettingsWrap}
        >
          <Text style={S.channelSettingsText}>Channel Settings</Text>
        </Pressable>
      </View>

      <View style={S.formSection}>
        <Text style={S.sectionHeading}>ACCOUNT</Text>
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
            label="Save"
            textColor="#fff"
            fontWeight="600"
            style={[S.dualButton, S.saveButton]}
            onPress={() => onPressUserUpdateDetailsFunction(formData)}
          />
          <CustomizedButton
            label="Logout"
            textColor="#fff"
            fontWeight="600"
            style={[S.dualButton, S.logoutButton]}
            onPress={onPressUserSignoutFunction}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export const UserSettingsLayout = memo(UserSettingsLayoutComponent);
