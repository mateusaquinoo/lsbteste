import {
    Text,
    View,
    ScrollView,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Modal,
    Pressable,
  } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StackNavigation } from "./routes/user.route";
import logolsb from "./assets/logo.png";


  export default function Home () {
    const navigation: StackNavigation = useNavigation();

    return (
      <NavigationContainer>
      <View style={styles.container}>
      <Text style={styles.titleHead}>Nome da escola</Text>

      <View style={styles.box}>
        <Image
          source={logolsb}
          style={styles.buttonImage}
          resizeMode="contain"/>
        <View>
          <Text style={styles.titleBox}>Olá,Matheus.</Text>
          <Text style={styles.subTitleBox}>Bem vindo!</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonsBig}>
          <TouchableOpacity
            style={styles.buttonBig}
            onPress={() => {
              navigation.navigate("Clientes");
            }}
            >
            <Text style={styles.textButtonBig}>Clientes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBig}>
            <Text style={styles.textButtonBig}>Demandas</Text>
          </TouchableOpacity>
          </View>
          
          <View style={styles.buttonsSmall}>
          <TouchableOpacity
            style={styles.buttonSmall}>
            <Text style={styles.textButtonSmall}>Calendario</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSmall}>
            <Text style={styles.textButtonSmall}>Avisos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSmall}>
            <Text style={styles.textButtonSmall}>Ponto</Text>
          </TouchableOpacity>
        </View>

          </View>
      </View>
      </NavigationContainer>
        );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  titleHead: {
    fontSize: 16,
    color: "#000",
  },

  box: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    backgroundColor: "black",
    marginTop: 24,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "#40FF01",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  buttonImage: {
    width: 40,
    height: 40,
  },

  titleBox: {
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 4,
    color: "#ffffff",
  },

  subTitleBox: {
    fontWeight: "400",
    fontSize: 14,
    color: "#ffffff",
  },

  buttons: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    marginTop: 40,
  },

  buttonsBig: {
    flexDirection: "row",
    gap: 20,
  },

  buttonBig: {
    padding: 20,
    paddingBottom: 70,
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    borderBottomColor: "#40FF01",
    borderBottomWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,
    elevation: 3,
  },

  textButtonBig: {
    fontSize: 18,
    fontWeight: "600",
  },
  buttonsSmall: {
    marginTop: 20,
    gap: 20,
    width: "100%",
  },

  buttonSmall: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderBottomColor: "#40FF01",
    borderBottomWidth: 4,
    borderRadius: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  textButtonSmall: {
    fontSize: 16,
    fontWeight: "600",
  },

});


