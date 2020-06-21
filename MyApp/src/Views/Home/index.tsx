import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import CardType from './Components/CardType/index';
import Card from '../Feed/Components/Card';
// import { Container } from './styles';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#A52A2A',
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
    elevation: 5,
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
  const windowWidth = Dimensions.get('window').width;

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
        itemWidth={180}
      />
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          marginTop: 20,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          alignItems: 'center',
          padding: 20,
        }}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>
          Ultima doação: 20/05/20
        </Text>
        <Text style={{fontSize: 17, marginBottom: 10}}>
          Seu tipo esta falta? Não
        </Text>
        <View
          style={{
            padding: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Create');
            }}
            style={{
              padding: 10,
              backgroundColor: '#891C1A',
              borderRadius: 6,
              width: windowWidth - 50,
              marginBottom: 10,
            }}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
              Agendar doação
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Testes');
            }}
            style={{
              padding: 10,
              backgroundColor: '#891C1A',
              borderRadius: 6,
              width: windowWidth - 50,
            }}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
              Fazer teste
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
