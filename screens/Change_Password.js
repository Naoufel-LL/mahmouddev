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
import {signInWithEmailAndPassword, updatePassword  } from "firebase/auth";
import {auth,db} from "../firebase"



const Change_Password = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
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
  const handleChangePassword = () => {

    updatePassword(auth.currentUser, newPassword).then(() => {
      // Update successful.
      console.log('Password changed successfully')
    }).catch((error) => {
      // An error ocurred
      // ...
    });
    navigation.navigate("Profil");

  };

  if(fontsLoaded){
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Edit Account Password</Text>
        <TextInput 
          style={styles.input}
          secureTextEntry
          placeholder="Ancien mot de passe"
          onChangeText={setOldPassword}
        />
        <TextInput
         style={styles.input}
          secureTextEntry
          placeholder="Nouveau mot de passe"
          onChangeText={setNewPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    height:'100%',
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  heading: {
    fontSize: 24,
    fontFamily:"Poppins_500Medium",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.main,
    borderRadius: 5,
    padding: 20,
  },
  buttonText: {
    fontFamily:"Poppins_500Medium",
    color: 'white',
    textAlign: 'center',
  },
});

export default Change_Password;