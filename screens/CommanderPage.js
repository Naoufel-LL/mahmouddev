import { View,Text,SafeAreaView,TextInput,TouchableOpacity, ScrollView,Image} from 'react-native'
import {Picker} from '@react-native-picker/picker'

import React from 'react'
import { useState } from 'react';
import Colors from '../constans/Colors';
import { Alert } from 'react-native';
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
import {auth,db,storage} from "../firebase"
import { collection, addDoc,doc,getDoc,updateDoc,setDoc } from "firebase/firestore"; 
const CommanderPage = ({route,navigation}) => {
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
  const [phone,setPhone] = useState(0)
  const [quantity,setQuantity] = useState(0)
  const [adress,setAdress] = useState('')
  const [codepostal,setCodePostal] = useState(0)
  

  function validerTel(telephone) {
    var pattern = /^0[67][0-9]{8}$/;
  
    if (!pattern.test(telephone)) {
      Alert.alert("Numéro à 10 chiffres sans espace et commençant par 06 ou 07");
      return false;
    }
  
    return true;
  }

const data = route.params.data
console.log(auth.currentUser.phoneNumber)
const ITEM_PRICE = data.product_price; 
  const totalPrice = quantity * ITEM_PRICE;
  function maxQuantity(q) {
    if (q > 0 && q <= Number(data.product_stock)){
       return true;
    }
    Alert.alert(`Vous avez saisi ${q} ,la quantité doit etre supérieur à 0 et inférieur à ${data.product_stock}`);      
       return false; 
}
const handleCommander = () => {
  Alert.alert(
    'Commander Ce Produit',
    `Tu es sur ? Total est ${totalPrice}Dh pour ${quantity} ${data.product_title}
    `,
    [
      {
        text: 'Annuler',
        onPress: () => console.log('Cancel Pressed!'),
        style: 'cancel',
      },
      {
        text: 'Confirmer',
        onPress: () => Commander(),
      },
    ],
    {cancelable: false},
  );
};
const Commander = () =>{
     if(validerTel(phone) && maxQuantity(quantity) && adress != '' && codepostal != 0){
      const docRef = addDoc(collection(db, "commandes"), {
         product_id:data.product_id,
         product_img:data.product_img,
         product_title:data.product_title,
         seller_id:data.owner_id,
         seller_pic:data.owner_pic,
         seller_name:data.owner_name,
         buyer_id:auth.currentUser.uid,
         buyer_tel:phone,
         buyer_adress:adress,
         buyer_codePostal:codepostal,
         buyer_pic:auth.currentUser.photoURL,
         buyer_name:auth.currentUser.displayName,
         quantity:quantity,
         buy_time:Date.now(),
         total:totalPrice,
         status:false,
    });

    console.log("Document written with ID: ", docRef.id);
    console.log("Commande Added")
    Alert.alert("Commande Bien Ajouté !")
    TriggerStats();
    navigation.replace("home")
     }else{
        Alert.alert("Erreur ! Veillez bien remplir le formulaire")
     }
}
const TriggerStats = async () =>{
  const docRef = doc(db, "stats",`${new Date().toLocaleDateString("es-CL")}`);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data().total);
  updateDoc(docRef, {
    total: docSnap.data().total + totalPrice ,
    nbrCommande : docSnap.data().nbrCommande + 1
});
} else {
  console.log("No such document!");
  setDoc(doc(db, "stats",`${new Date().toLocaleDateString("es-CL")}`), {
    date:`${new Date().toLocaleDateString("es-CL")}`,
    total:totalPrice,
    nbrCommande:1,
    newusers:0,
    newproduct:0,
  });
}

}
  if(fontsLoaded){
    return (
      <ScrollView>
         <View style={{width:'100%',justifyContent:"center",alignItems:'center',paddingVertical:20}}>
         <Text style={{fontFamily:"Poppins_700Bold",fontSize:25,color:Colors.main,textAlign: 'center'}}>
         Commander
       </Text>
       <View style={{alignItems:'center',justifyContent:'center',width:'90%',height:200,flexDirection:"row",backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 3}}>
         <Image resizeMode='contain' source={{uri: data.product_img}}  style={{width:"40%",height:"100%"}}  />
         <View style={{padding:10,width:'40%'}}>
          <Text  style={{fontFamily:"Poppins_700Bold"}}>{data.product_title}</Text>
          <Text style={{fontFamily:"Poppins_400Regular"}}>{data.product_desc}</Text>
          <Text style={{fontFamily:"Poppins_400Regular"}}>Stock : {data.product_stock}</Text>
          <Text style={{fontFamily:"Poppins_400Regular"}}>Prix : {data.product_price}</Text>
         </View>
       </View>
       <Text style={{fontFamily:"Poppins_600SemiBold",fontSize:15,paddingVertical:10,textAlign:'center',width:'100%'}}>
         Fill the form to Order
       </Text>
         <TextInput
            keyboardType='numeric'
            required
             onFocus={() => setFocused(true)}
             value={quantity}
             onChangeText={(text)=>{setQuantity(text)}}
             onBlur={() => {setFocused(false);maxQuantity(quantity)}}
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
            ]}
            maxLength={7}
            placeholder="Quantiy">
            </TextInput>
            <TextInput
          required
           onFocus={() => setFocused1(true)}
           onBlur={() => {setFocused1(false);validerTel(phone)}}
          value={phone}
          onChangeText={(text)=>setPhone(text)}
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
          keyboardType='numeric'
          placeholder="Enter Your Phone Number">
          </TextInput>
            <TextInput
            required
             onFocus={() => setFocused2(true)}
             onBlur={() => setFocused2(false)}
             value={adress}
             onChangeText={(text)=>setAdress(text)}
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
            placeholder="Votre Adress Complet">
            </TextInput>
            <TextInput
            keyboardType='numeric'
            required
             onFocus={() => setFocused3(true)}
             onBlur={() => setFocused3(false)}
             value={codepostal}
             onChangeText={(text)=>setCodePostal(text)}
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
            maxLength={7}
            placeholder="Code Postal"></TextInput>
            <Text></Text>
            <Text style={{fontFamily:"Poppins_700Bold"}}>Total à Payer : {totalPrice} DH</Text>
             <TouchableOpacity
           onPress={()=>{handleCommander()}}
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
             Commander
          </Text>
        </TouchableOpacity>
         </View>
      </ScrollView>
      
    )
  }
}

export default CommanderPage