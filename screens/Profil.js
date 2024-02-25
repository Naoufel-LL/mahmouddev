import { View, Text,SafeAreaView,TextInput,TouchableOpacity,Keyboard,Button,StyleSheet} from 'react-native'
import React from 'react'
import Header from './Header'
import { useState } from 'react';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import Colors from '../constans/Colors';
import { Ionicons } from "@expo/vector-icons";
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth,db} from "../firebase"

const Profil = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  if(fontsLoaded){
    return (
      <View>
        <Header />
        <SafeAreaView style={{width:"100%",marginVertical:15}}>
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20,}}> 
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Myshop")}>
          <Text style={{fontFamily:"Poppins_500Medium",fontSize:15,paddingVertical:10,width:'80%'}}>Myshop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Change_Info")}>
          <Text style={{fontFamily:"Poppins_500Medium",fontSize:15,paddingVertical:10,width:'80%'}}>Change Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Change_Password")}>
          <Text style={{fontFamily:"Poppins_500Medium",fontSize:15,paddingVertical:10,width:'80%'}}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Support")}>
          <Text style={{fontFamily:"Poppins_500Medium",fontSize:15,paddingVertical:10,width:'80%'}}>Support</Text>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width:'100%',
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default Profil