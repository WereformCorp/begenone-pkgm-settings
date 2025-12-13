import {
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

import { CustomizedButton, DropDown, InputField } from "@wereform/pkgm-shared";
import { ChannelSettingsLayoutStyles } from "../styles/ChannelSettingsLayoutStyles";
import { Platform } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export function ChannelSettingsLayout({
  userName,
  profilePic,
  onPressUserSettingsText,
  handleChannelUpdateCreate,
  channelExist,
}) {
  const inputFields = [{ id: "name" }, { id: "username" }, { id: "about" }];

  const navigationButtons = [
    { id: "All Videos" },
    { id: "Recent Subscribers" },
    { id: "Analytics" },
  ];

  // ✅ Use one state object to hold all input values
  const [formData, setFormData] = useState({});

  // console.log(`Form Data from Channel Settings Layout: `, formData);

  const handleChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value,
    }));

    console.log(`Changed [${fieldId}]:`, value);
  };

  function handleChannelUpdate() {
    console.log(`Formdata: `, formData);

    handleChannelUpdateCreate({
      name: formData.name,
      username: formData.username,
      about: formData.about,
    });
  }

  const categoriesData = [
    {
      key: "turn-on",
      label: "Comments — On ",
    },
    {
      key: "turn-off",
      label: "Comments — Off ",
    },
  ];

  return (
    <ScrollView
      style={ChannelSettingsLayoutStyles.container}
      contentContainerStyle={{
        justifyContent: "space-between", // keeps top/middle/bottom aligned
      }}
    >
      <View style={ChannelSettingsLayoutStyles.profileSection}>
        <Image
          source={{
            uri:
              profilePic ||
              "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
          }}
          style={ChannelSettingsLayoutStyles.userImage}
        />
        <View style={ChannelSettingsLayoutStyles.userInfo}>
          <Text style={ChannelSettingsLayoutStyles.userName}>
            {userName || "Default Channel Name"}
          </Text>
          <TouchableOpacity onPress={onPressUserSettingsText}>
            <Text style={ChannelSettingsLayoutStyles.channelSettingsText}>
              {"User Settings —>"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={ChannelSettingsLayoutStyles.inputFieldsContainer}>
        <Text style={ChannelSettingsLayoutStyles.headingText}>
          Channel Settings
        </Text>
        {inputFields.map(inputField => (
          <InputField
            key={inputField.id}
            inputWrapper={ChannelSettingsLayoutStyles.inputWrapper}
            inputStyle={
              (inputField.id.toLowerCase() === "about" &&
                ChannelSettingsLayoutStyles.aboutTextArea) ||
              ChannelSettingsLayoutStyles.inputField
            }
            placeholder={inputField.id}
            value={formData[inputField.id]} // controlled value
            onChangeText={text => handleChange(inputField.id, text)} // dynamic handler
            multiline={inputField.id.toLowerCase() === "about"}
          />
        ))}
      </View>

      {/* <View>
        <DropDown
          styles={{ marginRight: 36, marginLeft: 36, marginTop: 24 }}
          data={categoriesData}
          selectText="Comments (Global)"
        />
        {navigationButtons.map(btn => (
          <CustomizedButton
            key={btn.id}
            label={`${btn.id}`}
            textColor="#fff"
            style={ChannelSettingsLayoutStyles.navigationBtns}
            customIcon={
              <Ionicons name="caret-forward" size={24} color="#fff" />
            }
          />
        ))}
      </View> */}

      <View style={ChannelSettingsLayoutStyles.buttonSection}>
        <CustomizedButton
          label={"Upgrade"}
          textColor="#ff6600"
          style={ChannelSettingsLayoutStyles.singleButton}
        />

        <View style={ChannelSettingsLayoutStyles.dualButtonRow}>
          <CustomizedButton
            label={channelExist ? "Save" : "Create"}
            textColor="#fff"
            fontWeight={"600"}
            style={[
              ChannelSettingsLayoutStyles.dualButton1,
              !channelExist && { maxWidth: "150px" },
            ]}
            onPress={handleChannelUpdate}
          />

          {channelExist && (
            <CustomizedButton
              label={"Delete"}
              textColor="white"
              fontWeight={"900"}
              style={ChannelSettingsLayoutStyles.dualButton2}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}
