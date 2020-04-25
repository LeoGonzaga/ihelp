import React, { useState, useReducer, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  TouchableHighlight
} from "react-native";

import Swiper from "react-native-swiper";
import * as Animatable from "react-native-animatable";
import SwitchAction from "./Components/SwitchAction";
import { Actions } from "react-native-router-flux";
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
    fontSize: 23,
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
        if (password.length < 6) {
          Alert.alert(
            "Senha inválida!",
            "Sua senha é muito curta. Por favor, digite uma senha de 6 digitos"
          );
        }

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

  const loginUser = async (email: string, password: string) => {
    if (!email || !password) {
      Alert.alert(
        "Eita!",
        "Por favor, confira se os campos estão preenchido e com os dados corretos."
      );
    } else {
      try {
        let response = await api.post("/login", {
          email,
          password
        });
        console.log(response);

         let { _id, message } = response.data;
         if (_id) {
           Actions.home();
         } else if (message) {
           Alert.alert(message);
         }

        // Actions.home();
      } catch (error) {}
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
        bounces

      >
        <KeyboardAvoidingView style={style.container} behavior="padding">
          <Animatable.View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center"
            }}
            animation="fadeInLeft"
          >
            <View style={{ marginTop: 50, marginBottom: 140 }}>
              <Animatable.Text animation="fadeIn" style={style.textLogo}>
                iHelp
              </Animatable.Text>
            </View>
            <TextInput
              placeholder="username@email.com"
              style={[style.input, style.layout]}
              onChangeText={value => setEmail(value)}
            ></TextInput>
            <TextInput
              secureTextEntry
              placeholder="***************"
              style={[style.input, style.layout]}
              onChangeText={value => setPassword(value)}
            ></TextInput>

            <TouchableOpacity
              style={[style.button, style.layout, { marginTop: 40 }]}
              onPress={() => {
                loginUser(email, password);
              }}
            >
              <Text style={[style.text, { fontSize: 20, margin: 5 }]}>
                Entrar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "#fff" }}>Esqueci minha senha.</Text>
            </TouchableOpacity>
          </Animatable.View>
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
            <View style={{ marginTop: 60, marginBottom: 50 }}>
              <Text style={style.textLogo}>iHelp</Text>
              <Text style={[style.text, { fontSize: 15 }]}>
                Faça seu cadastro
              </Text>
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
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
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

            <TouchableHighlight
              style={[
                style.button,
                style.layout,
                {
                  marginTop: 40,
                  backgroundColor: "#fff"
                }
              ]}
              underlayColor="#ccc"
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
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
      </Swiper>
    </>
  );
}
