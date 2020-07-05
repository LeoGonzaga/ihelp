import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
// import { Container } from './styles';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#A52A2A',
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
    fontSize: 20,
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
    padding: 10,
    margin: 5,
    borderRadius: 6,
  },
  text: {
    color: '#fff',
  },
});

const Register: React.FC = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const API_URL = 'https://ihelp-back.herokuapp.com/';

  const registerUser = async (
    username: string,
    email: string,
    password: string,
  ) => {
    try {
      if (email == '' || username == '' || password == '') {
        Alert.alert('Opa! ', 'Os campos não podem estar vazios!');
      } else if (password.length < 6) {
        Alert.alert('Sua senha precisa ter no minimo 6 digitos');
      } else {
        let response = await fetch(API_URL + 'createAccount', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({username, email, password}),
        });
        let resJSON = await response.json();
        console.log(
          'resJSON',
          resJSON + '!' + ' Por favor, verifique seus dados e tente novamente',
        );

        if (resJSON.error) {
          Alert.alert('Ops!', resJSON.error);
        } else {
          Alert.alert('Sucesso!', 'Seu cadastro foi realizado com sucesso!');
          navigation.navigate('Login');
        }
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    console.log('Nome', username, 'Email', email, 'Senha', password);
  });

  const loadingScreen = (
    <View style={{flex: 1, backgroundColor: '#ddd'}}>
      <ActivityIndicator color="red" size="large" />
    </View>
  );

  const registerScreen = (
    <View style={style.container}>
      <SafeAreaView>
        <View style={{marginTop: 50, marginBottom: 50}}>
          <Text style={style.textLogo}>iHelp</Text>
        </View>
        <KeyboardAvoidingView style={{width: windowWidth - 50}}>
          <TextInput
            placeholder="Seu nome"
            style={[style.input, style.layout]}
            onChangeText={(value) => setUsername(value)}></TextInput>
          <TextInput
            placeholder="Seu email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={[style.input, style.layout]}
            onChangeText={(value) => setEmail(value)}></TextInput>
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            placeholder="Digite uma senha"
            style={[style.input, style.layout]}
            onChangeText={(value) => setPassword(value)}></TextInput>

          <TouchableOpacity
            style={[style.button, style.layout, {marginTop: 40}]}
            onPress={() => {
              registerUser(username, email, password);
            }}>
            <Text style={[style.text, {fontSize: 20, margin: 5}]}>
              Concluir
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );

  return registerScreen;
};

export default Register;
