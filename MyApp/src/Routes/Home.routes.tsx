import * as React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedScreen from '../Routes/Drawer.routes';
import HomeScreen from '../Views/Home/index';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{title: 'Inicio'}}
      />

      <Tab.Screen
        name="Home"
        component={FeedScreen}
        options={{title: 'Feed'}}
      />
      <Tab.Screen
        name="Settings3"
        component={HomeScreen}
        options={{title: 'Sair'}}
      />
    </Tab.Navigator>
  );
}
