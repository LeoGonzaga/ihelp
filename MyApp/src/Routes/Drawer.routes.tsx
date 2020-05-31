import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../Views/Home/index';
import Profile from '../Views/Profile/index';
import Feed from '../Views/Feed/index';


const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContentOptions={{
        activeTintColor: 'tomato',
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}
