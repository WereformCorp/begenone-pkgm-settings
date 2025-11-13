import { CustomizedButton } from "@begenone/pkgm-shared";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { VideoCardLayout } from "../../../begenone-pkgm-video";
import { GSOLStyles } from "../styles/GSOLStyles";
import { Ionicons } from "@expo/vector-icons";

export function GeneralSettingsOverviewLayout({ VideoCard }) {
  return (
    <ScrollView
      // bounces={true}
      // alwaysBounceVertical={true}
      // overScrollMode="always"
      style={GSOLStyles.container}
    >
      <View style={GSOLStyles.secondaryContainer}>
        <View style={GSOLStyles.historyContainer}>
          {/* History Container */}
          <Text style={GSOLStyles.historyText}>History</Text>
          <ScrollView
            horizontal={true}
            style={GSOLStyles.videoCardLayoutContainer}
          >
            {VideoCard && VideoCard}
          </ScrollView>
        </View>

        <View style={GSOLStyles.generalSettings}>
          <Text style={GSOLStyles.generalText}>General</Text>

          <View style={GSOLStyles.settingsButtonContainer}>
            <CustomizedButton
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
            />
            <CustomizedButton
              label={"User Settings"}
              style={customStyles.customButton}
              customIcon={<Ionicons name="person" size={18} color="#fff" />}
            />
            <CustomizedButton
              label={"Channel Settings"}
              style={customStyles.customButton}
              customIcon={<Ionicons name="people" size={18} color="#fff" />}
            />
            <CustomizedButton
              label={"Pricings"}
              style={customStyles.customButton}
              customIcon={<Ionicons name="cash" size={18} color="#fff" />}
            />
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
