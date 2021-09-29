import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./src/components/TabBar";
import TextInputComponent from "./src/components/TextInputComponent";
import ForgotPasswordScreen from "./src/screens/loginScreens/ForgotPasswordScreen";
import LoginScreen from "./src/screens/loginScreens/LoginScreen";
import ResetPasswordScreen1 from "./src/screens/loginScreens/ResetPasswordScreen1";
import ResetPasswordScreen2 from "./src/screens/loginScreens/ResetPasswordScreen2";
import SignupScreen from "./src/screens/loginScreens/SignupScreen";
import MessagesScreen from "./src/screens/MessagesScreen/MessagesScreen";
import EditPassword from "./src/screens/profileScreens/EditPassword";
import Profile_Screen from "./src/screens/profileScreens/Profile_Screen";
import HelpScreen from "./src/screens/rentalScreens/HelpScreen";
import RentalsScreen from "./src/screens/rentalScreens/RentalsScreen";
import RentScreen from "./src/screens/rentScreens/RentScreen";
import OrderSummaryScreen from "./src/screens/rentScreens/OrderSummaryScreen";
import SplashScreen1 from "./src/screens/splashScreens/SplashScreen1";
import SplashScreen2 from "./src/screens/splashScreens/SplashScreen2";
import TabBar from "./src/components/TabBar";


export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen2" screenOptions={screenOptions}>
                <Stack.Screen name="SplashScreen1" component={SplashScreen1} />
                <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="RentScreen" component={RentScreen} />
                <Stack.Screen name="RentalsScreen" component={RentalsScreen} />
                <Stack.Screen name="TabBar" component={TabBar} />
                <Stack.Screen name="Profile_Screen" component={Profile_Screen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}