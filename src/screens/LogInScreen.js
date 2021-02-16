import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function LogInScreen() {
    return (
        <View style={styles.mainContainer}>
            <Image source={require('/Users/mac/Desktop/reactnative/AmpersandApp/ampersandapp/assets/officesetup.jpg')} style={styles.image} />

            <Text style={{ fontSize: 15, color: "#ab3d35", marginLeft: 10, marginBottom: 30 }}>Email or Password is incorrect check and try again</Text>

            <View style={{
                flexDirection: "row",
                 alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15,marginBottom:10 }}>Email</Text>
                <TextInput style={{ marginRight: 35,marginBottom:10 }}
                    placeholderTextColor="#aaaaaa"
                    placeholder="magnacarter@gmail.com"
                />
            </View>

            <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:10,marginLeft:15}}></View>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15,marginBottom:10 }}>Password</Text>
                <TextInput style={{ marginRight: 35,marginBottom:10 }}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
            <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:10,marginLeft:15}}></View>

            <View>
                <TouchableOpacity  onPress={() => { }}style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>

            <View>
                <View style={styles.forgotPassword}>
                    <Text style={{ fontSize: 17 }}>Forgot? </Text>
                    <View>
                        <Text style={{ fontSize: 17,marginBottom:5 }}>Reset Password</Text>
                        <View style={{
                            backgroundColor: "#de4f45",
                            height: 2,
                            width: 105,
                            borderRadius: 15,
                        }}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
       
    },
    heading: {
        flexDirection: "row",
        backgroundColor: "red",
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
    },

    image: {
        height: 500,
        width: 500,
        flex: 0.5,
        marginBottom: 40
    },
    buttonContainer: {
        height: 40,
        width: 320,
        backgroundColor: "#de4f45",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        marginLeft: 20,
        marginTop:60,
        marginBottom:20
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
    forgotPassword: {
        flexDirection: "row",
        marginLeft: 20
    }
})