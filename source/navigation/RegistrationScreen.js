import React from 'react'
import {Text,SafeAreaView,StyleSheet,Image,TouchableOpacity, View} from "react-native"
//import AppImages from "../assets/Image/"
import globalStyles from "../globalStyle/globalStyle"
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from "react-native-responsive-screen"
const RegistrationScreen = ({navigation}) => {
    return(
        <>
        <SafeAreaView style={globalStyles.mainContainerStyle}>
            <Image source={require("../assets/Image/group38.png")} style={styles.headerImageStyle}/>
            <Image source={require("../assets/Image/capture.png")} style={styles.centerImage}/>
            <Text style={styles.displayText}>An endeavour to revolutionise showcase of art and artists in every way possible</Text>
            <View style={styles.mainButtonView}>
                <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={()=>navigation.navigate("Profile")}
                >
                    <View style={styles.buttonView}>
                        <Image source={require("../assets/Image/group3Copy.png")} style={styles.buttonImage}/>
                        <Text style={styles.buttonText}>register</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.siderTextStyle}> me as an artist</Text>
            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    
    headerImageStyle:{
        width : wp("100%"),
        height : hp("10%"),
        marginTop : hp("3%"),
        resizeMode : "center",
        right : wp("15%"),
    },
    centerImage:{
        width : wp("100%"),
        height : hp("30%"),
        marginTop : hp("5%"),
    },
    displayText:{
        fontSize:hp("2.4%"),
        textAlign:"center",
        fontFamily:"Barlow-Light",
        marginTop:hp("5%"),
        marginHorizontal:wp("5%")
    },
    buttonImage:{
        height:hp("2%"),
        width:wp("5%"),
        marginHorizontal:wp("5%"),
        marginTop:hp("2%")
    },
    buttonView:{
        flexDirection:"row",
    },
    buttonStyle:{
        backgroundColor:"#ec5151",
        height : hp("6%"),
        width:wp("43%"),
        borderRadius:10
    },
    buttonText:{
        fontSize:hp("3.3%"),
        top:hp("0.2%"),
        fontFamily:"Barlow-Light",
        color:"white"
    },
    mainButtonView:{
        flexDirection:"row",
        marginTop : hp("5%"),
        marginHorizontal:wp("5%"),
        alignSelf:"center",
        //marginHorizontal:wp("10%"),
        //justifyContent:"space-around"
    },
    siderTextStyle:{
        fontSize:hp("3.5%"),
        top:hp("0.5%"),
        fontFamily:"Barlow-Light",
        color:"black"
    }
})

export default RegistrationScreen