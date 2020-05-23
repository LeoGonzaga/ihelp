import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Views/Login/index';
import Register from '../Views/Register/index';
import Home from '../Routes/Home.routes';
const Stack = createStackNavigator();

export default function LoginRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
