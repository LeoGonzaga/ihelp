import React from 'react';
import {View, Text, Linking, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// import { Container } from './styles';

const Card: React.FC = (props) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <TouchableOpacity
      onPress={() =>
        Linking.openURL(`https://api.whatsapp.com/send?phone=55` + props.phone)
      }>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: props.color,
          padding: 10,
          margin: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16}}>
            Nome:{' '}
          </Text>
          <Text style={{color: '#c9c9c9', fontSize: 16}}>{props.username}</Text>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16}}>
            Urgencia:{' '}
          </Text>
          <Text style={{color: '#c9c9c9', fontSize: 16}}>{props.urgency}</Text>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16}}>
            Cidade:{' '}
          </Text>
      <Text style={{color: '#c9c9c9', fontSize: 16}}>{props.city}</Text>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16}}>
            Hospital:{' '}
          </Text>
          <Text style={{color: '#c9c9c9', fontSize: 16}}>{props.hospital}</Text>
        </View>
        <View>
          <Text style={{fontSize: 80, color: '#fff', fontWeight: 'bold'}}>
            {props.bloodtype}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
