import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

import Card from '../Feed/Components/Card/index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
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

const Feed: React.FC = ({navigation}) => {
  const DATA = ['#A52A2A', '#A52A2A', '#A52A2A', '#A52A2A'];

  const Cards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const getColor = () => {
    let num = Math.floor(Math.random() * 4);
    return num;
  };

  return (
    <View style={style.container}>
      <Text
        style={{
          marginTop: 20,
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Feed de doações
      </Text>

      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          width: '95%',
          marginTop: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <ScrollView>
          {Cards.map((card) => {
            return <Card color={DATA[getColor()]} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Feed;
