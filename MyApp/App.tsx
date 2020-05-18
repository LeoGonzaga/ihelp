import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Pages
import HomeScreen from './src/Views/Home/index';
import LoginScreen from './src/Views/Login/index';
import RecoveryScreen from './src/Views/Recovery/index';
import ProfileScreen from './src/Views/Profile/index';
import RegisterScreen from './src/Views/Register/index';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              title: 'Criar uma conta',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#DA5552',
                elevation:0
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen name="Recovery" component={RecoveryScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
