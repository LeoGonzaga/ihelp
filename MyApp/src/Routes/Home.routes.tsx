import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeedScreen from '../Routes/Drawer.routes';
import HomeRoutes from '../Routes/Stack.routes';
import ProfileScreen from '../Views/Profile/index';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'flask' : 'flask';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        tabStyle: {
          width: 100,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{title: 'Inicio'}}
      />

      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{title: 'Feed'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Perfil'}}
      />
    </Tab.Navigator>
  );
}
