import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";

const FicheContact = ({ nom, telephone, email }) => {


  const appeler = () => {
    Linking.openURL(`tel:${telephone}`);
  };

  const envoyerEmail = () => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png",}}
        style={styles.avatar}
      />


      <View style={styles.infoContainer}>
        <Text style={styles.nom}>{nom}</Text>
        <Text style={styles.telephone}>📞 {telephone}</Text>
        <Text style={styles.email}>✉️ {email}</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={appeler}>
            <Text style={styles.buttonText}>Appeler</Text>
          </TouchableOpacity>


          <TouchableOpacity style={[styles.button, styles.emailButton]} onPress={envoyerEmail}>
            <Text style={styles.buttonText}>Email</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );

  
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 15,
    padding: 16,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  nom: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2d3436",
  },
  telephone: {
    fontSize: 16,
    color: "#0984e3",
    marginTop: 5,
  },
  email: {
    fontSize: 16,
    color: "#636e72",
    marginTop: 3,
  },
  actions: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
  button: {
    backgroundColor: "#0984e3",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  emailButton: {
    backgroundColor: "#00b894",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default FicheContact;
