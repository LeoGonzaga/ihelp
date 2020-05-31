import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';

const CardType: React.FC = (props: any) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 80,
        marginTop: 50,
        borderRadius: 10,
      }}>
      <Text
        style={{
          color: '#000',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {props.type}
      </Text>
      <Text>{props.situation}</Text>
    </View>
  );
};

export default CardType;
