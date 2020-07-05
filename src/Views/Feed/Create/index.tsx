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
  Picker,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {TextInputMask} from 'react-native-masked-text';
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
    color: '#A52A2A',
  },
});

const Create: React.FC = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const [blood, setBlood] = useState('0');
  const [urgency, setUrgency] = useState('0');
  const [city, setCity] = useState('0');
  const [hospital, setHospital] = useState('0');
  const [name, setName] = useState('0');
  const [token, setToken] = useState('0');
  const [phone, setPhone] = useState('');

  const createDonate = async (
    name: string,
    city: string,
    hospital: string,
    blood: string,
    urgency: string,
  ) => {
    console.log(name, city, hospital, blood, urgency);

    if (
      name == '0' ||
      city == '0' ||
      hospital == '0' ||
      blood == '0' ||
      urgency == '0'
    ) {
      Alert.alert(
        'Opa!',
        'Por favor, preencha todos os campos para continuar!',
      );
    } else {
      let response = await fetch(
        'https://ihelp-back.herokuapp.com/feed/create',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: name,
            bloodtype: blood,
            urgency: urgency,
            city: city,
            hospital: hospital,
            phone: phone,
            token: token,
          }),
        },
      );
      let resJSON = await response.json();
      console.log('resFEEDCREATE', resJSON);
      if (resJSON) {
        Alert.alert(
          'Tudo certo!',
          'Seu pedido foi cadastrado no nosso sistema e já esta disponivel no feed para todos os usuários',
        );
        navigation.navigate('Home');
      }
    }
  };

  const getDataUser = async () => {
    let user = await AsyncStorage.getItem('@user');
    let value = await JSON.parse(user);
    console.log('aquiiii', value.token);
    setToken(value.token);
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior="height"
          style={{width: windowWidth - 50, paddingRight: 14, marginTop: 30}}>
          <TextInput
            placeholder="Nome do receptor"
            style={[style.input, style.layout]}
            onChangeText={(value) => {
              setName(value);
            }}></TextInput>
          <TextInput
            placeholder="Cidade"
            style={[style.input, style.layout]}
            onChangeText={(value) => {
              setCity(value);
            }}></TextInput>

          <TextInputMask
            placeholder="Telefone"
            keyboardType="number-pad"
            style={[style.input, style.layout]}
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            value={phone}
            onChangeText={(value) => setPhone(value)}
          />
          <TextInput
            placeholder="Hemocentro"
            style={[style.input, style.layout]}
            onChangeText={(value) => {
              setHospital(value);
            }}></TextInput>
          <Picker
            selectedValue={blood}
            style={[style.input, style.layout, {textAlign: 'center'}]}
            onValueChange={(itemValue, itemIndex) => setBlood(itemValue)}>
            <Picker.Item label="Tipo de sangue" value="0" />
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
            <Picker.Item label="AB+" value="AB+" />
            <Picker.Item label="AB-" value="AB-" />
            <Picker.Item label="O+" value="O+" />
            <Picker.Item label="O-" value="O-" />
          </Picker>

          <Picker
            selectedValue={urgency}
            style={[style.input, style.layout, {textAlign: 'center'}]}
            onValueChange={(itemValue, itemIndex) => setUrgency(itemValue)}>
            <Picker.Item label="Nivel de Urgência" value="0" />
            <Picker.Item label="Alto" value="Alto" />
            <Picker.Item label="Médio" value="Médio" />
            <Picker.Item label="Baixo" value="Baixo" />
          </Picker>

          <TouchableOpacity
            style={[style.button, style.layout, {marginTop: 20}]}
            onPress={() => {
              createDonate(name, city, hospital, blood, urgency);
            }}>
            <Text style={[style.text, {fontSize: 20, margin: 5}]}>
              Criar pedido
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
