import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Views/Login/index';
import Register from '../Views/Register/index';
import Home from '../Routes/Home.routes';

const Stack = createStackNavigator();

export default function LoginRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#ffff',
        headerStyle: {
          backgroundColor: '#A52A2A',
          elevation: 0,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, title: 'Bem vindo(a)'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
}
