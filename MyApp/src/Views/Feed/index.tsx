import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import Card from '../Feed/Components/Card/index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
const style = StyleSheet.create({
  container: {
    backgroundColor: '#A52A2A',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
    width: '100%',
    padding: 12,
    margin: 5,
    borderRadius: 14,
  },
  text: {
    color: '#fff',
  },
});

const Feed: React.FC = ({navigation}) => {
  const [card, setCards] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const getAllPosts = async () => {
    let value = await AsyncStorage.getItem('@user');
    let myToken = await JSON.parse(value);
    console.log('token', myToken.token);

    let response = await fetch('https://ihelp-back.herokuapp.com/feed/');

    let resJSON = await response.json();
    setCards(resJSON);
    console.log('resJSON_FEED', resJSON);
  };

  useEffect(() => {
     getAllPosts();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllPosts();
    setTimeout(() => setRefreshing(false), 2000);
  }, [refreshing]);

  return (
    <View style={[style.container]}>
      <Text
        style={{
          marginTop: 10,
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 13,
        }}>
        Clique nos cards para entrar em contato
      </Text>

      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          marginTop: 20,
          width: 350,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#A52A2A">
          <ScrollView onScrollEndDrag={onRefresh}>
            {card ? (
              card.map((card) => {
                return (
                  <Card
                    key={card._id}
                    color="#A52A2A"
                    phone={card.phone}
                    bloodtype={card.bloodtype}
                    hospital={card.hospital}
                    urgency={card.urgency}
                    username={card.username}
                    city={card.city}
                  />
                );
              })
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ActivityIndicator
                  size="large"
                  color="#A52A2A"></ActivityIndicator>
              </View>
            )}
          </ScrollView>
        </RefreshControl>
      </View>
    </View>
  );
};

export default Feed;
