import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage, DetailPage} from "../screens/index";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />

      <Stack.Screen name="DetailPage" component={DetailPage} />

    </Stack.Navigator>
  );
};

export default AppStack;
