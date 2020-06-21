import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

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

const Instructions: React.FC = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView style={style.container}>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 10,
          width: windowWidth - 50,
        }}>
        <Text style={{color: '#fff', textAlign: 'center', marginBottom: 10}}>
          Estar alimentado. Evite alimentos gordurosos nas 3 horas que antecedem
          a doação de sangue.
        </Text>
        <Text style={{color: '#fff', textAlign: 'center', marginBottom: 10}}>
          {' '}
          Caso seja após o almoço, aguardar 2 horas.
        </Text>
        <Text style={{color: '#fff', textAlign: 'center', marginBottom: 10}}>
          {' '}
          Ter dormido pelo menos 6 horas nas últimas 24 horas.
        </Text>
        <Text style={{color: '#fff', textAlign: 'center', marginBottom: 10}}>
          {' '}
          Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o
          tiverem feito antes dos 60 anos.
        </Text>
        <Text style={{color: '#fff', textAlign: 'center', marginBottom: 10}}>
          {' '}
          A frequência máxima é de quatro doações de sangue anuais para o homem
          e de três doações de sangue anuais para as mulher.
        </Text>
        <Text style={{color: '#fff', textAlign: 'center', marginBottom: 10}}>
          {' '}
          O intervalo mínimo entre uma doação de sangue e outra é de dois meses
          para os homens e de três meses para as mulheres.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{
          padding: 10,
          backgroundColor: '#fff',
          borderRadius: 6,
          elevation: 5,
          width: windowWidth - 50,
        }}>
        <Text style={{color: '#891C1A', textAlign: 'center', fontSize: 20}}>
          Entendi
        </Text>
      </TouchableOpacity>

      {/* <Text>
        Pessoas com febre, gripe ou resfriado, diarreia recente, grávidas e
        mulheres no pós-parto não podem doar temporariamente.
      </Text>
      <Text>Estar alimentado. Evite alimentos gordurosos nas 3 horas que antecedem a doação de sangue.</Text>
      <Text>Caso seja após o almoço, aguardar 2 horas.</Text>
      <Text>Ter dormido pelo menos 6 horas nas últimas 24 horas.</Text>
      <Text>Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o tiverem feito antes dos 60 anos.</Text>
      <Text>A frequência máxima é de quatro doações de sangue anuais para o homem e de três doações de sangue anuais para as mulher.</Text>
      <Text>O intervalo mínimo entre uma doação de sangue e outra é de dois meses para os homens e de três meses para as mulheres.</Text> */}
    </SafeAreaView>
  );
};

export default Instructions;
