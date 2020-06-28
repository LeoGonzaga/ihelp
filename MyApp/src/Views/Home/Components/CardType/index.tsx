import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

import alert from '../../../../Assets/2.png';
import normal from '../../../../Assets/3.png';
import excelent from '../../../../Assets/4.png';
// import { Container } from './styles';

const CardType: React.FC = (props: any) => {
  console.log(props);
  const windowWidth = Dimensions.get('window').width;
  const ImageBlood = () => {
    switch (props.number) {
      case 4:
        return (
          <Image source={require('../../../../Assets/4.png')} height={100} />
        );
        break;
      case 2:
        return (
          <Image source={require('../../../../Assets/2.png')} height={100} />
        );
        break;
      case 3:
        return (
          <Image source={require('../../../../Assets/3.png')} height={100} />
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
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
      }}>
      <Image source={{uri: props.number}} style={{width: 100, height: 140}} />
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
