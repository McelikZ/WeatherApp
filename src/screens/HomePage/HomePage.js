import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./HomePage.style";
import cities from "../../Data/Cities.json";
import {
  CustomButton,
  CustomImage,
  CustomWeather,
  Loader,
} from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../../redux/weatherThunk";
import Icons from "../../Data/Icon";
import { StatusBar } from "react-native";

const weatherInfoConfig = [
  {
    key: "wind",
    image: require("../../../assets/Images/Wind.png"),
    label: "Wind",
    unit: "km/h",
  },
  {
    key: "humidity",
    image: require("../../../assets/Images/Humidity.png"),
    label: "Humidity",
    unit: "%",
  },
  {
    key: "rain",
    image: require("../../../assets/Images/Rain.png"),
    label: "Rain",
    unit: "mm",
  },
];

const HomePage = ({ navigation }) => {
  const data = useSelector((state) => state.weather.data);
  const loading = useSelector((state) => state.weather.loading);

  const dispatch = useDispatch();

  const [weatherStats, setWeatherStats] = useState({
    temp: null,
    description: "",
    wind: 0,
    humidity: "",
    rain: 0,
    icon: "",
  });

  const [iconSource, setIconSource] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [lat, setLat] = useState(37.0);
  const [lon, setLon] = useState(35.3213);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCity, setSelectedCity] = useState({
    name: "Adana",
    lat: 37.0,
    lon: 35.3213,
  });

  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    dispatch(fetchWeather({ lat, lon }));
  }, [lat, lon]);

  useEffect(() => {
    if (!data) return;

    const windSpeedKmh = data.wind.speed * 3.6;

    setWeatherStats({
      temp: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: Math.round(windSpeedKmh),
      rain: data?.rain?.["1h"] ?? 0,
      icon: data.weather[0].icon,
    });
  }, [data]);

  useEffect(() => {
    if (weatherStats.icon && weatherStats.icon in Icons) {
      setIconSource(Icons[weatherStats.icon]);
    } else {
      setIconSource(null);
    }
  }, [weatherStats.icon]);

  const openModal = () => {
    setIsOpen(true);
    setIsSelected(true);
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    setIsSelected(false);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setIsOpen(false));
  };

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const handleSelect = (city) => {
    setSelectedCity(city);
    setIsSelected(false);
    setLat(city.lat);
    setLon(city.lon);
    closeModal();
  };

  const hourlyData = Array.from({ length: 24 }).map((_, i) => ({
    id: `${i + 1}`,
    topText: `${Math.floor(Math.random() * 20 + 20)}°C`,
    middleImage: require("../../../assets/Images/CloudIcon.png"),
    bottomText: `${String(i).padStart(2, "0")}:00`,
  }));

  const weatherInfo = weatherInfoConfig.map(({ key, image, label, unit }) => ({
    key,
    topImage: image,
    middleText: `${weatherStats[key]}${unit}`,
    bottomText: label,
  }));

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} />
      {loading && <Loader />}

      <Modal transparent visible={isOpen} animationType="none">
        <TouchableWithoutFeedback onPress={closeModal}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: "#00000066",
            }}
          >
            <Animated.View
              style={[styles.dropdown, { transform: [{ translateY }] }]}
            >
              <FlatList
                data={cities}
                keyExtractor={(item) => item.name}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => handleSelect(item)}
                    style={styles.item}
                  >
                    <Text style={{ color: "black" }}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={styles.headerContainer}>
        <CustomButton
          isImageOnly
          source={require("../../../assets/Images/DetailButton.png")}
          imageStyle={{ width: 45, height: 45, opacity: 1 }}
          onPress={() =>
            navigation.navigate("DetailPage", {
              iconSource,
              temp: weatherStats.temp,
              description: weatherStats.description,
              wind: weatherStats.wind,
              humidity: weatherStats.humidity,
            })
          }
        />
        <CustomImage
          source={require("../../../assets/Images/LocationIcon.png")}
          imageText={selectedCity.name}
          imageStyle={{ marginRight: 5, width: 30, height: 30, marginTop: 5 }}
        />

        <CustomButton
          isImageOnly
          source={require("../../../assets/Images/SettingsIcon.png")}
          imageStyle={{ width: 45, height: 45 }}
        />
      </View>

      <View style={styles.contentContainer}>
        <CustomButton
          onPress={openModal}
          buttonText={isSelected ? "✔ Selected" : "🟡 Select"}
          buttonTextStyle={{
            color: "white",
            textAlign: "center",
            fontSize: 12,
          }}
          buttonStyle={{
            borderRadius: 30,
            width: 110,
            height: 35,
            backgroundColor: isSelected ? "#4caf50" : "#383a3bff", // Yeşil seçili renk
            borderColor: "white",
            borderWidth: 1,
            marginLeft: 15,
          }}
        />
        <CustomImage
          source={iconSource || require("../../../assets/Images/Icons/03d.png")}
          imageStyle={{ width: 180, height: 180 }}
        />

        <Text style={styles.temperatureTextStyle}>
          {weatherStats.temp !== null
            ? `${Math.round(weatherStats.temp)}°`
            : "--"}
        </Text>

        <Text style={styles.meteorologyTextStyle}>
          {weatherStats.description.toUpperCase()}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        {weatherInfo.map((item) => (
          <CustomWeather
            key={item.key}
            topImage={item.topImage}
            showMiddleText
            middleText={item.middleText}
            bottomText={item.bottomText}
            middleTextStyle={{ color: "white", fontSize: 16 }}
            bottomTextStyle={{ color: "white", fontSize: 16, opacity: 0.5 }}
            mainContainer={{
              backgroundColor: "#181a1e",
              borderColor: "#646666ff",
            }}
          />
        ))}
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.todayTextStyle}>Today</Text>
        <CustomButton
          isTextOnly
          buttonText="7 days >"
          buttonTextStyle={{ fontSize: 15, color: "gray", fontWeight: "bold" }}
          onPress={() =>
            navigation.navigate("DetailPage", {
              iconSource,
              temp: weatherStats.temp,
              description: weatherStats.description,
              wind: weatherStats.wind,
              humidity: weatherStats.humidity,
            })
          }
        />
      </View>

      <View style={styles.footerContainer}>
        <FlatList
          data={hourlyData}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          renderItem={({ item }) => (
            <CustomWeather
              showTopText
              showMiddleText={false}
              topText={item.topText}
              middleImage={item.middleImage}
              bottomText={item.bottomText}
              mainContainer={{
                backgroundColor: "#181a1e",
                borderColor: "#646666ff",
              }}
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                No content available to display.
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
