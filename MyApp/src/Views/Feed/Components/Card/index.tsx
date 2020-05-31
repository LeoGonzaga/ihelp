import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// import { Container } from './styles';

const Card: React.FC = (props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: props.color,
          padding: 10,
          margin: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          elevation: 2,
        }}>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={{fontWeight: 'bold', color: '#fff'}}>Nome: </Text>
          <Text style={{color:"#c9c9c9"}}>Leonardo Gonzaga Silva</Text>
          <Text style={{fontWeight: 'bold', color: '#fff'}}>Urgencia: </Text>
          <Text style={{color:"#c9c9c9"}}>Normal</Text>
          <Text style={{fontWeight: 'bold', color: '#fff'}}>Cidade: </Text>
          <Text style={{color:"#c9c9c9"}}>Pedralva</Text>
          <Text style={{fontWeight: 'bold', color: '#fff'}}>Hospital: </Text>
          <Text style={{color:"#c9c9c9"}}>Homecentro - P.A</Text>
        </View>
        <View>
          <Text style={{fontSize: 50, color: 'red', fontWeight: 'bold'}}>
            O +
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
