import React from "react";
import Container from "../../../components/Container";
import { Text, View, StyleSheet, Image } from "react-native";

const SingleChatScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.user_box}>
          <Image style={styles.user_image} source={{ uri: props.user.avatar }} />
        </View>
        <View>
          <Text style={styles.user_name}>
            {props.user.name}
          </Text>
        </View>
      </View>
      <Container>
        <View>

          <View>
            <Text>asd</Text>
          </View>
        </View>
      </Container>
    </View>
  );
};

export default SingleChatScreen;

const styles = StyleSheet.create({
  header: {
    width: "110%",
    backgroundColor: "#212121",
    height: 70,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    alignSelf: "center"
  },
  user_box:{

  },
  user_image: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 20,
  },
  user_name:{
    color: '#FFF',
    fontSize: 16
  }
});
