import * as React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../Routes/Drawer.routes';
// function HomeScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

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
        component={SettingsScreen}
        options={{title: 'Feed'}}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Inicio'}}
      />
      <Tab.Screen
        name="Settings3"
        component={SettingsScreen}
        options={{title: 'Sair'}}
      />
    </Tab.Navigator>
  );
}
