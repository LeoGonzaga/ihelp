import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeRoutes from '../Routes/Home.routes';
import LoginRoutes from '../Routes/Login.routes';
import {NavigationContainer} from '@react-navigation/native';
import FeedScreen from '../Views/Feed/index';
import DetailsScreen from '../Views/Feed/Details/index';

const Stack = createStackNavigator();

export default function StackRoute() {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerStyle: {
            backgroundColor: '#A52A2A',
            elevation: 0,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
