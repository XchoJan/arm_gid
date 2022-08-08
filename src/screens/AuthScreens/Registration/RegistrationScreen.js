import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Container from "../../../components/Container";
import CostomInput from "../../../components/CostomInput";
import CostomButton from "../../../components/CostomButton";
import { color1 } from "../../../helpers/colors";

const RegistrationScreen = (props) => {
  return (
    <Container title={"Регистрация"} logo>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.input_container}>
          <View style={{ width: "100%" }}>
            <CostomInput placeholder={"Почта"} />
            <CostomInput placeholder={"Номер"} />
            <CostomInput placeholder={"Пароль"} />
            <CostomInput placeholder={"Повторить пароль"} />
            <CostomButton title={"Регистрация"} />
          </View>
          <View style={{marginTop: 15}}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate("Login")}}>
              <Text style={styles.last_title}>Уже есть аккаунт:?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  logo_box: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: 35,
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 100,
  },
  input_container: {
    marginTop: 45,
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 24,
  },
  last_title:{
    color: color1,
    fontSize: 16
  }
});
