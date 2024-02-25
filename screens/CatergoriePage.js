import { View, Text,TouchableOpacity,ScrollView,ActivityIndicator,TextInput} from 'react-native'
import React from 'react'
import { useState,useEffect,useLayoutEffect} from 'react';
import {auth,db} from '../firebase'
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
  import { collection, query, where, onSnapshot ,orderBy } from "firebase/firestore";
import Colors from '../constans/Colors';
const CatergoriePage = ({navigation,route}) => {
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
  const [focused, setFocused] = useState(false);
  const [search,SetSearch] = useState('')
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
    const categorie = route.params.categorie
    navigation.setOptions({ title: categorie})
    useLayoutEffect(()=>{
        const list = []
        console.log("clear")
        const q = query(collection(db, "produits"),where("product_categorie", "==",categorie),where("owner_id", "!=",auth.currentUser.uid))
       const unsubscribe = onSnapshot(q, (querySnapshot) => {
     querySnapshot.forEach((doc) => {
      const {
        owner_id,
        owner_name,
        owner_pic,
        owner_tel,
        product_title,
        product_time,
        product_price,
        product_img,
        product_desc,
        product_categorie,
        product_city,
        product_stock,
        product_condition,
      } = doc.data();
      list.push({
        owner_id:owner_id,
        owner_name:owner_name,
        product_time:product_time,
        owner_pic:owner_pic,
        owner_tel:owner_tel,
        product_title:product_title,
        product_price:product_price,
        product_img:product_img,
        product_desc:product_desc,
        product_categorie:product_categorie,
        product_city:product_city,
        product_stock:product_stock,
        product_condition:product_condition,
        product_id:doc.id
      });
       console.log(doc.id)
     });
     setProducts(list)
     setLoading(true)
     console.log(products)
    });
      },[])
      let filtred_products = products.filter((data)=>{
        let product_name = data.product_title.toUpperCase();
        let search_name = search.toLocaleUpperCase()
        return product_name.indexOf(search_name) != -1
      })
      if(fontsLoaded){
        return (
          <ScrollView style={{backgroundColor:'#fff'}}>
            {!loading ? 
             <View>
              <ActivityIndicator size={20}/>
             </View>
            : 
            <ScrollView>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <TextInput
        value={search}
        onChangeText={(text)=>SetSearch(text)}
         onFocus={() => setFocused(true)}
         onBlur={() => setFocused(false)}
        style={[
          { fontFamily:"Poppins_400Regular",
          fontSize:15,
          padding: 7 * 2,
          fontSize:17,
          backgroundColor: Colors.back,
          borderRadius: 30,
          marginVertical: 20,width:"90%"},
          focused && {
            borderWidth: 3,
            borderColor: Colors.main,
            shadowOffset: { width: 4, height: 10 },
            shadowColor: Colors.main,
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
        ]} placeholder="Search">
          </TextInput>
              </View>
             <View style={{justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"row",flexWrap:"wrap",}}>
               {filtred_products?.map((data)=>{
                   return(
                    <TouchableOpacity style={{width:"50%"}} onPress={()=>navigation.navigate("ProduitPage",{data:data})}>
                <ItemCard key={data.owner_id} data={data} />
              </TouchableOpacity>
                   )
               })}       
             </View>
              </ScrollView>
            }
          </ScrollView>
        )
       }
}

export default CatergoriePage