import React from "react";
import { View, Text } from "react-native";

import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./src/pages/login/Login";
import Register from "./src/pages/register/Register";
import Home from "./src/pages/home/Home";
const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" hideNavBar/>
        <Scene key="register" component={Register} title="Register" />
        <Scene key="home" component={Home} />
      </Stack>
    </Router>
  );
};

export default App;
