import React from 'react';
import {
    View, StyleSheet, Text, Image, TouchableOpacity
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile_Screen from '../screens/profileScreens/Profile_Screen';

import MessagesScreen from "../screens/MessagesScreen/MessagesScreen";
import RentalsScreen from "../screens/rentalScreens/RentalsScreen";
import RentScreen from "../screens/rentScreens/RentScreen";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function BottomTab2(props) {

    const [activeTab, setActiveTab] = React.useState("Rent");

    const [loaded] = useFonts({
        semibold: require("../assets/fonts/semibold.ttf"),
    });
    if (!loaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        flexDirection: "row",
                        marginHorizontal: 20,
                        justifyContent: 'space-evenly',
                        backgroundColor: "#272E34",
                        width: wp("100%"),
                        alignSelf: "center",
                        height: hp("10%"),
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                        bottom: 0,
                    },
                    headerShown: false,
                }}>
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <TouchableOpacity style={{
                                backgroundColor: focused ? '#EAA795' : '#272E34',
                                borderRadius: 68,
                                width: wp("22%"),
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            >
                                <Image resizeMode="contain"
                                    source={require("../assets/icons/home.png")}
                                    style={[styles.iconStyle, { tintColor: focused ? '#272E34' : '#6C8193', }]}

                                />
                                <Text style={[styles.textStyle, { fontSize: 10, color: focused ? '#272E34' : '#6C8193', }]}>
                                    Rents</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                    name="Rent" component={RentScreen} />

                <Tab.Screen
                    name="Rentals" component={RentalsScreen} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}>

                                <TouchableOpacity style={{
                                    backgroundColor: focused ? '#EAA795' : '#272E34',
                                    borderRadius: 68,
                                    width: wp("22%"),
                                    height: 50,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                >
                                    <Image resizeMode="contain"
                                        source={require("../assets/icons/msg.png")}
                                        style={[styles.iconStyle, { tintColor: focused ? '#272E34' : '#6C8193', }]}

                                    />
                                    <Text style={[styles.textStyle, { fontSize: 10, color: focused ? '#272E34' : '#6C8193', }]}>
                                        Messages</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    name="Messages" component={MessagesScreen}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}>

                                <TouchableOpacity style={{
                                    backgroundColor: focused ? '#EAA795' : '#272E34',
                                    borderRadius: 68,
                                    width: wp("22%"),
                                    height: 50,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                >
                                    <Image resizeMode="contain"
                                        source={require("../assets/icons/Profile.png")}
                                        style={[styles.iconStyle, { tintColor: focused ? '#272E34' : '#6C8193', }]}

                                    />
                                    <Text style={[styles.textStyle, { fontSize: 10, color: focused ? '#272E34' : '#6C8193', }]}>
                                        Profile</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    name="Profile" component={Profile_Screen}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );

}



const styles = StyleSheet.create({
    TabContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: 'space-evenly',
        backgroundColor: "#272E34",
        width: wp("100%"),
        alignSelf: "center",
        height: hp("10%"),
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: "absolute",
        bottom: 0

    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: "center",
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        fontFamily: "semibold",
        color: "#6C8193",
        textAlign: "center",
        fontSize: 10
    }
})


export default BottomTab2;