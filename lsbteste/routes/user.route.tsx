import React from "react";
import { StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Home from "../App";
import AuthScreen from "../xx";
import Clientes from "../screens/clientes";


export type RootStackParamList = {
    Primeira: any;
    Principal: any;
    Clientes: any;
    
  };
export const Stack = createStackNavigator<RootStackParamList>();
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

export function UserRoutes() {
    return (
      <Stack.Navigator initialRouteName="Principal">
          <Stack.Screen
          name="Primeira"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Principal"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Clientes"
          component={Clientes}
          options={{ headerShown: false }}
        />

</Stack.Navigator>
    );
  }