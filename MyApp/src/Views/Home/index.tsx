import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import CardType from './Components/CardType/index';
import Card from '../Feed/Components/Card';
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
  const DATA = ['#8B0000', '#8B0000', '#8B0000', '#8B0000'];

  const Cards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const getColor = () => {
    let num = Math.floor(Math.random() * 4);
    return num;
  };
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
        sliderWidth={350}
        itemWidth={250}
      />

      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          width: '100%',
          padding: 100,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ultima doação:</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>20/05/20</Text>
        <Text style={{fontSize: 20, marginBottom: 50}}>
          Sangue em falta? Não
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Create');
          }}
          style={{
            padding: 20,
            backgroundColor: '#891C1A',
            borderRadius: 6,
            width: 400,
          }}>
          <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
            Agendar doação
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
