import React from "react";
import { Pressable, Text, Image } from "react-native";
import styles from "./CustomButton.style";

const CustomButton = ({
  onPress,
  buttonText = "Default",
  showText = true,
  isTextOnly = false,
  isImageOnly = false,
  source = null,

  buttonStyle = {},
  buttonTextStyle = {},
  imageStyle = {},
}) => {

  if (isTextOnly) {
    return (

      
      <Text
        onPress={onPress}
        style={[styles.defaultButtonText, buttonTextStyle]}
      >
        {buttonText}
      </Text>
    );
  }

  if (isImageOnly && source) {
    return (
      <Pressable onPress={onPress} style={buttonStyle}>
        <Image source={source} resizeMode="contain" style={imageStyle} />
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={[styles.defaultButton, buttonStyle]}>
      {source && (
        <Image
          source={source}
          resizeMode="contain"
          style={[styles.defaultButtonImageStyle, imageStyle]}
        />
      )}
      
      {showText && (
        <Text style={[styles.defaultButtonText, buttonTextStyle]}>
          {buttonText}
        </Text>
      )}
    </Pressable>
  );
};

export default CustomButton;
