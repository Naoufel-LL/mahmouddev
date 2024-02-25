import { View,Text,SafeAreaView,TextInput,TouchableOpacity, ScrollView,Image} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react'
import {updateProfile,sendEmailVerification} from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {query, where, onSnapshot ,orderBy } from "firebase/firestore";
import { useLayoutEffect } from 'react';
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
import {signInWithEmailAndPassword} from "firebase/auth"
import * as ImagePicker from 'expo-image-picker';

import {auth,db,storage} from "../firebase"
import { collection, updateDoc,doc } from "firebase/firestore"; 
import { Alert } from 'react-native';
const Change_Info = ({navigation,route}) =>{
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
      const [focused2, setFocused2] = useState(false);
      const [focused3, setFocused3] = useState(false);
      const [thisUser,setThisUser] = useState([])
      const [uploading, setUploading] = useState(false)
      const [image,setImage]=useState("")
      const [imageUrl,setImageUrl] = useState("")
     const [docId,setDocId] = useState("")
      function validerTel(telephone) {
        var pattern = /^0[67][0-9]{8}$/;
      
        if (!pattern.test(telephone)) {
          Alert.alert("Numéro à 10 chiffres sans espace et commençant par 06 ou 07");
          return false;
        }
      
        return true;
      }

      const uploadImage = async (imagepic) => {
        const Imageblob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            resolve(xhr.response);
          };
          xhr.onerror = function() {
            reject(new TypeError('Network request failed'));
          };
          xhr.responseType = 'blob';
          xhr.open('GET', imagepic, true);
          xhr.send(null);
        });
        // Create the file metadata
const metadata = {
  contentType: 'image/jpeg'
};
// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, 'profiles/' + Date.now());
const uploadTask = uploadBytesResumable(storageRef, Imageblob, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      setImageUrl(downloadURL)
      console.log(imageUrl)
    })
  }
);
      }


useLayoutEffect(()=>{
  const q = query(collection(db, "users"),where("email", "==",auth.currentUser.email))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
querySnapshot.forEach((doc) => {
  console.log(doc.data())
  setDocId(doc.id)
  setThisUser(doc.data())
  setImageUrl(doc.data().profilPic)
});
console.log(thisUser)
});
},[])

const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
    console.log(image)
    uploadImage(result.assets[0].uri)
  }
};
const saveProfile = ()  => {
  console.log(docId)
  const UserRef = doc(db, "users", docId);
  updateDoc(UserRef, {
      firstName : thisUser.firstName,
      lastName : thisUser.lastName,
      phone : thisUser.phone,
      adress: thisUser.adress,
      profilPic:imageUrl
  });
  updateProfile(auth.currentUser, {
    displayName: thisUser.firstName + ' ' + thisUser.lastName, photoURL: imageUrl,phoneNumber : thisUser.phone
  }).then(() => {
    console.log("updated",phone)
      // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
  Alert.alert("Vos données ont éte bien enregistré !")
  navigation.replace("home")
}
if(fontsLoaded){
 return(
    <SafeAreaView style={{paddingTop:'10%',justifyContent:'center',alignContent:'center',width:"100%",alignItems:"center"}}>
    <ScrollView style={{width:"100%"}}>
        <Text style={{fontFamily:"Poppins_700Bold",fontSize:25,color:Colors.main,textAlign: 'center'}}>
         Update Profile
       </Text>
       <Text style={{fontFamily:"Poppins_600SemiBold",fontSize:15,paddingVertical:10,textAlign:'center',width:'100%'}}>
         Fill the form to update
       </Text>
       <View style={{width:'100%',justifyContent:"center",alignItems:'center',paddingVertical:20}}>
       {thisUser.profilPic && <Image source={{ uri: imageUrl}} style={{ width: 100, height: 100 }}></Image>}
         <TouchableOpacity onPress={()=>{pickImage()}}>
          <View style={{padding:10,backgroundColor:Colors.main,marginVertical:10,borderRadius:5}}>
          <Text style={{fontFamily:"Poppins_400Regular",color:'#fff'}}>Upload Your Image</Text>
          </View>
         </TouchableOpacity>
         <TextInput
        required
        value={thisUser.firstName}
        onChangeText={(txt) => setThisUser({...thisUser, firstName: txt})}
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
        ]} placeholder="Enter Your FirstName">
          </TextInput>
          <TextInput
          required
           onFocus={() => setFocused1(true)}
           onBlur={() => setFocused1(false)}
          value={thisUser.lastName}
          onChangeText={(txt) => setThisUser({...thisUser, lastName: txt})}
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
          placeholder="Enter Your LastName">
          </TextInput>
          <TextInput
          required
           onFocus={() => setFocused2(true)}
           onBlur={() => {setFocused2(false);validerTel(thisUser.phone)}}
          value={thisUser.phone}
        onChangeText={(txt) => setThisUser({...thisUser, phone: txt})}
           style={[
            { fontFamily:"Poppins_400Regular",
            fontSize:15,
            padding: 10 * 2,
            backgroundColor: Colors.back,
            borderRadius: 10,
            marginVertical: 10,width:"80%"},
            focused2 && {
              borderWidth: 3,
              borderColor: Colors.main,
              shadowOffset: { width: 4, height: 10 },
              shadowColor: Colors.main,
              shadowOpacity: 0.2,
              shadowRadius: 10,
            },
          ]}
          keyboardType='numeric'
          placeholder="Enter Your Phone Number">
          </TextInput>
          <TextInput
          required
           onFocus={() => setFocused3(true)}
           onBlur={() => setFocused3(false)}
          value={thisUser.adress}
          onChangeText={(txt) => {setThisUser({...thisUser, adress: txt});console.log(thisUser)}}
           style={[
            { fontFamily:"Poppins_400Regular",
            fontSize:15,
            padding: 10 * 2,
            backgroundColor: Colors.back,
            borderRadius: 10,
            marginVertical: 10,width:"80%"},
            focused3 && {
              borderWidth: 3,
              borderColor: Colors.main,
              shadowOffset: { width: 4, height: 10 },
              shadowColor: Colors.main,
              shadowOpacity: 0.2,
              shadowRadius: 10,
            },
          ]}
          placeholder="Enter Your Adresse">
        </TextInput>
      <TouchableOpacity
         onPress = {()=>saveProfile()}
          style={{
            width:'70%',
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
             Save
          </Text>
        </TouchableOpacity>
      
          
    
          
        </View>
        </ScrollView>
    </SafeAreaView>
 )
 }
 }


export default Change_Info