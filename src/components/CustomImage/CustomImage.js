import React, { useState } from "react";
import { View, Image, ActivityIndicator, Text } from "react-native";
import styles from "./CustomImage.style"
const CustomImage = ({
  source,
  containerStyle = {},
  imageStyle = {},
  placeholderSource = null,
  resizeMode = "contain",
  accessibilityLabel = "",
  imageText = null,
  textStyle={},
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <View style={[{ flexDirection: "row"}, containerStyle]}>

      {loading && !error && <ActivityIndicator size="small" color="#999" />}
      <Image
        source={error ? placeholderSource : source}
        style={[styles.defaultCustomImage, imageStyle]}
        resizeMode={resizeMode}
        onLoadEnd={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        accessible={true}
        accessibilityLabel={accessibilityLabel}
      />
      {imageText !== null && (
        <Text style={[styles.textStyle,textStyle]}>
          {imageText}
        </Text>
      )}
    </View>
  );
};

export default CustomImage;
