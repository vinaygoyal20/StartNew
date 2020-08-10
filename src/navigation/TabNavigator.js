import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home,Fav,Profile,Message} from '../Screens';


const Tab = createBottomTabNavigator();

export default function TabBar(navProps) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="fav" component={Fav} />
      <Tab.Screen name="message" component={Message} />
      <Tab.Screen name="profile" component={Profile} />
      
    </Tab.Navigator>
  );
}
