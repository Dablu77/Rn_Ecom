import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Imagehomeicone from '../assets/home.png';
import categoryIcone from '../assets/categoryIcone.png'
import ShoppingCartSimple from '../assets/ShoppingCartSimple.png'
import UserCircle from '../assets/UserCircle.png'
import { Image } from 'react-native';
import CatgoryStack from './StackNavigators/CatgoryStack';
import HomeStack from './StackNavigators/HomeStack';
import ProfileStack from './StackNavigators/ProfileStack';
import CartStack from './StackNavigators/CartStack';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#FEFEFE', color: '#FAB0A4' },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarColor: '#444554',
          tabBarIcon: ({ focused }) => (
            <Image
              source={Imagehomeicone}
              style={{
                height: 28,
                width: 28,
                tintColor: focused ? '#E7560D' : '#8767',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CatgoryStack"
        component={CatgoryStack}
        options={{
          headerShown: false,
          tabBarColor: '#444554',
          tabBarIcon: ({ focused }) => (
            <Image
              source={categoryIcone}
              style={{
                height: 28,
                width: 28,
                tintColor: focused ? '#E7560D' : '#8767',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          headerShown: false,
          tabBarColor: '#444554',
          tabBarIcon: ({ focused }) => (
            <Image
              source={ShoppingCartSimple}
              style={{
                height: 28,
                width: 28,
                tintColor: focused ? '#E7560D' : '#8767',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarColor: '#444554',
          tabBarIcon: ({ focused }) => (
            <Image
              source={UserCircle}
              style={{
                height: 28,
                width: 28,
                tintColor: focused ? '#E7560D' : '#8767',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
