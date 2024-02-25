import { View, Text ,Image,TouchableOpacity} from 'react-native'
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
import Colors from '../constans/Colors';
import { Ionicons } from "@expo/vector-icons";
export default function ItemCard({data}) {
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
            <View style={{padding:5,margin:10,width:"90%",backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 3,}}>
                 <Image resizeMode='cover' style={{width:'100%',height:180}} source={{uri : data.product_img}}></Image>
                 <View style={{padding:10}}>
                 <Text style={{fontFamily:"Poppins_600SemiBold",fontSize:18}}>{data.product_price} DH</Text>
                    <Text style={{fontFamily:"Poppins_400Regular",fontSize:15}}>{data.product_title}</Text>
                    <Text style={{fontFamily:"Poppins_400Regular",fontSize:15,color:"grey"}}><Ionicons name="list"></Ionicons> {data.product_categorie}</Text>
                    <Text style={{fontFamily:"Poppins_400Regular",fontSize:15,color:Colors.main}}><Ionicons name="pin"></Ionicons>{data.product_city}</Text>
                    
                 </View>
             </View>
      )
   }
}