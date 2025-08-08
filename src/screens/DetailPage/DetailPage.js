import styles from "./DetailPage.style";
import { StatusBar } from "react-native";
import { View, Text, SafeAreaView } from "react-native";
import {
  CustomButton,
  CustomImage,
  CustomWeather,
} from "../../components/index";

const DetailPage = ({ route, navigation }) => {
  const { iconSource, temp, description, wind, humidity } = route.params;

  const weatherInfo = [
    {
      key: "wind",
      topImage: require("../../../assets/Images/Wind.png"),
      middleText: wind + "km/h",
      bottomText: "Wind",
    },
    {
      key: "humidity",
      topImage: require("../../../assets/Images/Humidity.png"),
      middleText: humidity + "%",
      bottomText: "Humidity",
    },
    {
      key: "rain",
      topImage: require("../../../assets/Images/Rain.png"),
      middleText: "0mm",
      bottomText: "Rain",
    },
  ];

  const weatherData = [
    { day: "Mon", weather: "Cloudy", temperature: "+20°+14°" },
    { day: "Tue", weather: "Rainy", temperature: "+22°+15°" },
    { day: "Wed", weather: "Sunny", temperature: "+18°+12°" },
    { day: "Thu", weather: "Windy", temperature: "+21°+13°" },
    { day: "Fri", weather: "Rainy", temperature: "+23°+16°" },
    { day: "Sat", weather: "Windy", temperature: "+24°+17°" },
    { day: "Sun", weather: "Snowy", temperature: "+19°+11°" },
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <View style={styles.headerContainer}>
        <CustomButton
          isImageOnly
          source={require("../../../assets/Images/BackButton.png")}
          imageStyle={{ width: 50, height: 50 }}
          onPress={() => navigation.goBack()}
        />

        <CustomImage
          source={require("../../../assets/Images/Calendar.png")}
          imageText="7 days"
          imageStyle={{ marginRight: 10, width: 25, height: 25, marginTop: 8 }}
        />

        <CustomButton
          isImageOnly
          source={require("../../../assets/Images/SettingsIcon.png")}
          imageStyle={{ width: 50, height: 50 }}
        />
      </View>

      <View style={styles.infoContainer}>
        <CustomImage
          source={iconSource || require("../../../assets/Images/Icons/02d.png")}
          imageStyle={{ width: 140, height: 140 }}
        />

        <CustomWeather
          showTopText={true}
          showMiddleText={true}
          showBottomText={true}
          topText="Today"
          middleText={Math.round(temp) + "/°C"}
          bottomText={(description || "").toUpperCase()}
          mainContainer={{
            borderWidth: 0,
            textAlign: "left",
            alignItems: "flex-start",
            backgroundColor: "#181a1e",
          }}
          topTextStyle={{ color: "white", fontSize: 20 }}
          middleTextStyle={{
            color: "white",
            fontSize: 60,
            fontWeight: "bold",
          }}
          bottomTextStyle={{ color: "white", opacity: 0.75 }}
        />
      </View>

      <View style={styles.weatherContainer}>
        {weatherInfo.map((item) => (
          <CustomWeather
            key={item.key}
            topImage={item.topImage}
            showMiddleText
            mainContainer={{
              backgroundColor: "#181a1e",
              borderColor: "#646666ff",
            }}
            middleText={item.middleText}
            bottomText={item.bottomText}
            middleTextStyle={{ color: "white", fontSize: 16 }}
            bottomTextStyle={{ color: "white", fontSize: 16, opacity: 0.5 }}
          />
        ))}
      </View>

      {weatherData.map((item, index) => (
        <View
          key={index}
          style={[
            styles.contentContainer,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              alignItems: "center",
            },
          ]}
        >
          <Text
            style={[
              styles.sideText,
              {
                flex: 1,
                textAlign: "left",
                opacity: 0.5,
                fontWeight: "bold",
              },
            ]}
          >
            {item.day}
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <CustomImage
              source={require("../../../assets/Images/CloudIcon.png")}
              containerStyle={{ marginRight: 25 }}
              imageText={item.weather}
              textStyle={{ fontSize: 18, opacity: 0.5, fontWeight: "bold" }}
              imageStyle={{
                width: 30,
                height: 30,
                marginRight: 5,
              }}
            />
          </View>

          <Text
            style={[
              styles.sideText,
              {
                flex: 1,
                textAlign: "right",
                fontWeight: "bold",
              },
            ]}
          >
            {item.temperature}
          </Text>
        </View>
      ))}

      <View style={styles.spaceContainer}></View>
    </SafeAreaView>
  );
};

export default DetailPage;
