
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen1 from "../src/screens/Screen1";
import Screen2 from "../src/screens/Screen2";
import { Text, View } from "react-native";

const MainNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Screen1}/>
                <Stack.Screen name='screen2' component={Screen2}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;