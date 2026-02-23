import { Platform, StyleSheet } from "react-native";

const COLORS = {
  bgBase: "#080808",
  bgCard: "#121212",
  bgInput: "#1C1C1C",
  bgPicker: "#161616",
  textPrimary: "#fff",
  textMuted: "rgba(255,255,255,0.55)",
  textHint: "rgba(255,255,255,0.3)",
  accent: "#ff5e00",
  border: "rgba(255,255,255,0.06)",
};

export const VUSLStyles = StyleSheet.create({
  /* ── root ── */
  scroll: {
    flex: 1,
    backgroundColor: COLORS.bgBase,
  },

  container: {
    paddingBottom: 120,
  },

  /* ── profile header ── */
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  avatarWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    marginRight: 12,
  },

  avatarImage: {
    width: "100%",
    height: "100%",
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: "700",
  },

  profileLink: {
    color: COLORS.accent,
    fontSize: 13,
    fontWeight: "500",
    marginTop: 2,
  },

  /* ── form area ── */
  formArea: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },

  /* heading row */
  headingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  heading: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 0.2,
  },

  headingAccent: {
    color: COLORS.accent,
  },

  wireLink: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.06)",
  },

  wireLinkText: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: "600",
  },

  wireLinkAccent: {
    color: COLORS.accent,
  },

  /* ── section label ── */
  sectionLabel: {
    color: COLORS.textMuted,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 10,
    marginTop: 4,
  },

  /* ── pickers ── */
  pickerCard: {
    backgroundColor: COLORS.bgPicker,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 14,
    overflow: "hidden",
  },

  thumbPicker: {
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },

  videoPicker: {
    width: "100%",
    height: 72,
    justifyContent: "center",
    alignItems: "center",
  },

  pickerPreview: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.45,
  },

  pickerIconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  pickerLabel: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: "500",
  },

  pickerBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.45)",
    alignItems: "center",
    justifyContent: "center",
  },

  /* ── inputs ── */
  inputOuter: {
    position: "relative",
    marginBottom: 14,
  },

  inputWrapper: {
    backgroundColor: COLORS.bgInput,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 0,
  },

  inputIconTopRight: {
    position: "absolute",
    top: 14,
    right: 14,
  },

  titleInput: {
    color: COLORS.textPrimary,
    height: 48,
    paddingHorizontal: 14,
    paddingRight: 42,
  },

  descInput: {
    color: COLORS.textPrimary,
    minHeight: 100,
    paddingHorizontal: 14,
    paddingRight: 42,
    paddingTop: 12,
    paddingBottom: 12,
    textAlignVertical: "top",
  },

  /* ── action buttons ── */
  actionRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 32,
  },

  postButton: {
    flex: 1,
    backgroundColor: COLORS.accent,
    borderRadius: 10,
  },

  scheduleButton: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 10,
  },

  scheduleButtonText: {
    color: COLORS.textMuted,
  },
});
