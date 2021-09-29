import React from 'react'
import {
    View, Text, StyleSheet, Image,
    TouchableOpacity, StatusBar, KeyboardAvoidingView, SafeAreaView
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Notifications from "../../components/messages/Notifications"
import Messages from "../../components/messages/Messages"
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from '@react-navigation/native';
import { TabBarIndicator } from 'react-native-tab-view';

const Tab = createMaterialTopTabNavigator();

const MessageTabs = () => {


    return (
        <Tab.Navigator
            scrollEnabled
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30
                },
                tabBarItemStyle: { height: 65, flex: 1 },
                indicatorStyle: {
                    activeTintColor: 'red',
                    inactiveTintColor: "#EAA795",
                },
                keyboardHidesTabBar: false,
            }}>
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="MessageList" component={Messages} />
        </Tab.Navigator>
    )
}

export default function MessagesScreen() {

    const [loaded] = useFonts({
        semibold: require("../../assets/fonts/semibold.ttf"),
    });
    if (!loaded) {
        return <AppLoading />;
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.header}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#495864" translucent={true} />

                <TouchableOpacity style={styles.headerContainer}>
                    <View>
                        <Image resizeMode="contain"
                            source={require("../../assets/icons/leftIcon.png")}
                            style={styles.iconStyle}
                        />
                    </View>
                    <Text style={styles.txtStyle}>Inbox</Text>

                </TouchableOpacity>
                <View style={styles.msgContainer}>
                    <MessageTabs />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#272E34",
        flex: 1
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center", marginTop: hp("6%"),
        marginLeft: wp("4%"),
    },
    iconStyle: {
        width: 13,
        height: 13,
    },
    txtStyle: {
        fontFamily: "semibold",
        fontSize: 15,
        color: "#FFFFFF",
        alignSelf: "center",
        marginLeft: 10,
        textAlign: "center"
    },
    msgContainer: {
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flex: 1,
        marginTop: hp("3%")

    }
})