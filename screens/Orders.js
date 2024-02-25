import { View, Text,TouchableOpacity,ScrollView,ActivityIndicator,Image, Alert} from 'react-native'
import React from 'react'
import { useState,useEffect,useLayoutEffect} from 'react';
import Colors from '../constans/Colors'

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
import ItemCard from '../components/ItemCard';
import {auth,db,storage} from "../firebase"
import {updateDoc,doc } from "firebase/firestore"; 
import { collection, query, where, onSnapshot ,orderBy } from "firebase/firestore";
import OrderItem from '../components/OrderItem';
import Header from './Header'
const Orders = ({navigation}) => {
  const [orders,setOrders]=useState([])
  const [loading,setLoading]=useState(false)

  useLayoutEffect(()=>{
    const list = []
    const q = query(collection(db, "commandes"),where("buyer_id", "==", auth.currentUser.uid),orderBy("status"))
   const unsubscribe = onSnapshot(q, (querySnapshot) => {
 querySnapshot.forEach((doc) => {
  const {
    product_id,
    product_img,
    product_title,
    seller_id,
    seller_pic,
    seller_name,
    buyer_id,
    buyer_tel,
    buyer_adress,
    buyer_codePostal,
    buyer_pic,
    buyer_name,
    quantity,
    buy_time,
    total,
    status
  } = doc.data();
  list.push({
    document_id:doc.id,
    product_id:product_id,
    product_img:product_img,
    product_title:product_title,
    seller_id:seller_id,
    seller_pic:seller_pic,
    seller_name:seller_name,
    buyer_id:buyer_id,
    buyer_tel:buyer_tel,
    buyer_adress:buyer_adress,
    buyer_codePostal:buyer_codePostal,
    buyer_pic:buyer_pic,
    buyer_name:buyer_name,
    quantity:quantity,
    buy_time:buy_time,
    total:total,
    status:status,
  });
 });
 setOrders(list)
 setLoading(true)
});
  },[])
  console.log(orders)
  navigation.setOptions({ tabBarBadge: orders.length})

  const detailOrder = (data) =>{
    Alert.alert("Detail du Commande",`
 Vendeur : ${data.seller_name}

 Quantity: ${data.quantity}

 Total : ${data.total}Dh

 Adress : ${data.buyer_adress}

 Code Postal : ${data.buyer_codePostal}

 Téléphone : ${data.buyer_tel}

 Date du Commande : ${new Date(data.buy_time).toLocaleDateString()}


    `)
}
 
  return (
    <ScrollView>
      {!loading ? 
       <View>
        <ActivityIndicator size={20}/>
       </View>
      : 
      <ScrollView>
       <View style={{justifyContent:"center",alignItems:"center",width:"100%",}}>
          <Header />
          <Text style={{marginVertical:15}}>Mes Orders</Text> 
          {orders.map((data)=>{
              return(
                <TouchableOpacity onPress={()=>detailOrder(data)}>
                <OrderItem data={data}/>
                </TouchableOpacity>
              )
          })}
       </View>
        </ScrollView>
      }
    </ScrollView>
  )
}

export default Orders