import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FbSvg from "../assets/icons/FbSvg";

const CostomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.button, {marginLeft: props.marginLeft, marginVertical: props.marginVertical ? props.marginVertical : 5}]}>
      <Text style={styles.button_color}>{props.title}</Text>
      {props.FbBtn && <FbSvg/>}
    </TouchableOpacity>
  );
};

export default CostomButton;

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#1c222a',
    height: 50,
    borderRadius: 5,
    marginVertical: 5
  },
  button_color:{
    color: 'white',
    textAlign: "center",
    top: 15,
    fontSize: 16
  }
})
