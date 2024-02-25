import { View,Text,SafeAreaView,TextInput,TouchableOpacity, ScrollView,Image} from 'react-native'

import React from 'react'
import Colors from '../constans/Colors';


const Support = ({navigation}) => {
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${'ishop2023@gmail.com'}`);
  };
  const handleCallPress = () => {
    Linking.openURL(`tel:${'0612451770'}`);
  };
  return (
    
    <View style={{
      marginTop:200,
    }}>
      <View style={{
      marginLeft:150,
    }}>
      <Image  source={require('../assets/support.png')}
              style={{ width: 100, height: 100 }}>

      </Image>
      </View>
      
      <View style={{
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 16,
            margin: 20,
            marginBottom: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
      <Text style={{
          fontSize: 18,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#333',
        }}>ishop2024@gmail.com</Text>
      </View>
      
      <View style={{
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 16,
            margin:20,
            marginBottom: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
      <Text style={{
          fontSize: 18,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#333',
        }}>0612451770</Text>
      </View>

      <TouchableOpacity onPress={handleEmailPress}  style={{
            width:'80%',
            padding: 10 * 2,
            backgroundColor: Colors.main,
            marginLeft: 40,
            borderRadius: 10,
            shadowColor: Colors.main,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}>
        <Text style={{
          fontSize: 18,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#fff',
        }}> Send Email </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCallPress} style={{
            width:'80%',
            padding: 10 * 2,
            backgroundColor: Colors.main,
            marginVertical: 10 * 2,
            marginLeft: 40,
            borderRadius: 10,
            shadowColor: Colors.main,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }} >
        <Text style={{
          fontSize: 18,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#fff',
        }}> Appeler </Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Support;