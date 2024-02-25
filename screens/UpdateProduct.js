import { View,Text,SafeAreaView,TextInput,TouchableOpacity, ScrollView,Image} from 'react-native'
import {Picker} from '@react-native-picker/picker'
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

import { useState,useLayoutEffect } from 'react';
import Colors from '../constans/Colors';


import {auth,db,storage} from "../firebase"
import { Alert } from 'react-native';
import { doc, getDoc,updateDoc } from "firebase/firestore";

const UpdateProduct = ({navigation,route}) =>{
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
      const [focused3, setFocused3] = useState(false);
      const [focused4, setFocused4] = useState(false);
      const [product,setProduct] = useState({})
      const doc_id = route.params.doc_id

      useLayoutEffect(()=>{
           console.log(doc_id)
           const docRef = doc(db, "produits", doc_id);
           getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setProduct(docSnap.data())
            } else {
            console.log("No Doc");
            }
            })
      },[])
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
const categories =[
    'Sélectioner Catégorie',
    'Beauté',
    'Femme',
    'Homme',
    'Enfant',
    'TV & HITECH',
    'Maison & Cuisin',
    'Informatique',
    'Jeux Vidéo & Consoles',
    'Sport',
    'Acessoires Auto Moto',
    'SuperMarché',
    'Téléphone'
];
const conditions = [
    "Neuf",
    "Occasion - comme neuf",
    "Occasion - bon état",
    "Occasion - assez bon état"
]
const UpdateProductDetails = () =>{
       if(product.product_title == ''){
          Alert.alert("Titre est obligatoire !!")
       }else if(product.product_price == ''){
        Alert.alert("Prix est obligatoire !!")
     }else if(product.product_stock == '' || product.product_stock == '0'){
        Alert.alert("Stock doit etre différent à 0 !!")
     }else{
        const ProductRef = doc(db, "produits", doc_id);
        updateDoc(ProductRef, {
            product_title:product.product_title,
            product_price:product.product_price,
            product_categorie:product.product_categorie,
            product_desc:product.product_desc,
            product_condition:product.product_condition,
            product_city:product.product_city,
            product_stock:product.product_stock
        });
        Alert.alert("Les données du produit ont éte bien enregistré !")
        navigation.replace("Myshop")
     }
}
if(fontsLoaded){
 return(
    <SafeAreaView style={{paddingTop:'10%',justifyContent:'center',alignContent:'center',width:"100%",alignItems:"center"}}>
      <ScrollView style={{width:"100%"}}>
        <Text style={{fontFamily:"Poppins_700Bold",fontSize:25,color:Colors.main,textAlign: 'center'}}>
         Editez votre Article
       </Text>
       <Text style={{fontFamily:"Poppins_600SemiBold",fontSize:15,paddingVertical:10,textAlign:'center',width:'100%'}}>
         Editez les details de ton produit
       </Text>
       <View style={{width:'100%',justifyContent:"center",alignItems:'center',paddingVertical:20}}>
         <TextInput
        required
        value={product.product_title}
        onChangeText={(text)=>setProduct({...product,product_title:text})}
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
        ]}
        maxLength={20}
        placeholder="Titre">
          </TextInput>
          <TextInput
          keyboardType='numeric'
          required
           onFocus={() => setFocused1(true)}
           onBlur={() => setFocused1(false)}
           value={product.product_price}
           onChangeText={(text)=>setProduct({...product,product_price:text})}
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
          maxLength={7}
          placeholder="Prix avec DH">
          </TextInput>
          <View style={{width:"80%",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
      <View style={{flexDirection: 'row', alignItems: 'center' }}>
      <Picker
        placeholder='Select Catégorie'
        selectedValue={product.product_categorie}
        onValueChange={(itemValue, itemIndex) =>
          {setProduct({...product,product_categorie:itemValue});console.log(itemValue)}
        }
        style={{width: "100%",backgroundColor:Colors.back,marginVertical:15,borderRadius:10,padding:32}}
      >
        {categories.map(cat => (
          <Picker.Item key={cat} label={cat} value={cat} />
        ))}
      </Picker>
      </View>
    </View>
          <TextInput
          required
          maxLength={200}
           onFocus={() => setFocused3(true)}
           onBlur={() => setFocused3(false)}
            value={product.product_desc}
          onChangeText={(text)=>setProduct({...product,product_desc:text})}
           style={[
            { fontFamily:"Poppins_400Regular",
            fontSize:15,
            height:150,
            padding:20,
            textAlignVertical: 'top',
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
          multiline={true}
          placeholder="Description">
        </TextInput>
        <View style={{width:"80%",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
        <View style={{flexDirection: 'row', alignItems: 'center' }}>
      <Picker
        placeholder='Condition'
        selectedValue={product.product_condition}
        onValueChange={(itemValue, itemIndex) =>
          {setProduct({...product,product_condition:itemValue});console.log(itemValue)}
        }
        style={{width: "100%",backgroundColor:Colors.back,marginVertical:15,borderRadius:10,padding:32}}
      >
        {conditions.map((condition,itemIndex) => (
          <Picker.Item key={condition} label={condition} value={condition} />
        ))}
      </Picker>
      </View>
        </View>
        
    <View style={{width:"80%",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
      <View style={{flexDirection: 'row', alignItems: 'center' }}>
      <Picker
        placeholder='Ville'
        selectedValue={product.product_city}
        onValueChange={(itemValue, itemIndex) =>
          {setProduct({...product,product_city:itemValue});console.log(itemValue)}
        }
        style={{width: "100%",backgroundColor:Colors.back,marginVertical:15,borderRadius:10,padding:32}}
      >
        {cities.map(city => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>
      </View>
    </View>
    <TextInput
          keyboardType='numeric'
          required
           onFocus={() => setFocused4(true)}
           onBlur={() => setFocused4(false)}
           value={product.product_stock}
          onChangeText={(text)=>setProduct({...product,product_stock:text})}
           style={[
            { fontFamily:"Poppins_400Regular",
            fontSize:15,
            padding: 10 * 2,
            backgroundColor: Colors.back,
            borderRadius: 10,
            marginVertical: 10,width:"80%"},
            focused4 && {
              borderWidth: 3,
              borderColor: Colors.main,
              shadowOffset: { width: 4, height: 10 },
              shadowColor: Colors.main,
              shadowOpacity: 0.2,
              shadowRadius: 10,
            },
          ]}
          maxLength={7}
          placeholder="Stock">
          </TextInput>
          <View style={{width:"80%",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
            
          </View>
      <TouchableOpacity
          onPress={()=>UpdateProductDetails()}
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

export default UpdateProduct