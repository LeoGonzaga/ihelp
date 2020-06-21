import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
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
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        behavior="height"
        style={{width: windowWidth - 50, paddingRight: 14}}>
        <TextInput
          secureTextEntry
          placeholder="Tipo de sangue"
          style={[style.input, style.layout]}
          onChangeText={(value) => {}}></TextInput>
        <TextInput
          placeholder="Seu nome"
          style={[style.input, style.layout]}
          onChangeText={(value) => {}}></TextInput>

        <TextInput
          placeholder="Urgencia"
          style={[style.input, style.layout]}
          onChangeText={(value) => {}}></TextInput>
        <TextInput
          placeholder="Cidade"
          style={[style.input, style.layout]}
          onChangeText={(value) => {}}></TextInput>
        <TextInput
          secureTextEntry
          placeholder="Hemocentro"
          style={[style.input, style.layout]}
          onChangeText={(value) => {}}></TextInput>

        {/* <TouchableOpacity
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
          </TouchableOpacity> */}
        <TouchableOpacity
          style={[style.button, style.layout, {marginTop: 20}]}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={[style.text, {fontSize: 20, margin: 5}]}>
            Criar pedido
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Create;
