import { Pressable, ScrollView, Text, View } from "react-native";
import { GSOLStyles as S } from "../styles/GSOLStyles";
import { Ionicons } from "@expo/vector-icons";
import { HistoryContainer } from "../components/HistoryContainer";

/**
 * GeneralSettingsOverviewLayout
 *
 * High-level entry screen for user and channel management.
 *
 * Responsibilities:
 * - Optionally displays recent content history
 * - Acts as a navigation hub for user and channel settings
 * - Provides a clean, minimal overview of account-level actions
 */

const SETTINGS_ITEMS = [
  { key: "likes", label: "Likes", icon: "thumbs-up-outline", prop: null },
  {
    key: "dislikes",
    label: "Dislikes",
    icon: "thumbs-down-outline",
    prop: null,
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
    key: "pricing",
    label: "Pricings",
    icon: "cash-outline",
    prop: "onPressPricings",
  },
];

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
  showHistory,
}) {
  const handlers = {
    onPressUserSettings,
    onPressChannelSettings,
    onPressPricings,
  };

  return (
    <ScrollView style={S.scroll}>
      <View style={S.container}>
        {/* history */}
        {true && (
          <View style={S.historySection}>
            <Text style={S.historySectionLabel}>Recent</Text>

            <HistoryContainer
              timeAgo="3 hours ago"
              viewsText="18.4K"
              titleText="Why Most Side Projects Die at Deployment (And How to Survive It)"
              userNameText="Areesh Alam"
              contentThumbUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
              channelLogo="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80"
            />
          </View>
        )}

        {/* general */}
        <View style={S.generalSection}>
          <Text style={S.heading}>General</Text>

          <Text style={S.sectionLabel}>Account</Text>
          <View style={S.settingsCard}>
            {SETTINGS_ITEMS.map((item, index) => {
              const isLast = index === SETTINGS_ITEMS.length - 1;
              const onPress = item.prop ? handlers[item.prop] : undefined;

              return (
                <Pressable
                  key={item.key}
                  onPress={onPress}
                  disabled={!onPress}
                  style={({ pressed }) => [
                    S.settingRow,
                    !isLast && S.settingRowBorder,
                    { opacity: pressed ? 0.75 : 1 },
                  ]}
                >
                  <View style={S.settingIcon}>
                    <Ionicons name={item.icon} size={18} color="#fff" />
                  </View>
                  <Text style={S.settingLabel}>{item.label}</Text>
                  {onPress && (
                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color="#fff"
                      style={S.settingChevron}
                    />
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
