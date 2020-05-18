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

const Login: React.FC = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  //   const storeData = async (value: string) => {
  //     try {
  //       await AsyncStorage.setItem('@_id', value);
  //     } catch (e) {
  //       // saving error
  //     }
  //   };

  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('@_id');
  //       if (value !== null) {
  //         Actions.home();
  //       }
  //     } catch (e) {
  //       console.log('Error no get data', e);
  //     }
  //   };

  //   const registerUser = async (
  //     name: string,
  //     email: string,
  //     password: string,
  //   ) => {
  //     if (!name || !email || !password) {
  //       Alert.alert(
  //         'Opa! Algo deu errado.',
  //         'Alguma coisa acontece, confira seus dados e tente novamente.',
  //       );
  //     } else {
  //       try {
  //         if (password.length < 6) {
  //           Alert.alert(
  //             'Senha inválida!',
  //             'Sua senha é muito curta. Por favor, digite uma senha de 6 digitos',
  //           );
  //         }

  //         let response = await api.post('/createAccount', {
  //           username,
  //           email,
  //           password,
  //         });

  //         let {_id, message} = response.data;
  //         if (_id) {
  //           Alert.alert(
  //             'Seu usário foi criado com sucesso!',
  //             'Faça o login para continuar',
  //           );
  //           setEmail('');
  //           setPassword('');
  //           setUsername('');
  //         } else if (message) {
  //           Alert.alert('Opa!', 'Alguma coisa deu errada:' + message);
  //         }

  //         console.log(response);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };

  //   const loginUser = async (email: string, password: string) => {
  //     if (!email || !password) {
  //       Alert.alert(
  //         'Eita!',
  //         'Por favor, confira se os campos estão preenchido e com os dados corretos.',
  //       );
  //     } else {
  //       try {
  //         let response = await api.post('/login', {
  //           email,
  //           password,
  //         });
  //         console.log(response);

  //         let {_id, message} = response.data;
  //         if (_id) {
  //           storeData(_id);
  //           await AsyncStorage.setItem('User', _id);
  //         } else if (message && response.status != 200) {
  //           Alert.alert('Ops!', 'Alguma coisa de errado aconteceu: ' + message);
  //         }

  //         // Actions.home();
  //       } catch (error) {}
  //     }
  //   };
  return (
    <View style={style.container}>
      <SafeAreaView>
        <KeyboardAvoidingView behavior="padding" style={{width: 320}}>
          <View style={{marginTop: 50, marginBottom: 140}}>
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
