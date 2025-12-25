import { CustomizedButton } from "@wereform/pkgm-shared";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { VideoCardLayout } from "@wereform/pkgm-video";
import { GSOLStyles } from "../styles/GSOLStyles";
import { Ionicons } from "@expo/vector-icons";

export function GeneralSettingsOverviewLayout({
  timeAgo,
  viewsText,
  titleText,
  userNameText,
  contentThumbUrl,
  channelLogo,
  onPressUserSettings,
  onPressChannelSettings,
  onPressPricings,
}) {
  return (
    <ScrollView style={GSOLStyles.container}>
      <View style={GSOLStyles.secondaryContainer}>
        <View style={GSOLStyles.historyContainer}>
          {/* <Text style={GSOLStyles.historyText}>History</Text> */}
          {/* <ScrollView
            horizontal={true}
            style={GSOLStyles.videoCardLayoutContainer}
          >
            <VideoCardLayout
              timeAgo={timeAgo}
              viewsText={viewsText}
              titleText={titleText}
              userNameText={userNameText}
              contentThumbUrl={contentThumbUrl}
              channelLogo={channelLogo}
              //
              //
              //
              // STYLE SETTINGS HERE!!!
              containerStyles={{ width: 200, marginBottom: 20 }}
              dateViewsContainerStyle={{ display: "none" }}
              userImageStyles={{ display: "none" }}
              titleTextStyles={{ fontSize: 16, lineHeight: 22 }}
              userNameTextStyles={{ display: "none" }}
              customMetaDataStyles={{}}
              thumbnailImageStyles={{}}
              titleNameContainerStyles={{ paddingLeft: 0 }}
            />
          </ScrollView> */}
        </View>

        <View style={GSOLStyles.generalSettings}>
          <Text style={GSOLStyles.generalText}>General</Text>

          <View style={GSOLStyles.settingsButtonContainer}>
            {/* <CustomizedButton
              label={"Likes"}
              style={customStyles.customButton}
              customIcon={<Ionicons name="thumbs-up" size={18} color="#fff" />}
            />
            <CustomizedButton
              label={"Dislikes"}
              style={customStyles.customButton}
              customIcon={
                <Ionicons name="thumbs-down" size={18} color="#fff" />
              }
            /> */}
            <CustomizedButton
              label={"User Settings"}
              style={customStyles.customButton}
              customIcon={<Ionicons name="person" size={18} color="#fff" />}
              onPress={onPressUserSettings}
            />
            <CustomizedButton
              label={"Channel Settings"}
              style={customStyles.customButton}
              customIcon={<Ionicons name="people" size={18} color="#fff" />}
              onPress={onPressChannelSettings}
            />
            {/* <CustomizedButton
              label={"Pricings"}
              style={customStyles.customButton}
              customIcon={<Ionicons name="cash" size={18} color="#fff" />}
              onPress={onPressPricings}
            /> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const customStyles = StyleSheet.create({
  customButton: {
    width: "auto",
    backgroundColor: "#252525",
    borderRadius: 30,
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 6,
    marginBottom: 6,
  },
});
