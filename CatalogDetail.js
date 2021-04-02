import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import globoCatalog from "./CatalogDB";

export default function CatalogDetail({ route, navigation }) {
  const [catalogData, ] = useState(globoCatalog);
  const { id } = route.params;
  const selectedProduct = catalogData.find((post) => post.modelNumber === id);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttontext}>Go back</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.model}>{selectedProduct.model}</Text>
        <Image style={styles.productImage} source={selectedProduct.image} />
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Quote", {
            model: selectedProduct.model,
            modelNumber: selectedProduct.modelNumber,
          })
        }
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 100,
  },
  button: { padding: 20 },
  buttontext: { fontFamily: "OpenSans", fontWeight: "bold" },
  model: {
    fontFamily: "OpenSans",
    paddingBottom: 15,
  },
  productimage: { height: 250, width: "100%" },
  description: { paddingTop: 10 },
});
