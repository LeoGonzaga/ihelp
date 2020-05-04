import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import Login from './src/pages/login/Login';
import Recovery from './src/pages/register/Recovery';
import Home from './src/pages/home/Home';
import NewPassword from './src/pages/newPassword/NewPassword';

import {MyDrawer} from './src/pages/Components/Drawer';

const App = () => {


 
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="login"
          component={Login}
          title="Login"
          hideNavBar
          hideTabBar
        />
        <Scene
          key="recovery"
          component={Recovery}
          title="Recuperar senha"
          hideTabBar
        />
        <Scene key="home" component={Home} drawer={true} />

        <Scene key="drawer" component={MyDrawer} hideNavBar={false} open={true}>
          <Scene key="login" component={Login} title="Setting" />
        </Scene>

        <Scene
          key="newPassword"
          component={NewPassword}
          hideNavBar
          hideTabBar
        />
      </Stack>
    </Router>
  );
};

export default App;
