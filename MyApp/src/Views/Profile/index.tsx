import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

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
    backgroundColor: '#891C1A',
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

  const windowWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={[style.container]}>
      <View style={{marginTop: 10, marginBottom: 16}}>
        <Text style={style.textLogo}>Editar perfil</Text>
      </View>
      <KeyboardAvoidingView
        behavior="height"
        style={{width: windowWidth - 50, paddingRight: 14}}>
        <TextInput
          placeholder="Seu nome"
          style={[style.input, style.layout]}
          onChangeText={(value) => setEmail(value)}></TextInput>

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
          placeholder="Tipo de sangua"
          style={[style.input, style.layout]}
          onChangeText={(value) => setPassword(value)}></TextInput>

        <TouchableOpacity
          style={[
            style.button,
            style.layout,
            {marginTop: 40, backgroundColor: '#fff'},
          ]}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text
            style={[style.text, {fontSize: 20, margin: 5, color: '#891C1A'}]}>
            Alterar senha
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.button, style.layout, {marginTop: 20}]}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={[style.text, {fontSize: 20, margin: 5}]}>
            Atualizar dados
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;
