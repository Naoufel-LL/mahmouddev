import { View,Text,SafeAreaView,TextInput,TouchableOpacity, ScrollView,Image} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react'
import {updateProfile,sendEmailVerification} from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
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
import {signInWithEmailAndPassword} from "firebase/auth"
import * as ImagePicker from 'expo-image-picker';

import {auth,db,storage} from "../firebase"
import { collection, addDoc,setDoc,getDoc,doc,updateDoc } from "firebase/firestore"; 
import { Alert } from 'react-native';
const Register2 = ({navigation,route}) =>{
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
      const [firstName,setFirstName] = useState('')
      const [lastName,setLastName] = useState('')
      const [phone,setPhone] = useState(0)
      const [adress,setAdress] = useState('')
      const [selectedCity, setSelectedCity] = useState('');
      const [date, setDate] = useState(new Date());
      const [showPicker, setShowPicker] = useState(false);
      const [image, setImage] = useState("https://mui.com/static/images/avatar/1.jpg");
      const [imageUrl, setImageUrl] = useState("https://mui.com/static/images/avatar/1.jpg");
      const [dateText,setDateText] = useState("Date de Naissance")
      const [uploading, setUploading] = useState(false)
      const onChangeDate = (event, selectedDate) => {
        setShowPicker(false);
        if (selectedDate) {
          setDate(selectedDate);
          console.log(selectedDate.toLocaleDateString())
          setDateText(selectedDate.toLocaleDateString())
        }
      };
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
         /** @type {any} */
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
    });
  }
);
      }
const cities = [
  'Select City',
  'Agadir',
  'Ait Melloul',
  'Al Hoceima',
  'Azemmour',
  'Azrou',
  'Beni Mellal',
  'Benslimane',
  'Berkane',
  'Berrechid',
  'Bouskoura',
  'Casablanca',
  'Chefchaouen',
  'Dakhla',
  'El Jadida',
  'Errachidia',
  'Essaouira',
  'Fès',
  'Fnideq',
  'Guelmim',
  'Ifrane',
  'Kénitra',
  'Khemisset',
  'Khouribga',
  'Ksar El Kebir',
  'Laâyoune',
  'Larache',
  'Marrakech',
  'Meknès',
  'Midelt',
  'Mohammédia',
  'Nador',
  'Ouarzazate',
  'Oued Zem',
  'Oujda',
  'Rabat',
  'Safi',
  'Sale',
  'Sefrou',
  'Settat',
  'Sidi Bennour',
  'Sidi Ifni',
  'Sidi Kacem',
  'Sidi Slimane',
  'Skhirat',
  'Souk El Arbaa',
  'Tanger',
  'Tan-Tan',
  'Taounate',
  'Taourirt',
  'Taroudant',
  'Taza',
  'Témara',
  'Tétouan',
  'Tiflet',
  'Tinghir',
  'Tiznit',
  'Youssoufia',
];
const email = route.params.email
const password = route.params.password
const handleSignUp =  () =>{
     if(firstName != '' && lastName != '' && adress != '' && selectedCity != 'Select City' && validerTel(phone)){       
      signInWithEmailAndPassword(auth,email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
          const docRef = addDoc(collection(db, "users"), {
            auth_id:user.uid,
            email: email,
            firstName:firstName,
            lastName:lastName,
            adress:adress,
            phone:phone,
            city:selectedCity,
            birth:date,
            profilPic:imageUrl,
            verified: false,
            banned:false
          });
          console.log("Document written with ID: ", docRef.id);
          updateProfile(auth.currentUser, {
            displayName: firstName + ' ' + lastName, photoURL: imageUrl,phoneNumber : phone
          }).then(() => {
            console.log("updated",phone)
              // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
           TriggerStats();
          setTimeout(function () {
               navigation.replace("home")
            }, 5000);         
        })
        .catch(error => alert(error.message))    
     }else{
         Alert.alert("Error")
     }
     
}
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
const TriggerStats = async () =>{
  const docRef = doc(db, "stats",`${new Date().toLocaleDateString("es-CL")}`);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  updateDoc(docRef, {
    newusers: docSnap.data().newusers + 1 ,
});
} else {
  console.log("No such document!");
  setDoc(doc(db, "stats",`${new Date().toLocaleDateString("es-CL")}`), {
    date:`${new Date().toLocaleDateString("es-CL")}`,
    total:0,
    nbrCommande:0,
    newusers:1,
    newproduct:0,
  });
}
}
if(fontsLoaded){
 return(
    <SafeAreaView style={{paddingTop:'10%',justifyContent:'center',alignContent:'center',width:"100%",alignItems:"center"}}>
      <ScrollView style={{width:"100%"}}>
        <Text style={{fontFamily:"Poppins_700Bold",fontSize:25,color:Colors.main,textAlign: 'center'}}>
        Enregistrer vous ici!
       </Text>
       <Text style={{fontFamily:"Poppins_600SemiBold",fontSize:15,paddingVertical:10,textAlign:'center',width:'100%'}}>
         Remplissez le formulaire pour s'enregistrer
       </Text>
       <View style={{width:'100%',justifyContent:"center",alignItems:'center',paddingVertical:20}}>
       {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }}></Image>}
         <TouchableOpacity onPress={()=>{pickImage()}}>
          <View style={{padding:10,backgroundColor:Colors.main,marginVertical:10,borderRadius:5}}>
          <Text style={{fontFamily:"Poppins_400Regular",color:'#fff'}}>Uploader votre Image</Text>
          </View>
         </TouchableOpacity>
         <TextInput
        required
        value={firstName}
        onChangeText={(text)=>setFirstName(text)}
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
        ]} placeholder="Entrer votre Prenom">
          </TextInput>
          <TextInput
          required
           onFocus={() => setFocused1(true)}
           onBlur={() => setFocused1(false)}
          value={lastName}
          onChangeText={(text)=>setLastName(text)}
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
          placeholder="Entrer votre Nom">
          </TextInput>
          <TextInput
          required
           onFocus={() => setFocused2(true)}
           onBlur={() => {setFocused2(false);validerTel(phone)}}
          value={phone}
          onChangeText={(text)=>setPhone(text)}
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
          placeholder="Entrer votre GSM">
          </TextInput>
          <TextInput
          required
           onFocus={() => setFocused3(true)}
           onBlur={() => setFocused3(false)}
          value={adress}
          onChangeText={(text)=>setAdress(text)}
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
          placeholder="Entrer votre Adresse">
        </TextInput>
      
    <View style={{width:"80%",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
      <View style={{flexDirection: 'row', alignItems: 'center' }}>
      <Picker
        placeholder='Selecter une ville'
        selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) =>
          {setSelectedCity(itemValue);console.log(itemValue)}
        }
        style={{width: "100%",backgroundColor:Colors.back,marginVertical:15,borderRadius:10,padding:32}}
      >
        {cities.map(city => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>
      </View>
    </View>
      <TouchableOpacity style={{width:"80%",backgroundColor:Colors.back,padding:20,borderRadius:10,marginVertical:10}} onPress={() => setShowPicker(true)}>
        <Text style={{fontFamily:"Poppins_400Regular"}}>{dateText}</Text>
      </TouchableOpacity>
      {showPicker && 
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
          onChange={onChangeDate}
        />
      }
      <TouchableOpacity
          onPress={()=>handleSignUp()}
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
             Continuer
          </Text>
        </TouchableOpacity>
      
          
    
          
        </View>
        </ScrollView>
    </SafeAreaView>
 )
 }
 }


export default Register2