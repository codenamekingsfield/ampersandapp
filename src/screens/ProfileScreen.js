import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather, MaterialIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';

export default function MemberScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.profileInfo}>
            <TouchableOpacity  onPress={()=>navigation.navigate("HomeScreen")}>
          <View style={styles.profile}>
            <Image
              source={require("../../assets/passport.jpg")}
              style={styles.image}
            />
            <View style={styles.name}>
              <Text style={styles.bio}>AVE MARIA</Text>
              <Text style={styles.position}>C.T.O</Text>
            </View>
          </View>
          </TouchableOpacity>
  
          <View style={styles.logos}>
            <Image
              source={require("../../assets/twitterlogo.jpeg")}
              style={{ height: 35, width: 35, marginRight: 20 }}
            />
            <Image
              source={require("../../assets/linkedin.jpg")}
              style={styles.logoInfo}
            />
          </View>
  
          <View  style={styles.address}>
            <Feather name="phone" size={20} color="black" />
            <Text style={styles.addressInfo}>034456567</Text>
          </View>
  
          <View style={styles.address}>
            <MaterialIcons name="mail-outline" size={20} color="black" />
            <Text   style={styles.addressInfo}>ave@gmail.com</Text>
          </View>
  
          <View style={styles.address}>
            <SimpleLineIcons name="location-pin" size={20} color="black" />
            <Text style={styles.addressInfo}>NETHERLANDS</Text>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    profileInfo: {
      marginLeft: 30,
    },
    profile: {
      flexDirection: "row",
      marginTop: 50,
    },
    image: {
      borderRadius: 50,
      height: 90,
      width: 90,
    },
    name: {
      marginLeft: 20,
      marginTop: 20,
    },
  
    bio: {
      fontSize: 17,
      marginBottom: 5,
      fontWeight: "bold",
    },
  
    position: {
      fontSize: 15,
    },
  
    logos: {
      flexDirection: "row",
      marginVertical: 30,
    },
  
    logoInfo: {
      height: 40,
      width: 40,
    },
  
    address:{
        flexDirection:"row",
        marginBottom:30
    },
  
    addressInfo:{
      marginLeft:10  
    }
  });
  