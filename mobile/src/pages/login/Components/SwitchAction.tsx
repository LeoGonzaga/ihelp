import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

// import { Container } from './styles';
interface Index {
  index: number;
}

export default function SwitchAction(props: Index) {
  return (
    <View
      style={{
        backgroundColor: "#DA5552",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: props.index == 1 ? "#fff" : "#891C1A",
          padding: 15,
          width: 130,
          borderRadius: 50,
          marginTop: 20
        }}
      >
        <Text
          style={{
            color: props.index == 0 ? "#FFF" : "#000",
            fontSize: 19,
            textAlign: "center"
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: props.index == 1 ? "#891C1A" : "#fff",
          padding: 15,
          borderRadius: 50,
          width: 130,
          marginTop: 20,
          marginLeft: -30
        }}
      >
        <Text
          style={{
            color: props.index == 1 ? "#fff" : "#000",
            fontSize: 19,
            textAlign: "center"
          }}
        >
          Registrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
