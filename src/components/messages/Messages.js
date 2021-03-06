import React from 'react'
import {
    View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard,
    KeyboardAvoidingView
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function Messages() {


    const [loaded] = useFonts({
        poppinsRegular: require("../../assets/fonts/poppinsRegular.ttf"),
        semibold: require("../../assets/fonts/semibold.ttf")
    });
    if (!loaded) {
        return <AppLoading />;
    }
    return (
        <KeyboardAvoidingView enabled={true}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}>
            <View>
                <Text style={styles.textStyle}>Leave a message</Text>
                <View style={styles.txtInputStyle}>
                    <TextInput
                        multiline={true}
                        placeholder="Start typing..."
                        style={styles.textInput}
                        placeholderTextColor="#707070"
                        fontFamily="poppins.regular"
                        returnKeyType="done"
                        editable={true}
                        onSubmitEditing={Keyboard.dismiss}
                    />
                </View>

                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={[styles.textStyle, { color: "#FFFFFF", textAlign: "center" }]}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: "semibold",
        padding: 10,
        marginLeft: wp("2%")
    },
    txtInputStyle: {
        height: hp("25%"),
        borderWidth: 1,
        width: wp("93%"),
        alignSelf: "center",
        borderRadius: 14,
        borderColor: "#707070",
        padding: 10
    },
    textInput: {
        fontWeight: '400',
        fontSize: 14,
    },
    btnContainer: {
        width: wp("95%"),
        alignSelf: "center",
        backgroundColor: "#EAA795",
        borderRadius: 10,
        height: hp("6%"),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp("5%")
    }
})