import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const contacts = [
  { id: "1", nom: "toto", email: "toto@gmail.com", telephone: "0606060606" },
  { id: "2", nom: "tata", email: "tata@gmail.com", telephone: "0606060606" },
  { id: "3", nom: "titi", email: "titi@gmail.com", telephone: "0606060606" },
];

const ContactList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Contacts</Text>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FicheContact", { contact: item })}
          >
            <Text style={styles.name}>{item.nom}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  item: {
    backgroundColor: "#f1f2f6",
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
  },
  name: {
    fontSize: 18,
    color: "#2d3436",
  },
});

export default ContactList;
