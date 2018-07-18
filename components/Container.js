import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});

const Container = ({ children }) => (
  <View Style={styles.container}>{children}</View>
);

export default Container;
