import React from 'react'
import { View, Image, ImageBackground, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function SplashScreen1({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#495864" translucent={true} />

            <ImageBackground
                source={require("../../assets/images/BC1.png")}
                style={{ flex: 1 }}
            >
                <View>
                    <Image resizeMode="contain"
                        source={require("../../assets/icons/logo.png")}
                        style={styles.imageContainer}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: wp("52%"),
        height: hp("10%"),
    }
})