import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as RootNavigation from "./RootNavigation";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate("Globomantics")}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>News Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Quote</Text>
      </TouchableOpacity>
   
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  button: {
    padding: 20,
  },
});
