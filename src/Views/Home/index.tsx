import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import CardType from './Components/CardType/index';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import {StackActions} from '@react-navigation/native';

const style = StyleSheet.create({
  container: {
    flex: 1,
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
  // navigation.dispatch(StackActions.replace('Home'));
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState('Sem doação');
  const [user, setUser] = useState();
  const windowWidth = Dimensions.get('window').width;

  const getDataUser = async () => {
    let user = await AsyncStorage.getItem('@user');
    let userMap = await JSON.parse(user);
    if (userMap) {
      setUser(userMap);
      getDatabaseBlood();
    }
    console.log('DATA', user);
  };

  useEffect(() => {
    getDataUser();
    getDonate();
  }, []);

  const getDatabaseBlood = async () => {
    let value = await AsyncStorage.getItem('@hemocentro');
    let valueJSON = await JSON.parse(value);
    console.log(valueJSON);
    setEntries(valueJSON);
  };

  const setDonate = async () => {
    await AsyncStorage.setItem('@donate', JSON.stringify(date));
  };

  const getDonate = async () => {
    let value = await AsyncStorage.getItem('@donate');
    let valueJSON = await JSON.parse(value);

    valueJSON ? setDate(valueJSON) : setDate('Sem doação');
  };

  useEffect(() => {
    setDonate();
  }, [date]);

  return (
    <>
      <View style={style.container}>
        {entries != [] ? (
          <Carousel
            data={entries}
            renderItem={({item}) => {
              return (
                <CardType
                  type={item.type}
                  situation={item.state}
                  number={item.img}
                />
              );
            }}
            sliderWidth={350}
            itemWidth={180}
          />
        ) : (
          <>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={{fontSize: 18, color: '#fff'}}>Carregando</Text>
          </>
        )}

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
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Atualização de doação!',
                'Deseja atualizar sua última doação?',
                [
                  {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'Confirmar',
                    onPress: () => {
                      let now = moment().format('LL');
                      setDate(now);
                    },
                  },
                ],
                {cancelable: false},
              );
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Ultima doação: {date}
            </Text>
          </TouchableOpacity>
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
                navigation.navigate('Testes', {user: user});
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
    </>
  );
};

export default Home;
