import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import FicheContact from "./component/FicheContact"; 

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FicheContact
        nom="Toto"
        telephone="+00000000"
        email="toto@gmail.com"
      />
      <FicheContact
        nom="Tata"
        telephone="+00000000"
        email="tata@gmail.com"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: 50,
  },
});
