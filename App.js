import * as React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
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
import RootNavigation from "./Navigation";

import TabBar from "./src/components/TabBar"
import BottomTab2 from "./src/components/BottomTab2";
export default function App() {
  return (
    <BottomTab2 />
  );
}
