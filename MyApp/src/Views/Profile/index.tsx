import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

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

const Profile: React.FC = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [typeBload, setTypeBload] = useState(0);
  const [heightUser, setHeightUser] = useState(0);
  const [weight, setWeight] = useState(0);

  return (
    <View style={style.container}>
      <SafeAreaView>
        {/* <View style={{marginTop: 10, marginBottom: 20}}>
            <Text style={style.textLogo}>iHelp</Text>
          </View> */}
        <KeyboardAvoidingView
          behavior="padding"
          style={{width: 320, paddingRight: 14}}>
          <TextInput
            placeholder="Seu nome"
            style={[style.input, style.layout]}
            onChangeText={(value) => setEmail(value)}></TextInput>
          <TextInput
            secureTextEntry
            placeholder="Digite sua senha"
            style={[style.input, style.layout]}
            onChangeText={(value) => setPassword(value)}></TextInput>

          <TextInput
            secureTextEntry
            placeholder="Confirmar sua senha"
            style={[style.input, style.layout]}
            onChangeText={(value) => setPassword(value)}></TextInput>
          <TextInput
            placeholder="Sua altura"
            style={[style.input, style.layout]}
            onChangeText={(value) => setPassword(value)}></TextInput>
          <TextInput
            placeholder="Seu peso"
            style={[style.input, style.layout]}
            onChangeText={(value) => setPassword(value)}></TextInput>
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
            <Text style={[style.text, {fontSize: 20, margin: 5}]}>
              Atualizar dados
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
