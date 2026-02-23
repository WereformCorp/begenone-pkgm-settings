import { StyleSheet } from "react-native";

const COLORS = {
  bgBase: "#080808",
  bgCard: "#121212",
  bgButton: "#1C1C1C",
  textPrimary: "#fff",
  textMuted: "rgba(255,255,255,0.55)",
  accent: "#ff5e00",
  border: "rgba(255,255,255,0.06)",
};

export const GSOLStyles = StyleSheet.create({
  /* ── root ── */
  scroll: {
    // flex: 1,
    backgroundColor: COLORS.bgBase,
  },

  container: {
    paddingBottom: 120,
  },

  /* ── history section ── */
  historySection: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  historySectionLabel: {
    color: COLORS.textMuted,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 14,
  },

  historyScrollContent: {
    paddingRight: 16,
  },

  /* ── history card ── */
  historyCard: {
    backgroundColor: COLORS.bgCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
  },

  historyCardThumb: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: COLORS.bgButton,
  },

  historyCardThumbImage: {
    width: "100%",
    height: "100%",
  },

  historyCardBody: {
    padding: 14,
  },

  historyCardTitle: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
    marginBottom: 8,
  },

  historyCardMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  historyCardMetaItem: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: "500",
  },

  /* ── general section ── */
  generalSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },

  heading: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 0.2,
    marginBottom: 20,
  },

  sectionLabel: {
    color: COLORS.textMuted,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 12,
  },

  /* ── setting rows ── */
  settingsCard: {
    backgroundColor: COLORS.bgCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
  },

  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  settingRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: COLORS.bgButton,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  settingLabel: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: "600",
  },

  settingChevron: {
    opacity: 0.3,
  },
});
