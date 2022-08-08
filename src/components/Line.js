import React from "react";
import { Text, StyleSheet } from "react-native";

const Line = () => {
  return (
      <Text style={styles.line}/>
  );
};

export default Line;
const styles = StyleSheet.create({
  line: {
    width: '120%',
    left: -15,
    backgroundColor: 'black',
    height: 1,
    marginVertical: 15
  }
})
