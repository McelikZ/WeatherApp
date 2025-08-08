import React, { useState } from "react";
import { TextInput, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./CustomTextInput.style";

const CustomTextInput = ({
  textTitle = "Default",
  value,
  onChangeText,
  isPassword = false,
  eyeIconOpen = null,
  eyeIconClosed = null,
  iconSource = null,

  labelPosition = "top",
  multiline = false,
  onPress = null,

  placeholderText = "Optional",

  containerStyle = {},
  textStyle = {},
  textInputStyle = {},
  iconStyle = {},
  inputWrapperStyle = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const showLabelTop = labelPosition === "top";
  const showPlaceholderInside = labelPosition === "inside";

  const placeholder = showPlaceholderInside
    ? textTitle
    : showLabelTop
    ? placeholderText
    : "";

  const inputEditable = onPress ? false : true;

  return (
    <View style={[styles.container, containerStyle]}>
      {showLabelTop && (
        <Text style={[styles.label, textStyle]}>{textTitle}</Text>
      )}

      <TouchableOpacity
        onPress={onPress}
        activeOpacity={onPress ? 0.7 : 1}
        style={[styles.inputWrapper, inputWrapperStyle]}
      >
        {iconSource && (
          <Image source={iconSource} style={[styles.icon, iconStyle]} />
        )}

        <TextInput
          style={[
            styles.input,
            textInputStyle,
            (iconSource || isPassword) && { marginLeft: 10 },
            multiline && { textAlignVertical: "top" },
          ]}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor="#4b3d2fff"
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isPassword && !showPassword}
          editable={inputEditable}
          pointerEvents={onPress ? "none" : "auto"}
        />

        {isPassword && eyeIconOpen && eyeIconClosed && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeWrapper}
          >
            <Image
              source={showPassword ? eyeIconOpen : eyeIconClosed}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomTextInput;
