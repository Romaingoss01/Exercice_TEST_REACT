import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const AjouterContact = ({ navigation, route }) => {
  const { ajouterContact } = route.params;
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    if (!nom || !telephone || !email) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
      return;
    }

    const nouveauContact = {
      id: Date.now().toString(),
      nom,
      telephone,
      email,
    };

    ajouterContact(nouveauContact);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un contact</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />
      <TextInput
        style={styles.input}
        placeholder="Téléphone"
        keyboardType="phone-pad"
        value={telephone}
        onChangeText={setTelephone}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Ajouter" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
});

export default AjouterContact;
