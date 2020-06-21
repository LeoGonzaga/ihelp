import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginRoutes from '../Routes/Login.routes';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Views/Home/index';
import CreateScreen from '../Views/Feed/Create/index';
import TesteScreen from '../Views/Feed/TestDonate/index';
import InstructionScreen from '../Views/Feed/Instructions/index';
const Stack = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#ffff',
        headerStyle: {
          backgroundColor: '#A52A2A',
          elevation: 0,
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen
        name="Testes"
        component={TesteScreen}
        options={{title: 'Verificação de doador'}}
      />
      <Stack.Screen
        name="Instruction"
        component={InstructionScreen}
        options={{title: 'Requisitos '}}
      />
    </Stack.Navigator>
  );
};
export default StackRoutes;
