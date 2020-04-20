import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from "react-native";

import Swiper from "react-native-swiper";
import SwitchAction from "./Components/SwitchAction";
import { Actions } from "react-native-router-flux";
import useRegister from "src/Hooks/useRegister";
import axios from "axios";
import api from "../../config/api";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState(0);
  // const isCreate = useRegister(username, email, password);

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    if (!name || !email || !password) {
      Alert.alert(
        "Opa! Algo deu errado.",
        "Alguma coisa acontece, confira seus dados e tente novamente."
      );
    } else {
      try {
        let response = await api.post("/createAccount", {
          username,
          email,
          password
        });
        let { _id, message } = response.data;
        if (_id) {
          Alert.alert(
            "Seu usário foi criado com sucesso!",
            "Faça o login para continuar"
          );
          setEmail("");
          setPassword("");
          setUsername("");
          Actions.login();
        } else if (message) {
          Alert.alert("Opa!", message);
        }

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <SwitchAction index={index} />
      <Swiper
        style={style.wrapper}
        showsPagination={false}
        showsButtons={false}
        loop={false}
        onIndexChanged={index => {
          setIndex(index);
        }}
      >
        <KeyboardAvoidingView style={style.container}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ marginTop: 20, marginBottom: 10 }}>
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
              <Text style={[style.text, { fontSize: 20, margin: 5 }]}>
                Entrar
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView style={style.container} behavior="padding">
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ marginTop: 130 }}>
              <Text style={style.textLogo}>iHelp</Text>
            </View>
            <TextInput
              placeholder="Seu nome"
              style={[style.input, style.layout]}
              onChangeText={value => {
                setUsername(value);
              }}
            ></TextInput>
            <TextInput
              placeholder="Email"
              style={[style.input, style.layout]}
              onChangeText={value => {
                setEmail(value);
              }}
            ></TextInput>
            <TextInput
              secureTextEntry
              placeholder="Digite uma senha"
              style={[style.input, style.layout]}
              onChangeText={value => {
                setPassword(value);
              }}
            ></TextInput>

            <TouchableOpacity
              style={[
                style.button,
                style.layout,
                { marginTop: 40, backgroundColor: "#fff" }
              ]}
              onPress={() => {
                registerUser(username, email, password);
              }}
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
    </>
  );
}
