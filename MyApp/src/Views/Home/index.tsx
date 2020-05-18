import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// import { Container } from './styles';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#DA5552',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
    width: '100%',
    padding: 12,
    margin: 5,
    borderRadius: 14,
  },
  text: {
    color: '#fff',
  },
});

const Home: React.FC = ({navigation}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Editar perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
