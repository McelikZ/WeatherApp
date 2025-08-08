import axios from "axios";

export const fetchWeatherService = async (lat,lon) => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: lon,
          appid: "d0e01c39cebb60d7117b349dea9039ad", 
          units: "metric",
        },
      }
    );
    return response.data;
  } catch (error) {}
};



