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
import {auth} from '../firebase'
export default function OrderItem({data}) {
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
            <View style={{flexDirection:'row',padding:5,margin:10,width:"80%",backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 3,alignItems:"center"}}>
                 <Image resizeMode='contain' style={{width:'50%',height:150}} source={{uri : data.product_img}}></Image>
                 <View style={{padding:10,width:'70%'}}>
                 <Text style={{fontFamily:"Poppins_600SemiBold",fontSize:17}}>{data.product_title}</Text>
                 {auth.currentUser.uid != data.seller_id  ? <Text style={{fontFamily:"Poppins_400Regular",fontSize:15}}>Vendeur  : {data.seller_name}</Text>
            : <Text style={{fontFamily:"Poppins_400Regular",fontSize:15}}>Client  : {data.buyer_name}</Text>}
                 <Text style={{fontFamily:"Poppins_400Regular",fontSize:15}}>Quantité  : x{data.quantity}</Text>
                 <Text style={{fontFamily:"Poppins_400Regular",fontSize:15}}>Total  : {data.total}DH</Text>
                 {data.status ? <Text style={{fontFamily:"Poppins_400Regular",fontSize:15,color:'green'}}>Statut : Livré <Ionicons name="md-checkmark" size={15} ></Ionicons></Text> : <Text style={{fontFamily:"Poppins_400Regular",fontSize:15,color:'red'}}>Statut : Non Livré <Ionicons name="alert-circle" size={15} ></Ionicons></Text>}
                 </View>
             </View>
      )
   }
}