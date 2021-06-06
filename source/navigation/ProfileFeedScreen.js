import React from 'react'
import {Text,View,SafeAreaView,StatusBar,StyleSheet,Image,ScrollView,FlatList} from "react-native"
import globalStyles from "../globalStyle/globalStyle"
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from "react-native-responsive-screen"
const ProfileScreen = ({navigation}) => {
    const Data = [
        {
        id:1
        },
        {
        id:2
        },
        {
        id:3
        },
        {
        id:4
        },
        {
        id:5
        },
    ]

    const renderItem = () => {
        return(
            <>
                <Image
                    source={require("../assets/Image/profile.png")}
                    style={{width:wp("40%"),height:hp("20%"),marginHorizontal:wp("5%"),marginVertical:hp("5%")}}
                />
            </>
        )
    }
    return(
        <>
        <SafeAreaView style={globalStyles.mainContainerStyle}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image source={require("../assets/Image/TGP2X.png")} style={[styles.imageStyle,{marginLeft:wp("2%")}]}/>
                <Image source={require("../assets/Image/group.png")} style={[styles.imageStyle,{
                    marginLeft:wp("20%"),
                    height:hp("7%"),
                    width:wp("10%"),
                    marginTop: hp("1.2%")
                }
                ]}/>
                <Image source={require("../assets/Image/copy8.png")} style={[styles.imageStyle,{
                    marginLeft:wp("10%"),
                    height:hp("4%"),
                    width:wp("6%"),
                    marginTop: hp("2.3%")
                }
                ]}/>
                <Image source={require("../assets/Image/group4Copy2.png")} style={[styles.imageStyle,{
                    marginLeft:wp("10%"),
                    height:hp("4%"),
                    width:wp("6%"),
                    marginTop: hp("2.3%")
                }
                ]}/>
            </View>
            <View style={[styles.container,{alignSelf:"center"}]}>
                <View>
                    <Image source={require("../assets/Image/group10Copy.png")} style={{
                        //resizeMode:"contain",
                        height:hp("5.5%"),
                        width:wp("10%"),
                        marginTop: hp("5%")
                        }
                    }/>
                    <Text style={styles.buttnTextStyle}>Upload</Text>
                </View>
                <Image source={require("../assets/Image/profile.png")} style={[styles.imageStyle,{
                    marginLeft:wp("10%"),
                    height:hp("15%"),
                    width:wp("30%"),
                    marginTop: hp("2.3%")
                    }
                ]}/>
                <View>
                    <Image source={require("../assets/Image/group6Copy.png")} style={{
                        //resizeMode:"contain",
                        height:hp("5%"),
                        width:wp("10%"),
                        marginLeft:wp("10%"),
                        marginTop: hp("5.7%")
                        }
                    }/>
                    <Text style={[styles.buttnTextStyle,{marginLeft:wp("10%")}]}>Edit</Text>
                </View>
            </View>
            <Text style={[styles.profileTextStyle]}>tanz.arts</Text>
            <View style={[styles.container,{marginTop:hp("5%"),justifyContent:"space-between"}]}>
                <Text style={styles.textStyle}>Artist Dashboard</Text>
                <Image
                    source={require("../assets/Image/shuffle.png")} style={{
                        //resizeMode:"contain",
                        height:hp("5%"),
                        width:wp("20%"),
                        marginRight:wp("3%"),
                        bottom:hp("1%")
                        //marginTop: hp("5.7%")
                        }
                    }
                />
            </View>
            <View
                style={styles.borderStyle}
            />
            <View style={[styles.container,{marginVertical:hp("1%"),justifyContent:"space-around"}]}>
                <Text style={styles.followerStyle}>2.3K</Text>
                <Text style={styles.followerStyle}>50</Text>
                <Text style={styles.followerStyle}>21</Text>
            </View>
            <View style={{justifyContent:"space-around",flexDirection:"row",marginBottom:hp("1%")}}>
                <Text style={[styles.followerStyle,{fontSize:hp("2%")}]}>Followers</Text>
                <Text style={[styles.followerStyle,{fontSize:hp("2%")}]}>Artworks</Text>
                <Text style={[styles.followerStyle,{fontSize:hp("2%")}]}>Exhibition</Text>
            </View>
            <View
                style={styles.borderStyle}
            />
            <View style={[styles.container,{marginTop:hp("5%"),alignSelf:"center"}]}>
                <Image 
                    source={require("../assets/Image/fill1Copy20.png")} 
                    style={{height:hp("3%"),
                    width:wp("8%"),
                    marginRight:wp("2%"),
                    bottom:hp("1%")}}
                />
                <Text style={styles.followerText}>120</Text>
                <Image 
                    source={require("../assets/Image/fill1Copy45.png")} 
                    style={{height:hp("3%"),
                    width:wp("7%"),
                    marginRight:wp("3%"),
                    bottom:hp("1%")}}
                />
                <Text style={styles.followerText}>43k</Text>
                <Image 
                    source={require("../assets/Image/group3Copy18.png")} 
                    style={{height:hp("3.5%"),
                    width:wp("7%"),
                    marginRight:wp("3%"),
                    bottom:hp("1%")}}
                />
                <Text style={styles.followerText}>2.3k</Text>
            </View>
            <Image source={require("../assets/Image/bitmap.png")} style={styles.palletteStyle}/>
            <View style={[styles.container,{justifyContent:"space-around"}]}>
                <View>
                    <Image source={require("../assets/Image/group1_Copy.png")} style={{
                        height:hp("4.5%"),
                        width:wp("8%"),
                    }}/>
                    <Text style={{color:"black",right:wp("3%"),marginTop:hp("0.5%")}}>Uploads</Text>
                    
                </View>
                <View>
                    <Image source={require("../assets/Image/group-6-Copy.png")} style={{
                            height:hp("4%"),
                            width:wp("8/5%"),
                        }}/>
                    <Text style={{color:"grey",right:wp("3%"),marginTop:hp("0.5%")}}>Exhibition</Text>
                </View>
                <View>
                    <Image source={require("../assets/Image/group_3_copy.png")} style={{
                        height:hp("4%"),
                        width:wp("8.5%"),
                    }}/>
                     <Text style={{color:"grey",right:wp("3%"),marginTop:hp("0.5%")}}>Revenue</Text>
                </View>
            </View>
            <View
                style={{
                    borderWidth:2,
                    borderColor: "#ffb500",
                    width:wp("18%"),
                    marginLeft:wp("5%")
                }}
            />
            <FlatList
                data={Data}
                keyExtractor={({id})=> id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={()=>{
                    return renderItem()
                }}
            />
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        marginTop:hp("0.7%")
    },
    imageStyle:{
        height:hp("10%"),
        width:wp("30%"),
        resizeMode:"contain"
    },
    buttnTextStyle:{
        fontFamily:"Barlow-Light",
        color:"#597ddf",
        marginTop:hp("2%")
    },
    profileTextStyle:{
        fontFamily:"Barlow-Light",
        color:"black",
        fontSize:hp("5%"),
        marginTop:hp("2%"),
        alignSelf:"center",
        //fontWeight:"800"
    },
    textStyle:{
        marginLeft:wp("5%")
    },
    borderStyle:{
        borderWidth:0.5,
        marginHorizontal:wp("5%"),
        borderColor : "#d8d8d8"
    },
    followerStyle:{
        fontSize:hp("3%"),
        fontFamily:"Barlow-Light"
    },
    palletteStyle:{
        width:wp("90%"),
        marginHorizontal:wp("5%"),
        height:hp("10%"),
        //alignSelf:"center",
        resizeMode:"contain"
    },
    followerText:{
        fontSize:hp("2.3%"),
        marginHorizontal:wp("1%"),
        bottom:hp("1%")}
    
})

export default ProfileScreen