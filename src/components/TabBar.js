import React, { useState } from 'react'
import {
    View, Text, TouchableOpacity, Image,
    StyleSheet,
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function TabBar({ navigation }) {
    const [activeTab, setActiveTab] = useState("Rent");

    const [loaded] = useFonts({
        semibold: require("../assets/fonts/semibold.ttf"),
    });
    if (!loaded) {
        return <AppLoading />;
    }


    return (

        <View style={styles.TabContainer}>

            <Icon text="Rent"
                onPress={() => { console.log('click') }}
                icon={require("../assets/icons/home.png")}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                iconColor="#EAA795"
                textColor="#272E34"

            />
            <Icon
                onPress={() => navigation.navigate('RentalsScreen')}
                text="Rentals"
                icon={require("../assets/icons/rentals.png")}
                activeTab={activeTab}
                setActiveTab={setActiveTab} />
            <Icon
                text="Messages"
                icon={require("../assets/icons/msg.png")}
                activeTab={activeTab}
                setActiveTab={setActiveTab} />
            <Icon
                onPress={() => navigation.navigate('Profile_Screen')}
                text="Profile"
                icon={require("../assets/icons/user.png")}
                activeTab={activeTab}
                setActiveTab={setActiveTab} />

        </View>
    )
}

const Icon = ({ text, icon, activeTab, setActiveTab, onPress }) => (
    <View style={{
        justifyContent: "center",
        alignItems: "center"
    }}>

        <TouchableOpacity style={{
            backgroundColor: activeTab === text ? '#EAA795' : '#272E34',
            borderRadius: 68,
            width: wp("22%"),
            height: 50,
            justifyContent: "center",
            alignItems: "center"
        }}
            onPress={() => setActiveTab(text)}
        >
            <TouchableOpacity onPress={onPress}>

                <Image resizeMode="contain"
                    source={icon}
                    style={[styles.iconStyle, { tintColor: activeTab === text ? '#272E34' : '#6C8193', }]}

                />
                <Text style={[styles.textStyle, { color: activeTab === text ? '#272E34' : '#6C8193', }]}>
                    {text}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    </View>
)

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
        width: 22.98,
        height: 18.36,
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