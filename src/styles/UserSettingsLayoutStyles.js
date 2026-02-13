import { StyleSheet } from "react-native";

const COLORS = {
  bgBase: "#080808",
  bgFormCard: "#121212",
  bgInput: "#1C1C1C",
  textPrimary: "#fff",
  textMuted: "rgba(255,255,255,0.55)",
  accent: "#ff5e00",
  avatarRing: "rgba(255,255,255,0.1)",
  danger: "rgba(220, 80, 80, 0.9)",
  border: "rgba(255,255,255,0.06)",
  borderInput: "rgba(255,255,255,0.04)",
};

const SPACING = {
  section: 24,
  block: 16,
  small: 12,
};

export const UserSettingsLayoutStyles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: COLORS.bgBase,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: SPACING.section,
    paddingBottom: 120,
  },

  profileSection: {
    alignItems: "center",
    marginBottom: SPACING.section,
  },

  avatarWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    padding: 3,
    backgroundColor: COLORS.avatarRing,
    marginBottom: SPACING.block,
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 37,
  },

  userName: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },

  channelSettingsWrap: {
    marginTop: 4,
  },

  channelSettingsText: {
    color: COLORS.accent,
    fontSize: 14,
  },

  formSection: {
    marginBottom: SPACING.section,
  },

  formCard: {
    backgroundColor: COLORS.bgFormCard,
    borderRadius: 12,
    padding: SPACING.block,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  sectionHeading: {
    color: COLORS.textMuted,
    fontSize: 11,
    fontWeight: "500",
    marginBottom: SPACING.block,
    letterSpacing: 2,
  },

  inputWrapper: {
    backgroundColor: COLORS.bgInput,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderInput,
    marginBottom: SPACING.small,
  },

  inputWrapperLast: {
    marginBottom: 0,
  },

  defaultInput: {
    color: COLORS.textPrimary,
    height: 44,
    paddingHorizontal: 14,
  },

  aboutInput: {
    color: COLORS.textPrimary,
    minHeight: 100,
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 12,
    textAlignVertical: "top",
  },

  actionSection: {
    gap: SPACING.small,
  },

  upgradeButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.accent,
  },

  saveButton: {
    backgroundColor: COLORS.accent,
  },

  logoutButton: {
    backgroundColor: COLORS.danger,
  },

  dualButtonRow: {
    flexDirection: "row",
    gap: SPACING.small,
  },

  dualButton: {
    flex: 1,
  },
});
