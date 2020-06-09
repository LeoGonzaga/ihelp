import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';

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
  },
  layout: {
    padding: 10,
    margin: 5,
    borderRadius: 6,
  },
  text: {
    color: '#fff',
  },
});

const Login: React.FC = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={style.container}>
      <SafeAreaView>
        <KeyboardAvoidingView style={{width: 380}}>
          <View style={{marginTop: 50, marginBottom: 50}}>
            <Text style={style.textLogo}>iHelp</Text>
          </View>

          <TextInput
            placeholder="Digite seu email"
            style={[style.input, style.layout]}
            onChangeText={(value) => setEmail(value)}></TextInput>
          <TextInput
            secureTextEntry
            placeholder="Digite sua senha"
            style={[style.input, style.layout]}
            onChangeText={(value) => setPassword(value)}></TextInput>

          <TouchableOpacity
            style={[style.button, style.layout, {marginTop: 40}]}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={[style.text, {fontSize: 20, margin: 5}]}>Entrar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <View>
          <TouchableOpacity
            style={[style.button, style.layout, {backgroundColor: '#fff'}]}
            onPress={() => navigation.navigate('Register')}>
            <Text
              style={[style.text, {fontSize: 20, margin: 2, color: '#891C1A'}]}>
              Criar conta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{alignSelf: 'center', marginTop: 4}}>
            <Text style={{color: '#fff'}}>Esqueci minha senha.</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
