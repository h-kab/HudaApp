
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Open from "../src/screens/Open";
import { Text, View } from "react-native";
import Login from "../src/screens/Login";
import ScreenNames from "./screenNames";
// import SignUp from "../src/screens/signUp";
import SplashScreen from "../src/screens/Splash";
import signUp from "../src/screens/signUp";
import Products from "../src/screens/Products";
import Register from "../src/screens/Register";
import CZ from "../src/screens/CZ";

const MainNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Code Zone">
                <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }}
                />
                <Stack.Screen name={ScreenNames.HomePage} component={Open} options={{ headerShown: false }}
                />
                <Stack.Screen name='register' component={Register} /> 
                <Stack.Screen name="signUp" component={signUp}/>
                {/* <Stack.Screen name={ScreenNames.signUp} component={SignUp} /> */}
                <Stack.Screen name={ScreenNames.Login} component={Login}   />
                <Stack.Screen name='Products' component={Products}    />
                <Stack.Screen name='Code Zone' component={CZ}    />


            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default MainNavigation;
// options={{headerShown:false}} 