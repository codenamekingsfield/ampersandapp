import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function RegisterScreen({navigation}) {
    return (
        <ScrollView style={styles.Container}>

            <Image source={require('/Users/mac/Desktop/reactnative/AmpersandApp/ampersandapp/assets/officesetup.jpg')} style={styles.image} />

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold",marginBottom:10,marginLeft:15}}>Full Name</Text>
                <TextInput style={{ marginRight: 35,marginBottom:10 }}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Richie Carter"
                />
            </View>

            <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:20,marginLeft:15}}></View>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold",marginBottom:10,marginLeft:15}}>Email</Text>
                <TextInput style={{ marginRight: 35,marginBottom:10 }}
                    placeholderTextColor="#aaaaaa"
                    placeholder="magnacarter@gmail.com"
                    secureTextEntry={true}
                />
            </View>

            <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:20,marginLeft:15}}></View>
            
            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold",marginBottom:10,marginLeft:15}}>Phone Number</Text>
                <TextInput style={{ marginRight: 35,marginBottom:10 }}
                    placeholderTextColor="#aaaaaa"
                    placeholder="+233 62656720"
                    secureTextEntry={true}
                />
            </View>

            <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:20,marginLeft:15}}></View>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold",marginBottom:10,marginLeft:15}}>Role</Text>
                <TextInput style={{ marginRight: 35,marginBottom:10 }}
                    placeholderTextColor="#aaaaaa"
                    placeholder="CTO"
                    secureTextEntry={true}
                />
            </View>

            <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:20,marginLeft:15}}></View>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold",marginBottom:10,marginLeft:15}}>Twitter</Text>
                <TextInput style={{ marginRight: 35,marginBottom:10,marginLeft:10 }}
                    placeholderTextColor="#aaaaaa"
                    placeholder="@magnac"
                    secureTextEntry={true}
                />
            </View>

            <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:20,marginLeft:15}}></View>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{fontWeight:"bold",marginBottom:10,marginLeft:15}}>LinkedIn</Text>
                <TextInput style={{ marginRight: 35,marginBottom:10 }}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Magna Carter"
                    secureTextEntry={true}
                />
            </View>

            <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:20,marginLeft:15}}></View>
            
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => { navigation.navigate("ScanScreen") }}
                style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        
    },
    heading: {
        flexDirection: "row",
        backgroundColor: "#FFD8B9",
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
    },

    image: {
        height: 370,
        width: "100%",
        // flex: 0.5,
        marginBottom:15
    },
    buttonContainer: {
        height: 40,
        width: 320,
        backgroundColor: "#de4f45",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        marginLeft:20
    },
    buttonText: {
        color: "white",
        fontSize: 17,
    },
footer:{
    marginBottom:50
}
})
