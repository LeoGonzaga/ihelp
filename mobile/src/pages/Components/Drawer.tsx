import React from 'react';
import {View} from 'react-native';
import {Drawer, Actions} from 'react-native-router-flux';

import Login from '../login/Login';

// import { Container } from './styles';

export const MyDrawer: React.FC = () => {
  return (
    <View>
      <Drawer
        ref="navigation"
        open={true}
        content={<Login />}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan={true}
        tweenHandler={(ratio) => ({
          main: {opacity: Math.max(0.54, 1 - ratio)},
        })}></Drawer>
    </View>
  );
};
