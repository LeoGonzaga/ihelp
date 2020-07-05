import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeRoutes from '../Routes/Stack.routes';
import LoginRoutes from '../Routes/Login.routes';

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
