import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {Image} from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';
import api from '../../config/api';
import {Actions} from 'react-native-router-flux';

const style = StyleSheet.create({
  wrapper: {},
  container: {
    backgroundColor: '#DA5552',
    flex: 1,
    justifyContent: 'center',
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
    width: '80%',
    padding: 15,
    margin: 5,
    borderRadius: 40,
  },
  text: {
    color: '#fff',
  },
});

export default function Recovery() {
  const [email, setEmail] = useState('');

  const resetPassword = async (email: string) => {
    try {
      if (!email)
        Alert.alert('Opa! ', 'Você precisa digitar seu email para continuar.');

      let response = await api.post('/reset', {
        email,
      });

      let {message} = response.data;
      console.log(response);
      if (message)
        Alert.alert(
          message,
          'Por favor, verifique os campos e tente novamente.',
        );

      if (response.status == 200) {
        setEmail('');
        Alert.alert(
          'Sucesso!',
          'Enviamos um link para o seu email. Por favor, acesse para podermos dar continuidada.',
        );
        Actions.login();
      }

      console.log(response);
    } catch (error) {
      console.log('Error no reset', error);
    }
  };
  return (
    <KeyboardAvoidingView style={style.container} behavior="padding">
      <View style={{marginTop: 50, marginBottom: 140}}>
        <Animatable.Text animation="fadeIn" style={style.textLogo}>
          iHelp
        </Animatable.Text>
      </View>
      <TextInput
        placeholder="username@email.com"
        style={[style.input, style.layout]}
        onChangeText={(value) => setEmail(value)}
      />

      <TouchableHighlight
        style={[
          style.button,
          style.layout,
          {
            marginTop: 20,
            backgroundColor: '#fff',
          },
        ]}
        underlayColor="#ccc"
        onPress={() => {
          resetPassword(email);
        }}>
        <Text
          style={[
            style.text,
            {fontSize: 20, color: '#DA5552', fontWeight: 'bold'},
          ]}>
          Resetar senha
        </Text>
      </TouchableHighlight>
    </KeyboardAvoidingView>
  );
}
