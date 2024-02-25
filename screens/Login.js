import { View, Text,SafeAreaView,TextInput,TouchableOpacity,Keyboard} from 'react-native'
import React from 'react'
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
import {signInWithEmailAndPassword, sendPasswordResetEmail,signOut } from "firebase/auth";
import { collection, query, where, onSnapshot ,orderBy } from "firebase/firestore";
import {auth,db} from "../firebase"
import { Alert } from 'react-native';
const Login = ({navigation}) => {
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
  const [focused, setFocused] = useState(false);
  const [focused1, setFocused1] = useState(false);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState('')

  const resetPassword = () => {
    if(email != null){
      sendPasswordResetEmail(auth, email)
      alert("un mail de modification de mot de passe vous a été envoyer sur votre mail!")

    }else{

      alert("entrer un email valid s'il vous plait!")

    }
  }

  const handleLogin = () => {


    signInWithEmailAndPassword(auth,email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        const q = query(collection(db, "users"),where("email", "==", email))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
       const {
        banned
       } = doc.data();
       console.log(banned)
       if(banned){
        Alert.alert("Votre compte est suspendu ! Veillez contacter le support")
        signOut(auth).then(() => {
        }).catch((error) => {
        });
      }else{
        navigation.replace("home")
      }
      });
     });
        Keyboard.dismiss()
      })
      .catch(error => alert(error.message))
  }

  if(fontsLoaded){
    return (
      <SafeAreaView style={{paddingTop:'30%',justifyContent:'center',alignContent:'center',width:"100%",alignItems:"center"}}>
       <Text style={{fontFamily:"Poppins_700Bold",fontSize:25,color:Colors.main}}>
         Se connecter Ici
       </Text>
       <Text style={{fontFamily:"Poppins_600SemiBold",fontSize:20,paddingVertical:10,textAlign:'center',width:'80%'}}>
         Bienvenue encore vous avez été manqué !
       </Text>

       <View style={{width:'100%',justifyContent:"center",alignItems:'center',paddingVertical:20}}>
        <TextInput
        value={email}
        onChangeText={(text)=>setEmail(text)}
         onFocus={() => setFocused(true)}
         onBlur={() => setFocused(false)}
        style={[
          { fontFamily:"Poppins_400Regular",
          fontSize:15,
          padding: 10 * 2,
          backgroundColor: Colors.back,
          borderRadius: 10,
          marginVertical: 10,width:"80%"},
          focused && {
            borderWidth: 3,
            borderColor: Colors.main,
            shadowOffset: { width: 4, height: 10 },
            shadowColor: Colors.main,
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
        ]} placeholder="Entrer Email">
          </TextInput>
          <TextInput
          value={password}
          onChangeText={(text)=>setPassword(text)}
           onFocus={() => setFocused1(true)}
           onBlur={() => setFocused1(false)}
           style={[
            { fontFamily:"Poppins_400Regular",
            fontSize:15,
            padding: 10 * 2,
            backgroundColor: Colors.back,
            borderRadius: 10,
            marginVertical: 10,width:"80%"},
            focused1 && {
              borderWidth: 3,
              borderColor: Colors.main,
              shadowOffset: { width: 4, height: 10 },
              shadowColor: Colors.main,
              shadowOpacity: 0.2,
              shadowRadius: 10,
            },
          ]}
          secureTextEntry={true}
          placeholder="Entrer Mot de passe">
          </TextInput>
          <TouchableOpacity
          onPress={()=>handleLogin()}
          style={{
            width:'80%',
            padding: 10 * 2,
            backgroundColor: Colors.main,
            marginVertical: 10 * 3,
            borderRadius: 10,
            shadowColor: Colors.main,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              color:'#fff',
              textAlign: "center",
              fontSize: 19,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.replace("register")}>
       <Text style={{fontFamily:"Poppins_500Medium",fontSize:15,paddingVertical:10,textAlign:'center',width:'80%'}}>
           Créer un nouveau compte
         </Text>
       </TouchableOpacity>
       <View
          style={{
            marginVertical: 10 * 3,
          }}
        >
          <TouchableOpacity
          onPress={resetPassword}
          >
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              color: Colors.main,
              textAlign: "center",
              fontSize: 15,
            }}
          >
            Mot de Passe oublié ?
          </Text>
          </TouchableOpacity>

  
        </View>
       </View>
      </SafeAreaView>
     )
  }
}

export default Login