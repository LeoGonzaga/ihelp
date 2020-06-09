import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginRoutes from '../Routes/Login.routes';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Views/Home/index';
import CreateScreen from '../Views/Feed/Create/index';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
    </Stack.Navigator>
  );
};
export default StackRoutes;
