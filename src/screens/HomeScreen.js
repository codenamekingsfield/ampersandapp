import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';






export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View>
              <Image
                    style={styles.Ampersandimage}
                    source={require("/Users/mac/Desktop/reactnative/AmpersandApp/ampersandapp/assets/ampersand1.png")}/>
            </View>

            <View>
                <Text style={styles.Ampersandheader}> AMPERSAND </Text>
                <Text style={styles.Ampersandheader}> CONTACTS </Text>
            </View>

            <View>
                
             <TouchableOpacity style={styles.GetStarted} onPress={()=>navigation.navigate("AuthenticationScreen")}>
                <Text style={styles.GetStarted2} >
                      GET STARTED
                </Text> 
             </TouchableOpacity>
            </View>

        </View>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: 'white',
        paddingVertical:90
    },
    Ampersandimage: {
        height:70,
        resizeMode:'contain'
    },
    Ampersandheader: {
        fontSize: 30,
        fontWeight:'400',
        textAlign: "center",

    },
    GetStarted: {
        
        borderBottomWidth: 2,
        borderBottomColor:'red',
    },
    GetStarted2: {
        fontSize:23
    }


});