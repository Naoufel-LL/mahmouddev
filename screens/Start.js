import { View, Text,Image} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Colors from "../constans/Colors"

const Start = ({navigation}) => {
  return (
    <Onboarding
    onDone={()=>navigation.replace("login")}
    onSkip={()=>navigation.replace("login")}
    pages={[
      {
        backgroundColor: Colors.back,
        image: <Image resizeMode='cover'style={{width:'100%',height:350}} source={require('../assets/add_cart.png')} />,
        title: 'Bienvenue',
        subtitle: 'Ici vous pouvez trouver tous ce que vous voulez et vendre tous ce que vous voulez',
      },
      {
        backgroundColor: Colors.back,
        image: <Image resizeMode='contain'style={{width:'100%',height:350}} source={require('../assets/shopping2.png')} />,
        title: 'Vous serez satisfait!',
        subtitle: 'Vous trouverez tous ce que vous cherchez !',
      },
      {
        backgroundColor: Colors.back,
        image: <Image resizeMode='contain'style={{width:'100%',height:350}} source={require('../assets/order_confirm.png')} />,
        title: 'IShop',
        subtitle: 'Commandez et vendez en quelques cliques par ici!',
      },
    ]}
  />
  )
}

export default Start
