import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

import Swiper from "react-native-swiper";

const style = StyleSheet.create({
  wrapper: {},
  container: {
    backgroundColor: "#DA5552",
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  textLogo: {
    fontSize: 46,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  },
  input: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 20,
    color: "#B3B6B7"
  },
  button: {
    alignItems: "center",
    color: "#fff",
    backgroundColor: "#891C1A",
    padding: 10
  },
  layout: {
    width: "80%",
    padding: 15,
    margin: 5,
    borderRadius: 40
  },
  text: {
    color: "#fff"
  }
});
export default function Login() {
  return (
    <Swiper style={style.wrapper} showsPagination={false} showsButtons={false}>
      <KeyboardAvoidingView style={style.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{ marginTop: 20, marginBottom: 130 }}>
            <Text style={style.textLogo}>iHelp</Text>
          </View>
          <TextInput
            placeholder="username@email.com"
            style={[style.input, style.layout]}
          ></TextInput>
          <TextInput
            secureTextEntry
            placeholder="***************"
            style={[style.input, style.layout]}
          ></TextInput>

          <TouchableOpacity
            style={[style.button, style.layout, { marginTop: 40 }]}
            onPress={() => {}}
          >
            <Text style={[style.text, { fontSize: 20 }]}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <KeyboardAvoidingView style={style.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{ marginTop: 30, marginBottom: 130 }}>
            <Text style={style.textLogo}>iHelp</Text>
          </View>
          <TextInput
            placeholder="Seu nome"
            style={[style.input, style.layout]}
          ></TextInput>
          <TextInput
            placeholder="Email"
            style={[style.input, style.layout]}
          ></TextInput>
          <TextInput
            placeholder="Digite uma senha"
            style={[style.input, style.layout]}
          ></TextInput>

          <TouchableOpacity
            style={[
              style.button,
              style.layout,
              { marginTop: 40, backgroundColor: "#fff" }
            ]}
            onPress={() => {}}
          >
            <Text
              style={[
                style.text,
                { fontSize: 20, color: "#DA5552", fontWeight: "bold" }
              ]}
            >
              Registrar
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Swiper>
  );
}
