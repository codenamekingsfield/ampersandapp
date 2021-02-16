import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function HomeScreen({navigation}) {
    return ( 
        <View style={styles.container}>
            <View >
              <Image
                    style={styles.chairimage}
                    source={require("../../assets/chair.jpeg")}/>
            </View>

            <View style={styles.title}>
                <Text style={styles.welcometext} style={{ fontFamily: 'San Francisco',fontSize:20 }}> KEEP IN TOUCH WITH THE PEOPLE OF AMPERSTAND</Text>
            </View>
            <View style={styles.title2}>
                <Text style={styles.signintext} style={{ fontFamily: 'San Francisco', fontSize: 18, color:'grey' }}> Sign up or register for ampstand newsletter </Text>
            </View>
            <View style={styles.authenticate}>
                
             <TouchableOpacity style={styles.GetStarted} onPress={() => {navigation.navigate("RegisterScreen")}}>
                <Text style={styles.GetStarted2} style={{ fontFamily: 'San Francisco',fontSize:18 }}>
                      REGISTER
                </Text> 
             </TouchableOpacity>
            
            
                
             <TouchableOpacity style={styles.GetStarted} onPress={() => {navigation.navigate("LogInScreen")}}>
                    <Text style={styles.GetStarted2} style={{ fontFamily: 'San Francisco', fontSize: 18 }} >
                      SIGN IN
                </Text> 
             </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        // alignItems: "center",
        backgroundColor: 'white',
    },
    chairimage: {
        height: 430,
        width:380,
        
        
    },
    title: {
    
        marginHorizontal: 10,
        paddingVertical:10
    },
    welcometext: {
        marginHorizontal:2,
        fontSize: 40,
        fontWeight: '300',
        

        
    },
    signintext: {
        fontSize: 18,
        color:'grey'
        
    },
    title2: {
        marginHorizontal: 10,
        
        
    },
    GetStarted: {
        
        borderBottomWidth: 2,
        padding: 3,
        borderBottomColor:'#FB5D48',
    },
    GetStarted2: {
        fontSize:20
    },
    authenticate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop:210
    }
    

});