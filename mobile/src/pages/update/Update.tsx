import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, CheckBox} from 'react-native';

const style = StyleSheet.create({
  wrapper: {},
  container: {
    backgroundColor: '#DA5552',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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

const update: React.FC = () => {
    const[name, setName] = useState("")
  const [isSelectedNegativeO, setIsSelectedNegativeO] = useState(false);
  const [isSelectedPositiveO, setIsSelectedPositiveO] = useState(false);
  const [isSelectedNegativeA, setIsSelectedNegativeA] = useState(false);
  const [isSelectedPositiveA, setIsSelectedPositiveA] = useState(false);
  const [isSelectedNegativeB, setIsSelectedNegativeB] = useState(false);
  const [isSelectedPositiveB, setIsSelectedPositiveB] = useState(false);
  const [isSelectedNegativeAB, setIsSelectedNegativeAB] = useState(false);
  const [isSelectedPositiveAB, setIsSelectedPositiveAB] = useState(false);
  return (
    <View style={style.container}>
     <TextInput
        placeholder="Seu nome"
        style={[style.input, style.layout]}
        onChangeText={(value) => setName(value)}
      />
    
      {/* <View style={{flexDirection: 'row', }}>

        <CheckBox
          value={isSelectedNegativeO}
          onValueChange={() => setIsSelectedNegativeO(!isSelectedNegativeO)}
        />
        <Text>O - </Text>
        <CheckBox
          value={isSelectedPositiveO}
          onValueChange={() => setIsSelectedPositiveO(!isSelectedPositiveO)}
        />
        <Text>O + </Text>
        <CheckBox
          value={isSelectedNegativeA}
          onValueChange={() => setIsSelectedNegativeA(!isSelectedNegativeA)}
        />
        <Text>A - </Text>
        <CheckBox
          value={isSelectedPositiveA}
          onValueChange={() => setIsSelectedPositiveA(!isSelectedPositiveA)}
        />
        <Text>A + </Text>
        <CheckBox
          value={isSelectedNegativeB}
          onValueChange={() => setIsSelectedNegativeB(!isSelectedNegativeB)}
        />
        <Text>B - </Text>
        <CheckBox
          value={isSelectedPositiveB}
          onValueChange={() => setIsSelectedPositiveB(!isSelectedPositiveB)}
        />
        <Text>B + </Text>
        <CheckBox
          value={isSelectedNegativeAB}
          onValueChange={() => setIsSelectedNegativeAB(!isSelectedNegativeAB)}
        />
        <Text>AB - </Text>
        <CheckBox
          value={isSelectedPositiveAB}
          onValueChange={() => setIsSelectedPositiveAB(!isSelectedPositiveAB)}
        />
        <Text>AB + </Text>
      </View>

      <TextInput
        placeholder="Senha"
        style={[style.input, style.layout]}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Confirmar senha"
        style={[style.input, style.layout]}
        onChangeText={(value) => setName(value)}
      /> */}
    
    
    </View>
  );
};

export default update;
