import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const CostomInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor={'white'}
    />
  );
};

export default CostomInput;
const styles = StyleSheet.create({
  input:{
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#303844',
    marginVertical: 10,
    color: 'white',

  }
})
