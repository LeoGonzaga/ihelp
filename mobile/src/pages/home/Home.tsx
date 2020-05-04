import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import TabBar from '../login/Components/Tabbar';
import {Actions} from 'react-native-router-flux';

const style = StyleSheet.create({
  wrapper: {},
  container: {
    backgroundColor: '#DA5552',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textLogo: {
    fontSize: 46,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 23,
    color: '#B3B6B7',
  },
  button: {
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#891C1A',
    padding: 10,
  },
  layout: {
    width: '80%',
    padding: 15,
    margin: 5,
    borderRadius: 40,
  },
  text: {
    color: '#fff',
  },
});

// import { Container } from './styles';

export default function Home() {
  useEffect(() => {
    Actions.replace('home');
  }, []);

  return (
    <View style={{backgroundColor: '#DA5552', flex: 1}}>
        <View style={{marginTop: 10}}>
          <Animatable.Text
            animation="fadeIn"
            style={[style.textLogo, {fontSize: 30}]}>
            iHelp
          </Animatable.Text>

          <View
            style={{
              marginTop: 60,
              alignSelf: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              height: 200,
              width: 200,
              borderRadius: 100,
              backgroundColor: '#fff',
            }}></View>
        </View>
    </View>
  );
}
