import { View, Text,SafeAreaView,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
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
import { useState } from 'react';
import Colors from '../constans/Colors';
import { Ionicons } from "@expo/vector-icons";
import {createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import {auth,db} from "../firebase"
import { collection, addDoc } from "firebase/firestore"; 
console.log(auth)
const Register = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth,email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with:', user.email);
      sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("Email sent to ",email)
  });
      navigation.replace("register2",{email:email,password:password})
    })
    .catch(error => alert(error.message))
  }
  if(fontsLoaded){
    return (
      <SafeAreaView style={{paddingTop:'30%',justifyContent:'center',alignContent:'center',width:"100%",alignItems:"center"}}>
       <Text style={{fontFamily:"Poppins_700Bold",fontSize:25,color:Colors.main}}>
         Enregistrer vous ici!
       </Text>
       <Text style={{fontFamily:"Poppins_600SemiBold",fontSize:15,paddingVertical:10,textAlign:'center',width:'80%'}}>
       Creer un compte pour pouvoir découvrir tous les produits et fonctionalités
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
          placeholder="Entrer Password">
          </TextInput>
          <TouchableOpacity
          onPress={()=>handleSignUp()}
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
            Sign up
          </Text>
        </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.replace("login")}>
       <Text style={{fontFamily:"Poppins_500Medium",fontSize:15,paddingVertical:10,textAlign:'center',width:'80%'}}>
       J'ai déja un compte
         </Text>
       </TouchableOpacity>
       <View
          style={{
            marginVertical: 10 * 3,
          }}
        >

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
             
          </View>
        </View>
       </View>
      </SafeAreaView>
     )
  }
}

export default Register