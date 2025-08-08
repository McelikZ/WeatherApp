import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./CustomWeather.style";

const CustomContentBox = ({
  showTopText = false,
  topText = "",
  topImage = null,

  showMiddleText = true,
  middleText = "",
  middleImage = null,

  showBottomText = true,
  bottomText = "",
  bottomImage = null,

  topTextStyle = {},
  middleTextStyle = {},
  bottomTextStyle = {},

  mainContainer={},
  topImageStyle = {},
  middleImageStyle = {},
  bottomImageStyle = {},

  onPress = null,
}) => {
  return (
    <Pressable onPress={onPress} disabled={!onPress}>
      <View style={[styles.mainContainer,mainContainer]}>
        {showTopText ? (
          <Text style={[styles.topTextStyle,topTextStyle]}>{topText}</Text>
        ) : (
          topImage && <Image style={[styles.topImageStyle,topImageStyle]} source={topImage} />
        )}

        {showMiddleText ? (
          <Text style={[styles.middleTextStyle,middleTextStyle]}>{middleText}</Text>
        ) : (
          middleImage && (
            <Image style={[styles.middleImageStyle,middleImageStyle]} source={middleImage} />
          )
        )}

        {showBottomText ? (
          <Text style={[styles.bottomTextStyle,bottomTextStyle]}>{bottomText}</Text>
        ) : (
          bottomImage && (
            <Image
              style={[styles.bottomImageStyle,bottomImageStyle]}
              source={bottomImage}
            />
          )
        )}
      </View>
    </Pressable>
  );
};

export default CustomContentBox;
