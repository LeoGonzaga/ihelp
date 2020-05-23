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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Settings2" component={SettingsScreen} />
      <Tab.Screen name="Settings3" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
