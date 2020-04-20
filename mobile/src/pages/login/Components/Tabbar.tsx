import React from "react";
import { View, Text } from "react-native";

// import { Container } from './styles';

export default function TabBar(props: any) {
  return (
    <View
      style={{
        flex: 1,
        width:"100%",
        position: "absolute",
        bottom: 0,
        height: 70,
        backgroundColor: "#ffff"
      }}
    >
      <Text style={{ color: "#fff", fontSize: 12 }}>{props.title}</Text>
    </View>
  );
}
