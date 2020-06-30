import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// import { Container } from './styles';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#A52A2A',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textLogo: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    color: '#B3B6B7',
  },
  button: {
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#fff',
    padding: 10,
    elevation: 5,
  },
  layout: {
    width: '100%',
    padding: 10,
    margin: 5,
    borderRadius: 6,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

const TestDonate: React.FC = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  let [age, setAge] = useState('24');
  let [weight, setWeight] = useState('50');
  let [enableButton, setEnableButton] = useState(false);
  let [user, setUser] = useState();

  useEffect(() => {
    getData();
  }, [age, weight]);

  const getDataUser = async () => {
    let user = await AsyncStorage.getItem('@user');
    let userMap = await JSON.parse(user);
    if (userMap) {
      setUser(userMap);
      // getDatabaseBlood();
    }
    console.log('TESTEEEEEEE', user);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let age = await AsyncStorage.getItem('@age');
    let weight = await AsyncStorage.getItem('@weight');
    let ageValue = await JSON.parse(age);
    let weightValue = await JSON.parse(weight);
    console.log('age', ageValue);
    console.log('peso', weightValue);
    setAge(ageValue);
    setWeight(weightValue);
    if (ageValue && weightValue) {
      if (ageValue >= '16' && weightValue >= '50') {
        setEnableButton(true);
      }
    } else {
      Alert.alert(
        'Terminar cadastro!',
        'Para acessar o teste rápido, preencha o restante do seu perfil',
      );
      navigation.navigate('Profile');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 10,
          width: windowWidth - 50,
        }}>
        <Text style={{color: '#fff', textAlign: 'center', marginBottom: 10}}>
          O procedimento para doação de sangue é simples, rápido e totalmente
          seguro. Não há riscos para o doador, porque nenhum material usado na
          coleta do sangue é reutilizado, o que elimina qualquer possibilidade
          de contaminação.
        </Text>
        <Text style={style.text}>Requisitos básicos para doação:</Text>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>
          Idade mínima: 16 anos
        </Text>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>
          Peso mínimo: 50 kg
        </Text>
      </View>
      <View
        style={{
          width: windowWidth - 50,
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: enableButton ? 'green' : '#FFF',
            alignItems: 'center',
            borderRadius: 50,
            justifyContent: 'center',
          }}>
          <Text style={{color: enableButton ? '#ffff' : '#000'}}>Idade:</Text>
          <Text style={{color: enableButton ? '#ffff' : '#000'}}>{age}</Text>
        </View>

        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: enableButton ? 'green' : '#FFF',
            alignItems: 'center',
            borderRadius: 50,
            justifyContent: 'center',
          }}>
          <Text style={{color: enableButton ? '#ffff' : '#000'}}>Peso:</Text>
          <Text style={{color: enableButton ? '#ffff' : '#000'}}>{weight}</Text>
        </View>
      </View>

      {enableButton ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Instruction');
          }}
          style={{
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 6,
            elevation: 5,
            width: windowWidth - 50,
          }}>
          <Text style={{color: '#891C1A', textAlign: 'center', fontSize: 20}}>
            Prosseguir
          </Text>
        </TouchableOpacity>
      ) : (
        <Text style={{color: '#fff', textAlign: 'center'}}>
          Você não possui os requisitos básicos para a doação, infelizmente não
          podemos continuar
        </Text>
      )}
    </SafeAreaView>
  );
};

export default TestDonate;
