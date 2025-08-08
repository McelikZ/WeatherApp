import { StyleSheet } from "react-native";
import { spacing, colors, fonts, radius } from "../../theme/index";

export default StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth:1,
    borderRadius:20,
    marginHorizontal:5,
    paddingVertical:10,
    backgroundColor:colors.backgroundDark,
  },
  topImageStyle: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
  middleImageStyle: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
  bottomImageStyle: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },

  topTextStyle: { marginHorizontal: 20, color: "white" },
  middleTextStyle: { marginHorizontal: 20, color: "white" },
  bottomTextStyle: { marginHorizontal: 20, color: "white" },
});
