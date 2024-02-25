import { View, Text ,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import Header from './Header'
import CategorieItem from '../components/CategorieItem'
import { getAuth } from 'firebase/auth'
const Categories = ({navigation}) => {
       const categories =[
              {name : 'Beauté',url:'https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Beauty.gif'},
              {name :'Femme',url:'https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Mode-Femme.gif'},
              {name : 'Homme',url:'https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Mode-Homme.gif'},
              {name:'Enfant',url:'https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Mode-Enfant.gif'},
              {name:'TV & HITECH',url:'https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Tvs.gif'},
              {name:'Maison & Cuisin',url:'https://ma.jumia.is/cms/000_2022/z-Middle-Thumbs/300x300-Maison.gif'},
              {name:'Informatique',url:'https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-informatique.gif'},
              {name:'Jeux Vidéo & Consoles',url:'https://ma.jumia.is/cms/000_2022/z-Middle-Thumbs/300x300-copy-7.png'},
              {name:'Sport',url:'https://ma.jumia.is/cms/000_2022/z-Middle-Thumbs/300x300-copy-2.png'},
              {name:'Acessoires Auto Moto',url:'https://ma.jumia.is/cms/000_2022/z-Middle-Thumbs/300x300-copy-5.png'},
              {name:'SuperMarché',url:imgUrl='https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Supermarche.gif'},
              {name:'Téléphone',url:imgUrl='https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Telephone.gif'}
          ];
  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
      <Header />
      <View style={{marginVertical:10,justifyContent:'center',alignItems:'center'}}>
         {categories.map((cat)=>{
              return(
                     <TouchableOpacity key={cat.name} onPress={()=>navigation.navigate("CategoriePage",{categorie:cat.name})}>
                      <CategorieItem imgUrl={cat.url} />
                     </TouchableOpacity>
              )
         })}
      </View>
    </ScrollView>
  )
}

export default Categories