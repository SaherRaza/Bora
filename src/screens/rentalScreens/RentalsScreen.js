import React from 'react'
import {
    View, Text, StyleSheet, Image,
    TouchableOpacity, SafeAreaView, StatusBar, ScrollView
} from 'react-native'
import { Divider } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons'
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import TabBar from '../../components/TabBar';


const history = [
    {
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized"
    },
    {
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented"
    },
    {
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented"
    },
    {
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented"
    }
    , {
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented"
    },
    {
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented"
    },
    {
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented"
    },
    {
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented"
    }
    ,
    {
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented"
    }
    ,
    {
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented"
    }
    ,
    {
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented"
    }
]


export default function RentalsScreen({ navigation }) {
    const [activeButton, setActiveButton] = React.useState("Unlock Rack");

    const [ViewDetails, setViewDetails] = React.useState('none');

    const onClick = () => {
        if (ViewDetails === 'none') {
            setViewDetails("flex");
        }
        else {
            setViewDetails('none');
        }
    };

    const [loaded] = useFonts({
        semibold: require("../../assets/fonts/semibold.ttf"),
        poppinsMedium: require("../../assets/fonts/poppinsMedium.ttf"),
    });
    if (!loaded) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#495864" translucent={true} />

            <View style={styles.header}>
                <TouchableOpacity style={styles.headerContainer}>
                    <View>
                        <Image resizeMode="contain"
                            source={require("../../assets/icons/leftIcon.png")}
                            style={styles.iconStyle}
                        />
                    </View>
                    <Text style={styles.txtStyle}>Rental History</Text>

                </TouchableOpacity>

                <View style={styles.msgContainer}>
                    <ScrollView contentContainerStyle={{ paddingBottom: 200 }}
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}>
                        {history.map((item, index) => (
                            <View key={index}>
                                <View>
                                    <View style={styles.subContainer}>
                                        <View>
                                            <Text style={styles.txtStyle1}>{item.location}</Text>
                                            <Text style={styles.txtStyle2}>{item.product}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={onClick} style={styles.iconPosition}>

                                            <Ionicons
                                                name="chevron-down-outline"
                                                size={20}
                                                color="#272E34"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ display: ViewDetails }}>
                                        <View style={styles.detailContainer}>
                                            <View>
                                                <Text style={styles.txtStyle1}>{item.orderDate}</Text>
                                                <Text style={styles.txtStyle2}>Order Date</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.txtStyle1}>{item.orderTime}</Text>
                                                <Text style={styles.txtStyle2}>Order Time</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.txtStyle1}>{item.orderDate}</Text>
                                                <Text style={styles.txtStyle2}>Payment</Text>
                                            </View>
                                        </View>
                                        <View style={styles.btnMainContainer}>
                                            <Buttons
                                                activeButton={activeButton}
                                                setActiveButton={setActiveButton}
                                                text="Help"
                                            />
                                            <Buttons
                                                activeButton={activeButton}
                                                setActiveButton={setActiveButton}
                                                text="Unlock Rack"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <Divider
                                    width={0.5}
                                    orientation="vertical"
                                    color="#495864"
                                />
                            </View>
                        ))}
                    </ScrollView>
                </View>


            </View>
        </SafeAreaView>
    )
}
const Buttons = ({ text, activeButton, setActiveButton }) =>
(
    <TouchableOpacity onPress={() => setActiveButton(text)}
        style={[styles.btnContainer,
        {
            borderWidth: activeButton === text ? 0 : 0.5,
            backgroundColor: activeButton === text ? '#EAA795' : '#FFFFFF',
        }]}>
        <Text style={[styles.btnTextStyle, {
            textAlign: "center",
            color: activeButton === text ? '#FFFFFF' : '#272E34',
        }]}>
            {text}
        </Text>
    </TouchableOpacity>

)


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    header: {
        backgroundColor: "#272E34",
        flex: 1
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center", marginTop: hp("6%"),
        marginLeft: wp("3%"),
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
        marginTop: hp("3%"),

    },
    subContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15
    },
    iconPosition: {
        justifyContent: "center",
        right: 10
    },
    detailContainer: {
        flexDirection: "row", justifyContent: "space-between",
        padding: 15
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
    },
    btnContainer: {
        width: wp("45%"),
        alignSelf: "center",
        borderRadius: 10,
        height: hp("6%"),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp("1%"),
        borderColor: "#272E34"
    },
    btnMainContainer: {
        flexDirection: "row", justifyContent: "space-between",
        padding: 15
    },
    btnTextStyle: {
        fontFamily: "semibold",
        padding: 10
    },
})
