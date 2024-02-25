import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import Colors from './constans/Colors';
import Commandes from './screens/Commandes';
import SellerProfil from './screens/SellerProfil'
import Myshop from './screens/Myshop';
export default function Tabs() {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='home'
      screenOptions={({ route }) => ({
        headerShown:false,
        headerTitleAlign:'center',
         tabBarStyle:{
             paddingVertical:5,height:70,paddingBottom:5
         },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Matches') {
              iconName = focused
                ? 'soccer-ball-o'
                : 'soccer-ball-o';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name == 'Myshop'){
                iconName = focused ? 'grid-outline' : 'grid-outline';
              }else if (route.name == 'Commandes'){
                iconName = focused ? 'cube' : 'cube';
              }else if (route.name == 'Shop'){
                iconName = focused ? 'settings' : 'settings';
              }

            // You can return any component that you like here!
            return <Ionicons name={iconName}  size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.main,
          inactiveTintColor: 'gray',
        }}
      >
         <Tab.Screen name="Myshop" component={Myshop} ></Tab.Screen>
         <Tab.Screen name="Commandes" component={Commandes} ></Tab.Screen>
    </Tab.Navigator>
  )
}