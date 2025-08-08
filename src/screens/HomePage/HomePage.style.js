import { StyleSheet } from "react-native";
import { spacing, fonts, colors, radius } from "../../theme/index";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundPrimary,
    paddingTop: spacing.xxxlarge,
  },

  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.small,
    backgroundColor: "transparent",
    marginTop: spacing.mediumLarge,
  },

  contentContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.medium,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    height: 80,
    borderColor: colors.black,
    borderRadius: radius.mediumLarge,
    paddingHorizontal: spacing.medium,
    marginBottom: spacing.small,
  },

  dateContainer: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.small,
  },

  footerContainer: {
    flexShrink: 0,
    height: 140,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.small,
    marginBottom: spacing.medium,
  },

  placeText: {
    flex: 1,
    textAlign: "center",
    fontSize: fonts.sizes.mediumLarge,
    fontWeight: "bold",
    color: colors.black,
    marginHorizontal: spacing.small,
  },

  temperatureTextStyle: {
    fontSize: fonts.sizes.massive,
    color: colors.white,
    fontWeight: "bold",
  },

  meteorologyTextStyle: {
    fontSize: fonts.sizes.xlarge,
    color: colors.white,
    opacity: 0.75,
  },

  daysTextStyle: {
    fontSize: fonts.sizes.medium,
    color: colors.white,
  },

  todayTextStyle: {
    fontSize: fonts.sizes.mediumLarge,
    width: "70%",
    color: colors.white,
    textAlign: "left",
    fontWeight: "bold",
  },

  dropdown: {
    backgroundColor: colors.whiteTransparent90,
    paddingVertical: spacing.medium,
    borderTopLeftRadius: radius.mediumLarge,
    borderTopRightRadius: radius.mediumLarge,
    maxHeight: 250,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: radius.small,
  },

  item: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.medium,
    marginVertical: spacing.tiny,
    paddingHorizontal: spacing.medium,
    borderBottomColor: colors.lighteal,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    borderRadius: radius.small,
  },

  selectedItem: {
    backgroundColor: colors.backgroundLight,
  },

  dropdownText: {
    color: colors.textSecondary,
    fontSize: fonts.sizes.mediumLarge,
  },

  selectedText: {
    color: colors.textPrimary,
    fontWeight: "bold",
  },

  scroll: {
    paddingHorizontal: spacing.small,
  },
});
