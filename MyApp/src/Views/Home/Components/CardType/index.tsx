import React from 'react';
import {View, Text, Image} from 'react-native';

import alert from '../../../../Assets/2.png';
import normal from '../../../../Assets/3.png';
import excelent from '../../../../Assets/4.png';
// import { Container } from './styles';

const CardType: React.FC = (props: any) => {
  const ImageBlood = () => {
    switch (props.number) {
      case 4:
        return (
          <Image source={require('../../../../Assets/4.png')} height={200} />
        );
        break;
      case 2:
        return (
          <Image source={require('../../../../Assets/2.png')} height={200} />
        );
        break;
      case 3:
        return (
          <Image source={require('../../../../Assets/3.png')} height={200} />
        );
        break;

      default:
        break;
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 50,
        borderRadius: 10,
        alignItems: 'center',
      }}>
      {ImageBlood()}
      <Text
        style={{
          color: '#000',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {props.type}
      </Text>
      <Text style={{fontSize: 18}}>{props.situation}</Text>
    </View>
  );
};

export default CardType;
