import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Picker,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {TextInputMask} from 'react-native-masked-text';
import {Calendar, CalendarList} from 'react-native-calendars';
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
  const [typeBload, setTypeBload] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [token, setToken] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState(null);
  const [placeName, setPlaceName] = useState('');
  const [placePassword, setPlacePassword] = useState('');

  const windowWidth = Dimensions.get('window').width;

  const updateUser = async () => {
    console.log('Senha', password);
    let response = await fetch('https://ihelp-back.herokuapp.com/user/update', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        username: name ? name : null,
        bloodtype: typeBload ? typeBload : null,
        birthday: age ? age : null,
        phone: phone ? phone : null,
        height: age ? age : null,
        password: password ? password : placePassword,
        weight: weight ? weight : null,
        token: token,
      }),
    });

    let resJSON = await response.json();
    console.log('profile', resJSON);
    if (resJSON) {
      let data = [age, weight];
      await AsyncStorage.setItem('@update', JSON.stringify(data));
      await AsyncStorage.setItem('@age', JSON.stringify(age));
      await AsyncStorage.setItem('@weight', JSON.stringify(weight));
      navigation.navigate('Home');
    }
  };

  const getDataUser = async () => {
    let user = await AsyncStorage.getItem('@user');
    let pass = await AsyncStorage.getItem('@pass');
    let value = await JSON.parse(user);
    let valuePass = await JSON.parse(pass);
    console.log('aquiiii', value);
    setToken(value.token);
    setPlaceName(value.user.username);
    setPlacePassword(valuePass);
  };

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };
  useEffect(() => {
    getDataUser();
  }, []);
  return (
    <SafeAreaView style={[style.container]}>
      <View style={{marginTop: 10, marginBottom: 16}}>
        <Text style={style.textLogo}>Editar perfil</Text>
      </View>
      <ScrollView>
        <KeyboardAvoidingView
          behavior="height"
          style={{width: windowWidth - 50, paddingRight: 14}}>
          <TextInput
            placeholder={'Seu nome'}
            style={[style.input, style.layout]}
            onChangeText={(value) => setName(value)}></TextInput>

          <TextInputMask
            placeholder="Idade"
            type={'datetime'}
            options={{
              format: 'DD',
            }}
            style={[style.input, style.layout]}
            value={age}
            onChangeText={(value) => setAge(value)}
          />

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

          <TextInputMask
            placeholder="Peso"
            type={'datetime'}
            options={{
              format: 'DDD',
            }}
            style={[style.input, style.layout]}
            value={weight}
            onChangeText={(value) => setWeight(value)}
          />
          <Picker
            selectedValue={typeBload}
            style={[style.input, style.layout, {textAlign: 'center'}]}
            onValueChange={(itemValue, itemIndex) => setTypeBload(itemValue)}>
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
          <TextInput
            placeholder="Nova senha"
            keyboardType="number-pad"
            style={[style.input, style.layout]}
            onChangeText={(value) => setPassword(value)}></TextInput>

          <TouchableOpacity
            style={[style.button, style.layout, {marginTop: 10}]}
            onPress={() => {
              updateUser();
            }}>
            <Text style={[style.text, {fontSize: 20, margin: 5}]}>
              Atualizar dados
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          logout();
        }}>
        <Text style={[style.text, {fontSize: 15, margin: 5}]}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
