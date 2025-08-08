import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherService } from "../services/weatherAppService";

export const fetchWeather = createAsyncThunk(
  "weather/data",
  async ({ lat, lon }) => {
    try {
      return await fetchWeatherService(lat, lon);
    } catch (error) {
      throw error;
    }
  }
);
