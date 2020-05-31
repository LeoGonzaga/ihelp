import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import CardType from './Components/CardType/index';
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
  const entries = [
    {type: '0+', situation: 'Alerta', number: 2},
    {type: '0-', situation: 'Alerta', number: 2},
    {type: 'A+', situation: 'Normal', number: 3},
    {type: 'A-', situation: 'Alerta', number: 2},
    {type: 'B+', situation: 'Alerta', number: 2},
    {type: 'B-', situation: 'Excelente', number: 4},
    {type: 'AB+', situation: 'Normal', number: 3},
    {type: 'AB-', situation: 'Alerta', number: 2},
  ];

  return (
    <View style={style.container}>
      <Carousel
        data={entries}
        renderItem={({item}) => {
          return (
            <CardType
              type={item.type}
              situation={item.situation}
              number={item.number}
            />
          );
        }}
        sliderWidth={300}
        itemWidth={200}
      />
    </View>
  );
};

export default Home;
