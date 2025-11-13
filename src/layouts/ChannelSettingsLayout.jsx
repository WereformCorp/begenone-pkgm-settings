import {
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

import { CustomizedButton, DropDown, InputField } from "@begenone/pkgm-shared";
import { ChannelSettingsLayoutStyles } from "../styles/ChannelSettingsLayoutStyles";
import { Platform } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export function ChannelSettingsLayout({ userName, profilePic }) {
  const inputFields = [
    { id: "Channel Name" },
    { id: "Channel Id" },
    { id: "About" },
  ];

  const navigationButtons = [
    { id: "All Videos" },
    { id: "Recent Subscribers" },
    { id: "Analytics" },
  ];

  // ✅ Use one state object to hold all input values
  const [formData, setFormData] = useState({
    "Full Name": "",
    Username: "",
    About: "",
  });

  const handleChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value,
    }));

    console.log(`Changed [${fieldId}]:`, value);
  };

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
          <TouchableOpacity
            onPress={() => Linking.openURL("https://begenone.com")}
          >
            <Text style={ChannelSettingsLayoutStyles.channelSettingsText}>
              {"User Settings —>"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={ChannelSettingsLayoutStyles.inputFieldsContainer}>
        {inputFields.map(inputField => (
          <InputField
            key={inputField.id}
            inputWrapper={ChannelSettingsLayoutStyles.inputWrapper}
            inputStyle={
              inputField.id.toLowerCase() === "about" &&
              ChannelSettingsLayoutStyles.aboutTextArea
            }
            placeholder={inputField.id}
            value={formData[inputField.id]} // controlled value
            onChangeText={text => handleChange(inputField.id, text)} // dynamic handler
            multiline={inputField.id.toLowerCase() === "about"}
          />
        ))}
      </View>

      <View>
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
      </View>

      <View style={ChannelSettingsLayoutStyles.buttonSection}>
        <CustomizedButton
          label={"Upgrade"}
          textColor="#ff6600"
          style={ChannelSettingsLayoutStyles.singleButton}
        />
        <View style={ChannelSettingsLayoutStyles.dualButtonRow}>
          <CustomizedButton
            label={"Save"}
            textColor="#fff"
            fontWeight={"600"}
            style={ChannelSettingsLayoutStyles.dualButton1}
          />
          <CustomizedButton
            label={"Schedule"}
            textColor="#fff"
            fontWeight={"600"}
            style={ChannelSettingsLayoutStyles.dualButton2}
          />
        </View>
      </View>
    </ScrollView>
  );
}
