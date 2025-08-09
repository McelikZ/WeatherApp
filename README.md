# WeatherApp

Warning:

### ⚠️ This project is built with Expo.
Make sure you have Expo installed and configured before running the project.

### ⚠️API Key Notice

This project uses the OpenWeatherMap API, and the API key is directly included in the code.
For production use, it is recommended to move the API key to an .env file or secure storage to protect sensitive data.

 Link:
- https://openweathermap.org/api

### ⚠️ Folder Name Notice

If you downloaded this project as a `.zip` file from GitHub, the extracted folder may be named something like:
WeatherApp-master

To avoid any issues while working with the project, please rename the folder to:
WeatherApp

# About the Project
WeatherApp is a simple and efficient weather application developed with React Native and Expo.

It allows users to check the current weather for selected cities, with features such as:

Real-time temperature updates

Weather condition icons

Responsive design for mobile devices

The app uses the OpenWeatherMap API to fetch live weather data.

# Dependencies and Setup

This project uses the following main libraries and packages as specified in package.json:

Redux Toolkit & React Redux: For efficient global state management.

- npm install @reduxjs/toolkit react-redux

React Navigation: For handling navigation between screens.
Core navigation and native dependencies:

- npm install @react-navigation/native react-native-screens react-native-safe-area-context

- npm install @react-navigation/native-stack

Axios: For making HTTP requests to the weather API:

- npm install axios

Expo Build:

- npm install expo

Expo packages:

Included with Expo SDK:

- expo

- expo-status-bar

# Technologies and Concepts Used

React Navigation: For handling navigation between screens.

Axios: For making API requests

Redux: Used for global state management.

Props: For passing data between components.

Services: Dedicated files for business logic and API calls.

Firebase: Backend infrastructure for authentication and data management (optional).

Components: Reusable UI components used throughout the app.

Flexbox: For responsive layouts.



# Project Structure

/src

  /components      # Reusable UI components
  
  /navigation      # Screen navigation setup
  
  /redux           # Redux store, reducers, and actions
  
  /services        # API and business logic services
  
  /screens         # Application screens
  
  /themes          # Color and style themes

  /Data            # Static data (e.g., city lists, icons)

# Example Design

<img width="1293" height="970" alt="ExampleDesign" src="https://github.com/user-attachments/assets/59d951a4-7107-4128-b13e-53dc49da5fc9" />


  
# Design

<img width="1920" height="1080" alt="Design" src="https://github.com/user-attachments/assets/6d4e6362-a11d-4150-897b-08dc3ee45439" />


