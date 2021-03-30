import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import logo from "./assets/pnggrad16rgb.png";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Image source={logo} style={{ width: 35, height: 35 }} />
      <View>
        <Text style={styles.text}>{props.headerDisplay}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "OpenSans"
  },
});
