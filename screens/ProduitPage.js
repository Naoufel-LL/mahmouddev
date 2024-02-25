import { View, Text,Image,StyleSheet, Modal,TextInput,KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constans/Colors'
import moment from 'moment';
import {Picker} from '@react-native-picker/picker'
import {auth,db,storage} from "../firebase"
import { doc, deleteDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { Ionicons,FontAwesome } from "@expo/vector-icons";
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
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
const ProduitPage = ({navigation,route}) => {
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
      
const data = route.params.data
navigation.setOptions({ title: data.product_title})
console.log(data)
const dateTimeAgo = moment(new Date(data.product_time)).fromNow();
const [modal,setModal]=useState(false)
const [reason,setReason] = useState("")
const [comment,setComment]=useState("")
const [focused,setFocused]=useState(false)

const reports = [
     "Description inexacte",
     "Promotion d'une entreprise",
     "Aucune intention de vendre",
     "Vente d'armes ou de drogues",
     "Contenu sexuel ou produit pour adultes",
     "Discrimination",
     "Contenu dangereux",
     "Arnaque"
] 
  const sendReport = (id,image,title) =>{
    const docRef = addDoc(collection(db, "reports"), {
      user_id:auth.currentUser.uid,
      user_name : auth.currentUser.displayName,
      user_pic : auth.currentUser.photoURL,
      report_time:Date.now(),
      report_reason:reason,
      report_comment:comment,
      product_id:id,
      product_img:image,
      product_title:title
  });
  console.log("Document written with ID: ", docRef.id);
  console.log("Report Sent")
  Alert.alert("Votre Signal a été envoyé en success !!")
  setModal(false)
  setComment("")
  }
  const deletePoduct = (id) =>{
    deleteDoc(doc(db, "produits", id));
    Alert.alert("Le produit a été supprimé !")
    navigation.replace("Myshop")
   }

 const handleDeleteProduct = (id) =>{
    Alert.alert(
      'Supprimer Produit',
     `Voulez-vous supprimer ce produit ?
     `,
       [
         {
           text: 'Annuler',
           onPress: () => console.log('Cancel Pressed!'),
           style: 'cancel',
         },
         {
           text: 'Confirmer',
           onPress: () => deletePoduct(id),
         },
       ],
       {cancelable: false},
     );
   
 };
 if(fontsLoaded){
    return (
        <ScrollView>
            <View style={styles.container}>
        <Image
          source={{ uri: data.product_img }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
           <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
           <Text style={styles.title}>{data.product_title}</Text>
            {auth.currentUser.uid != data.owner_id ? <TouchableOpacity onPress={()=>setModal(true)}>
           <Ionicons  name="alert-circle-outline" color="red" size={25} />
            </TouchableOpacity> : 
            <View style={{flexDirection:"row"}}>
               <TouchableOpacity style={{paddingRight:8}} onPress={()=>navigation.navigate("UpdateProduit",{doc_id:data.document_id})}>
             <Ionicons  name="create" color="orange" size={25} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>handleDeleteProduct(data.document_id)}>
           <Ionicons  name="trash-bin" color="red" size={25} />
            </TouchableOpacity>
            
              </View>
            }
           </View>
           <Modal visible={modal} transparent={true} animationType="fade">
             <KeyboardAvoidingView>
             <View  style={{height:'100%',justifyContent:'center',alignItems:'center'}}>
              <View style={{width:'90%',backgroundColor:Colors.back,height:400,alignItems:'center',justifyContent:'center',borderTopLeftRadius:10,borderTopRightRadius:10,position:'relative',opacity:1}}>
              <TouchableOpacity onPress={()=>{setModal(false)}}  style={{position:'absolute',right:10,top:5}}> 
                   <FontAwesome  name='close' size={25}></FontAwesome>
                   </TouchableOpacity>
                   <View style={{width:"80%",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
      <View style={{flexDirection: 'row', alignItems: 'center' }}>
      <Picker
        placeholder='Raison'
        selectedValue={reason}
        onValueChange={(itemValue, itemIndex) =>
          {setReason(itemValue);console.log(itemValue)}
        }
        style={{width: "100%",backgroundColor:Colors.main,marginVertical:15,borderRadius:10,padding:32,color:"#fff"}}
      >
        {reports.map(rep => (
          <Picker.Item key={rep} label={rep} value={rep} />
        ))}
      </Picker>
      </View>
    </View>
    <TextInput
          required
          maxLength={200}
           onFocus={() => setFocused(true)}
           onBlur={() => setFocused(false)}
          value={comment}
          onChangeText={(text)=>setComment(text)}
           style={[
            { fontFamily:"Poppins_400Regular",
            fontSize:15,
            height:150,
            padding:20,
            borderWidth: 1,
            textAlignVertical: 'top',
            borderColor: Colors.main,
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
          multiline={true}
          placeholder="Commentaire">
        </TextInput>
        <TouchableOpacity
          onPress={()=>{sendReport(data.product_id,data.product_img,data.product_title)}}
          style={{
            width:'50%',
            padding: 5 * 2,
            backgroundColor: Colors.main,
            marginVertical: 5 * 3,
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
              fontFamily: "Poppins_400Regular",
              color:'#fff',
              textAlign: "center",
              fontSize: 19,
            }}
          >
              Signaler
          </Text>
        </TouchableOpacity>
              </View>
            </View>
             </KeyboardAvoidingView>
           </Modal>
          <Text style={styles.price}>{data.product_price} DH</Text>
          <Text style={{fontFamily:'Poppins_600SemiBold',fontSize:20}}>
            Desciption
          </Text>
          <Text style={styles.description}>
            {data.product_desc}
          </Text>
           <View>
           <View style={styles.row}>
              <Text style={styles.text}><Ionicons name='list' /> Catégorie</Text>
              <Text style={styles.text}>{data.product_categorie}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}><Ionicons name="pin" /> Ville</Text>
              <Text style={styles.text}>{data.product_city}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}><Ionicons name="gift" /> Stock</Text>
              <Text style={styles.text}>{data.product_stock}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Condition</Text>
              <Text style={styles.text}>{data.product_condition}</Text>
            </View>
           </View>
           <Text></Text>
           <Text style={styles.text}><Ionicons name='time' /> Posted  {dateTimeAgo}</Text>
        </View>
        
        {auth.currentUser.uid != data.owner_id ? 
        <View style={{justifyContent:'center',alignContent:'center',width:'100%',alignItems:'center'}}>
        <TouchableOpacity
          onPress={()=>navigation.navigate("CommanderPage",{data:data})}
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
        <View  style={{borderRadius:5,padding:10,width:'90%',flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:Colors.back}}>
           <Image style={{width:50,height:50,borderRadius:50}} source={{uri: data.owner_pic}}></Image>
           <View>
           <Text style={styles.text2}>{data.owner_name}</Text>
           <Text style={styles.text2}>Vendeur</Text>
           </View>
           <TouchableOpacity onPress={()=>navigation.navigate("Seller",{sellerId:data.owner_id,sellerName:data.owner_name,sellerPic:data.owner_pic})}>
            <Text style={{fontFamily:'Poppins_600SemiBold'}}>View Profil</Text>
           </TouchableOpacity>
        </View>
        <Text></Text>
        </View> : null}
      </View>
        </ScrollView>
      )
 }
}
const styles = StyleSheet.create({
    container: {
      fontFamily:"Poppins_400Regular",
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.4)',
    },
    image: {
      width: '100%',
      height: 400,
      resizeMode: 'cover',
    },
    detailsContainer: {
      fontFamily:"Poppins_400Regular",
      padding: 15,
    },
    title: {
      fontFamily:"Poppins_600SemiBold",
      fontSize: 24,
      marginBottom: 10,
    },
    price: {
      fontFamily:"Poppins_400Regular",
      fontSize: 18,
      color:  Colors.main,
      marginBottom: 10,
    },
    description: {
      fontFamily:"Poppins_400Regular",
      fontSize: 16,
      marginBottom: 10,
    },
    row:{
        borderBottomWidth:0.5,
        borderBottomColor:"rgba(0,0,0,0.2)",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:10
    },
    text:{
      fontFamily:"Poppins_400Regular", 
    },
    text2:{
      fontFamily:"Poppins_400Regular",
    }
  });
  
export default ProduitPage