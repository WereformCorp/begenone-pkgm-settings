/**
 * HistoryContainer
 *
 * Horizontal history rail for previously viewed content.
 * Designed for compact, scrollable display using VideoCardLayout.
 *
 * Responsibilities:
 * - Render a "History" section header
 * - Display video cards in a horizontal ScrollView
 * - Adapt VideoCardLayout for history use by hiding non-essential metadata
 *
 * Props:
 * - timeAgo: Relative timestamp (e.g. "2h ago")
 * - viewsText: View count label
 * - titleText: Video title
 * - userNameText: Channel or creator name
 * - contentThumbUrl: Thumbnail image URL
 * - channelLogo: Channel logo image URL
 *
 * Notes:
 * - Styling overrides intentionally suppress metadata like user info and views
 * - Component is presentational only (no state, no side effects)
 * - VideoCardLayout is reused in a constrained, history-specific layout
 */

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
      {/* Section heading */}
      <Text style={GSOLStyles.historyText}>History</Text>

      {/* Horizontal scroll container */}
      <ScrollView horizontal={true} style={GSOLStyles.videoCardLayoutContainer}>
        <VideoCardLayout
          timeAgo={timeAgo}
          viewsText={viewsText}
          titleText={titleText}
          userNameText={userNameText}
          contentThumbUrl={contentThumbUrl}
          channelLogo={channelLogo}
          /**
           * Style overrides for history context
           * - Compact card width
           * - Hide user, date, and view metadata
           * - Emphasize thumbnail and title only
           */
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
