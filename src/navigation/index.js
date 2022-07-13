import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Add } from "../screens/Add";

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Group
          screenOptions={{
            presentation: "modal",
          }}
        >
          <Stack.Screen name="Add" component={Add} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
