import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./src/pages/login/Login";
import Register from "./src/pages/register/Register";
import Home from "./src/pages/home/Home";

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    borderTopColor: "darkgrey",
    borderTopWidth: 1,
    opacity: 0.98,
    justifyContent: "space-between"
  }
});
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
          key="register"
          component={Register}
          title="Register"
          hideTabBar
        />
        <Scene key="home" component={Home} hideNavBar  />
      </Stack>
    </Router>
  );
};

export default App;
