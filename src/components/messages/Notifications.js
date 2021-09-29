import React from 'react'
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Divider } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


const notifications = [
    {
        msg: "Your order has been confirmed!",
        time: "1 day ago"
    },
    {
        msg: "You have booked a Season Pass!",
        time: "2 days ago"
    },
    {
        msg: "Refund approved",
        time: "2 days ago"
    },
    {
        msg: "Your order has been confirmed!",
        time: "3 days ago"
    }
    , {
        msg: "Your order has been confirmed!",
        time: "1 month ago"
    },
    {
        msg: "Order Started",
        time: "1 month ago"
    },
    {
        msg: "Your order has been confirmed!",
        time: "1 month ago"
    },
    {
        msg: "You have booked a Day Pass!",
        time: "1 month ago"
    }
    ,
    {
        msg: "You have booked a Day Pass!",
        time: "1 month ago"
    }
    ,
    {
        msg: "You have booked a Day Pass!",
        time: "1 month ago"
    }
    ,
    {
        msg: "You have booked a Day Pass!",
        time: "1 month ago"
    }
]
export default function Notifications() {

    const [loaded] = useFonts({
        poppinsMedium: require("../../assets/fonts/poppinsMedium.ttf"),
    });
    if (!loaded) {
        return <AppLoading />;
    }
    return (
        <KeyboardAvoidingView enabled={true}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}>

            <ScrollView contentContainerStyle={{ paddingBottom: 200 }}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                {notifications.map((food, index) => (
                    <View key={index}>
                        <View style={styles.textContainer}>
                            <Text style={styles.txtStyle1}>{food.msg}</Text>
                            <Text style={styles.txtStyle2}>{food.time}</Text>
                        </View>
                        <Divider
                            width={0.5}
                            orientation="vertical"
                            color="#495864"
                        />
                    </View>
                ))}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        marginLeft: wp("3%"),
        padding: 10
    },
    txtStyle1: {
        color: "#272E34",
        fontFamily: "poppinsMedium",
        fontSize: 14
    },
    txtStyle2: {
        color: "#495864",
        fontFamily: "poppinsMedium",
        fontSize: 10
    }
})