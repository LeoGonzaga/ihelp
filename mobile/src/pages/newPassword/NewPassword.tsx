import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';
import api from '../../config/api';

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

const newPassword: React.FC = (props: any) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState(props?.token);

  console.log(token);
  useEffect(() => {
    Actions.replace('newPassword');
  }, []);

  const confirmReset = async (newPass: string, confirmPass: string) => {
    try {
      if (!newPass || !confirmPass)
        Alert.alert('Opa!', 'Por favor, confira os campos para prosseguir.');
      else if (newPass.length < 6)
        Alert.alert(
          'Opa!',
          'Para sua segurança é necessário uma senha de no minimo 6 digitos.',
        );

      let response = await api.post('/reset');
      console.log(response);
    } catch (error) {
      console.log('error na confirmacao de senha', error);
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
        secureTextEntry
        placeholder="Nova senha"
        style={[style.input, style.layout]}
        onChangeText={(value) => setPassword(value)}
      />
      <TextInput
        secureTextEntry
        placeholder="Confirmar nova senha"
        style={[style.input, style.layout]}
        onChangeText={(value) => setConfirmPassword(value)}
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
          confirmReset(password, confirmPassword);
        }}>
        <Text
          style={[
            style.text,
            {fontSize: 20, color: '#DA5552', fontWeight: 'bold'},
          ]}>
          Confirmar
        </Text>
      </TouchableHighlight>
    </KeyboardAvoidingView>
  );
};

export default newPassword;
