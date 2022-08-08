import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Container from "../../../components/Container";
import CostomButton from "../../../components/CostomButton";

const WelcomeScreen = (props) => {
  return (
    <Container logo>
      <View>
        <View style={styles.buttons_box}>
          <CostomButton title={"Войти"} onPress={()=>{props.navigation.navigate("Login")}}/>
          <CostomButton marginVertical={10} title={"Регистрация"} onPress={()=>{props.navigation.navigate("Registration")}}/>
          <CostomButton title={"Зайти как гость"}/>
        </View>
      </View>
    </Container>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({

  buttons_box:{

  }
});
