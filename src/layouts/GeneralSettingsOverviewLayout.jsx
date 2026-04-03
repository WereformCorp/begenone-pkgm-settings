import { Pressable, ScrollView, Text, View } from "react-native";
import { GSOLStyles as S } from "../styles/GSOLStyles";
import { Ionicons } from "@expo/vector-icons";
import { HistoryContainer } from "../components/HistoryContainer";

/**
 * Settings hub: account, uploads, subscription (MFE settings overview parity).
 */

const SETTINGS_SECTIONS = [
  {
    title: "Account",
    items: [
      {
        key: "likes",
        label: "Likes",
        icon: "thumbs-up-outline",
        prop: "onPressLikes",
      },
      {
        key: "dislikes",
        label: "Dislikes",
        icon: "thumbs-down-outline",
        prop: "onPressDislikes",
      },
      {
        key: "user",
        label: "User Settings",
        icon: "person-outline",
        prop: "onPressUserSettings",
      },
      {
        key: "channel",
        label: "Channel Settings",
        icon: "people-outline",
        prop: "onPressChannelSettings",
      },
      {
        key: "myChannel",
        label: "My Channel",
        icon: "albums-outline",
        prop: "onPressMyChannel",
      },
    ],
  },
  {
    title: "Your uploads",
    items: [
      {
        key: "allVideos",
        label: "All Video Uploads",
        icon: "film-outline",
        prop: "onPressAllVideoUploads",
      },
      {
        key: "allWires",
        label: "All Wires Uploads",
        icon: "newspaper-outline",
        prop: "onPressAllWiresUploads",
      },
    ],
  },
  {
    title: "Subscription",
    items: [
      {
        key: "pricing",
        label: "Pricings",
        icon: "cash-outline",
        prop: "onPressPricings",
      },
    ],
  },
];

export function GeneralSettingsOverviewLayout({
  timeAgo,
  viewsText,
  titleText,
  userNameText,
  contentThumbUrl,
  channelLogo,
  onPressLikes,
  onPressDislikes,
  onPressUserSettings,
  onPressChannelSettings,
  onPressMyChannel,
  onPressAllVideoUploads,
  onPressAllWiresUploads,
  onPressPricings,
  showHistory,
}) {
  const handlers = {
    onPressLikes,
    onPressDislikes,
    onPressUserSettings,
    onPressChannelSettings,
    onPressMyChannel,
    onPressAllVideoUploads,
    onPressAllWiresUploads,
    onPressPricings,
  };

  return (
    <ScrollView style={S.scroll}>
      <View style={S.container}>
        {showHistory !== false && (
          <View style={S.historySection}>
            <Text style={S.historySectionLabel}>Recent</Text>
            <HistoryContainer
              timeAgo={timeAgo ?? "3 hours ago"}
              viewsText={viewsText ?? "18.4K"}
              titleText={
                titleText ??
                "Why Most Side Projects Die at Deployment (And How to Survive It)"
              }
              userNameText={userNameText ?? "Areesh Alam"}
              contentThumbUrl={
                contentThumbUrl ??
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
              }
              channelLogo={
                channelLogo ??
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80"
              }
            />
          </View>
        )}

        <View style={S.generalSection}>
          <Text style={S.heading}>General</Text>

          {SETTINGS_SECTIONS.map(section => (
            <View key={section.title} style={{ marginBottom: 22 }}>
              <Text style={S.sectionLabel}>{section.title}</Text>
              <View style={S.settingsCard}>
                {section.items.map((item, index) => {
                  const isLast = index === section.items.length - 1;
                  const onPress = item.prop ? handlers[item.prop] : undefined;

                  return (
                    <Pressable
                      key={item.key}
                      onPress={onPress}
                      disabled={!onPress}
                      style={({ pressed }) => [
                        S.settingRow,
                        !isLast && S.settingRowBorder,
                        { opacity: pressed && onPress ? 0.75 : 1 },
                      ]}
                    >
                      <View style={S.settingIcon}>
                        <Ionicons name={item.icon} size={18} color="#fff" />
                      </View>
                      <Text style={S.settingLabel}>{item.label}</Text>
                      {onPress ? (
                        <Ionicons
                          name="chevron-forward"
                          size={16}
                          color="#fff"
                          style={S.settingChevron}
                        />
                      ) : null}
                    </Pressable>
                  );
                })}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
