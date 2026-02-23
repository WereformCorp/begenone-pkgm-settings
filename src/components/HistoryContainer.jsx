/**
 * HistoryContainer
 *
 * Horizontal scroll of history cards. Max 2 visible, scrollable.
 * Each card: thumbnail, title, date, views.
 */

import { useMemo } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { GSOLStyles as S } from "../styles/GSOLStyles";

const DEFAULT_THUMB =
  "https://begenone-images.s3.us-east-1.amazonaws.com/let+Me+Love+you.jpg";
const CARD_GAP = 12;
const SECTION_PADDING = 32;

function HistoryCard({
  timeAgo,
  viewsText,
  titleText,
  contentThumbUrl,
  onPress,
  style,
}) {
  const views = viewsText != null ? String(viewsText) : null;

  const card = (
    <View style={[S.historyCard, style]}>
      <View style={S.historyCardThumb}>
        <Image
          source={{ uri: contentThumbUrl || DEFAULT_THUMB }}
          style={S.historyCardThumbImage}
          resizeMode="cover"
        />
      </View>
      <View style={S.historyCardBody}>
        <Text style={S.historyCardTitle} numberOfLines={2}>
          {titleText || "Untitled"}
        </Text>
        <View style={S.historyCardMeta}>
          <Text style={S.historyCardMetaItem}>{timeAgo || "Recently"}</Text>
          {views != null && (
            <>
              <Text style={S.historyCardMetaItem}>•</Text>
              <Text style={S.historyCardMetaItem}>{views} views</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
      >
        {card}
      </Pressable>
    );
  }

  return card;
}

export function HistoryContainer({
  items,
  timeAgo,
  viewsText,
  titleText,
  contentThumbUrl,
  onPress,
}) {
  const { width } = useWindowDimensions();
  const cardWidth = useMemo(
    () => (width - SECTION_PADDING - CARD_GAP) / 1.5,
    [width],
  );

  const list = useMemo(() => {
    if (Array.isArray(items) && items.length > 0) {
      return items;
    }
    if (titleText != null || contentThumbUrl != null || timeAgo != null) {
      return [{ timeAgo, viewsText, titleText, contentThumbUrl }];
    }
    return [];
  }, [items, timeAgo, viewsText, titleText, contentThumbUrl]);

  if (list.length === 0) return null;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={S.historyScrollContent}
    >
      {list.map((item, i) => (
        <HistoryCard
          key={i}
          timeAgo={item.timeAgo}
          viewsText={item.viewsText}
          titleText={item.titleText}
          contentThumbUrl={item.contentThumbUrl}
          onPress={onPress}
          style={{
            width: cardWidth,
            marginRight: i < list.length - 1 ? CARD_GAP : 0,
          }}
        />
      ))}
    </ScrollView>
  );
}
