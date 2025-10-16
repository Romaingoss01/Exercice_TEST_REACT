import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FicheContact from "./component/FicheContact";

const Stack = createNativeStackNavigator();


const contacts = [
  { id: "1", nom: "Toto", telephone: "+3312345678", email: "toto@gmail.com" },
  { id: "2", nom: "Tata", telephone: "+3398765432", email: "tata@gmail.com" },
];


const ListeContacts = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Text style={styles.title}>Liste de Contacts</Text>

    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (

        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => navigation.navigate("FicheContact", { contact: item })}
        >

          <Text style={styles.contactName}>{item.nom}</Text>
          
        </TouchableOpacity>
      )}
    />
  </View>
);


const FicheContactScreen = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <FicheContact
        nom={contact.nom}
        telephone={contact.telephone}
        email={contact.email}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="⬅️ Retour à la liste" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListeContacts" component={ListeContacts} options={{ title: "Contacts" }} />
        <Stack.Screen name="FicheContact" component={FicheContactScreen} options={{ title: "Fiche du contact" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16, paddingTop: 30 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  contactItem: { backgroundColor: "#f1f2f6", padding: 15, borderRadius: 10, marginVertical: 8 },
  contactName: { fontSize: 18 },
});
