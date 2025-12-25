import { VideoCardLayout } from "@wereform/pkgm-video";
import { ScrollView, Text } from "react-native";
import { GSOLStyles } from "../styles/GSOLStyles";

export function HistoryContainer({
  timeAgo,
  viewsText,
  titleText,
  userNameText,
  contentThumbUrl,
  channelLogo,
}) {
  return (
    <>
      <Text style={GSOLStyles.historyText}>History</Text>
      <ScrollView horizontal={true} style={GSOLStyles.videoCardLayoutContainer}>
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
      </ScrollView>
    </>
  );
}
