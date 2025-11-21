import {
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

import { CustomizedButton, InputField } from "@begenone/pkgm-shared";
import { UserSettingsLayoutStyles } from "../styles/UserSettingsLayoutStyles";
import { Platform } from "react-native";
import { useState } from "react";

export function UserSettingsLayout({
  userName,
  profilePic,
  onPressChannelSettingsText,
  onPressUserSignoutFunction,
  onPressUserUpdateDetailsFunction,
}) {
  const inputFields = [
    { id: "Full Name" },
    { id: "Username" },
    { id: "About" },
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

  return (
    <ScrollView
      style={UserSettingsLayoutStyles.container}
      contentContainerStyle={{
        justifyContent: "space-between", // keeps top/middle/bottom aligned
      }}
    >
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
          <TouchableOpacity onPress={onPressChannelSettingsText}>
            {/* <Text style={UserSettingsLayoutStyles.channelSettingsText}>
              {"Channel Settings —>"}
            </Text> */}
          </TouchableOpacity>
        </View>
      </View>

      <View style={UserSettingsLayoutStyles.inputFieldsContainer}>
        <Text style={UserSettingsLayoutStyles.headingText}>User Settings</Text>
        {/* {inputFields.map(inputField => (
          <InputField
            key={inputField.id}
            inputWrapper={UserSettingsLayoutStyles.inputWrapper}
            inputStyle={
              (inputField.id.toLowerCase() === "about" &&
                UserSettingsLayoutStyles.aboutTextArea) ||
              UserSettingsLayoutStyles.defaultInput
            }
            placeholder={inputField.id}
            value={formData[inputField.id]} // controlled value
            onChangeText={text => handleChange(inputField.id, text)} // dynamic handler
            multiline={inputField.id.toLowerCase() === "about"}
          />
        ))} */}

        {/* <InputField
          inputWrapper={UserSettingsLayoutStyles.inputWrapper}
          multiline={true}
          inputStyle={UserSettingsLayoutStyles.aboutTextArea}
          placeholder={"About"}
        /> */}
      </View>

      <View style={UserSettingsLayoutStyles.buttonSection}>
        {/* <CustomizedButton
          label={"Upgrade"}
          textColor="#ff6600"
          style={UserSettingsLayoutStyles.singleButton}
        /> */}
        <View style={UserSettingsLayoutStyles.dualButtonRow}>
          <CustomizedButton
            label={"Save"}
            textColor="#fff"
            fontWeight={"600"}
            style={UserSettingsLayoutStyles.dualButton1}
            onPress={() => onPressUserUpdateDetailsFunction(formData)}
          />
          <CustomizedButton
            label={"Logout"}
            textColor="#fff"
            fontWeight={"600"}
            style={UserSettingsLayoutStyles.dualButton2}
            onPress={onPressUserSignoutFunction}
          />
        </View>
      </View>
    </ScrollView>
  );
}
