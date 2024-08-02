
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Open from "../src/screens/Open";
import Login from "../src/screens/Login";
import ScreenNames from "./screenNames";
import Products from "../src/screens/Products";
import Register from "../src/screens/Register";
import Cart from "../src/screens/ShoppingCart";
import SignUp from "../src/screens/SignUp";
import ProdctDetails from "../src/screens/ProductDetails";
import HiNewUser from "../src/screens/HiNewUser";
import SplashScreen from "../src/screens/Splash";
import CheckOut from "../src/screens/CheckOut";

const MainNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }}
                />
                <Stack.Screen name={ScreenNames.HomePage} component={Open} options={{ headerShown: false }}
                />
                <Stack.Screen name='register' component={Register} />

                <Stack.Screen name={ScreenNames.SignUp} component={SignUp} />
                <Stack.Screen name={ScreenNames.Login} component={Login} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name={ScreenNames.Cart} component={Cart} />
                <Stack.Screen name='ProductDetails' component={ProdctDetails} />
                <Stack.Screen name={ScreenNames.HiNewUser} component={HiNewUser} />
                <Stack.Screen name="CheckOut" component={CheckOut} />


                {/* <Stack.Screen name={ScreenNames.HiNewUser} component={HiNewUser} /> */}



            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default MainNavigation;
// options={{headerShown:false}} 