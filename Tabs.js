import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import Colors from './constans/Colors';
import Home from './screens/Home';
import Orders from './screens/Orders';
import Categories from './screens/Categories'
import Profil from './screens/Profil';
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
            } else if (route.name == 'Categories'){
                iconName = focused ? 'list' : 'list';
              }else if (route.name == 'Orders'){
                iconName = focused ? 'cube' : 'cube';
              }else if (route.name == 'Profil'){
                iconName = focused ? 'person' : 'person';
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
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen name="Categories" component={Categories} ></Tab.Screen>
         <Tab.Screen name="Orders" component={Orders} ></Tab.Screen>
         <Tab.Screen name="Profil" component={Profil} ></Tab.Screen>
    </Tab.Navigator>
  )
}