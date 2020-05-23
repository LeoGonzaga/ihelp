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
          padding: 20,
          margin: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          elevation: 2,
        }}>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={{fontWeight: 'bold'}}>Nome: </Text>
          <Text>Leonardo Gonzaga Silva</Text>
          <Text style={{fontWeight: 'bold'}}>Urgencia: </Text>
          <Text>Normal</Text>
          <Text style={{fontWeight: 'bold'}}>Cidade: </Text>
          <Text>Pedralva</Text>
          <Text style={{fontWeight: 'bold'}}>Hospital: </Text>
          <Text>Homecentro - P.A</Text>
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
