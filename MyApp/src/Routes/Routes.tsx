import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeRoutes from '../Routes/Home.routes';
import LoginRoutes from '../Routes/Login.routes';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={HomeRoutes} />
      <Stack.Screen
        name="Login"
        component={LoginRoutes}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Routes;
