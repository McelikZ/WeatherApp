import { StyleSheet } from "react-native";
import { spacing, fonts, colors, radius } from "../../theme/index";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
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

  infoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: spacing.large,
    marginLeft: spacing.medium,
  },

  weatherContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: spacing.xlarge,
    marginBottom: spacing.mediumLarge,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: spacing.tiny,
    paddingVertical: spacing.small,
    marginHorizontal: spacing.small,
  },

  spaceContainer: {
    flex: 1,
  },

  sideText: {
    color: colors.white,
    fontSize: fonts.sizes.mediumLarge,
    marginHorizontal: spacing.tiny,
  },
});
