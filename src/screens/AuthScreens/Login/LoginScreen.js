import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import Container from "../../../components/Container";
import CostomInput from "../../../components/CostomInput";
import CostomButton from "../../../components/CostomButton";
import FbSvg from "../../../assets/icons/FbSvg";
import GoogleSvg from "../../../assets/icons/GoogleSvg";
import { color1 } from "../../../helpers/colors";
import { useDispatch } from "react-redux";

const LoginScreen = (props) => {
  const dispatch = useDispatch();

  function handleLogin() {
      dispatch({type: 'IS_LOGGED', payload: true})
  }

  return (
    <Container title={"Логин"} logo>
      <View style={{ marginTop: 25 }}>
        <CostomInput placeholder={"Логин"} />
        <CostomInput placeholder={"Пароль"} />
      </View>
      <View>
        <CostomButton onPress={handleLogin} title={"Войти"} />
      </View>
      <View style={styles.soc_link_btn_box}>
        <TouchableOpacity style={styles.soc_link_btn}>
          <FbSvg fill={"blue"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.soc_link_btn}>
          <GoogleSvg fill={"blue"} />
        </TouchableOpacity>
      </View>
      <View style={styles.registration_box}>
        <Text style={styles.registration_title}>
          Первый раз у нас:?
        </Text>
      </View>
      <CostomButton
        onPress={() => {
          props.navigation.navigate("Registration");
        }}
        title={"Зарегистрироватся"}
      />
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  soc_link_btn_box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  soc_link_btn: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 10,
    margin: 15,
    borderRadius: 10,
  },
  registration_box: {
    marginVertical: 15,
    alignItems: "center",
  },
  registration_title: {
    fontSize: 17,
    color: color1,
  },
});
