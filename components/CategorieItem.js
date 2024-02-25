import { View, Text,Image } from 'react-native'
import React from 'react'
import Colors from '../constans/Colors'

export default function CategorieItem({imgUrl}) {
  return (
    <View style={{position:'relative',flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginVertical:9,width:'90%',height:100,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 3}}>
      <Image 
        source={{uri: imgUrl}}  
        resizeMode='cover'
        style={{width: "100%", height:"100%",borderRadius:10 }} 
    />
    <View style={{width:'100%',height:'100%',position:'absolute',backgroundColor:Colors.main,top:0,left:0,opacity:0.2}}>

    </View>
     </View>
  )
}