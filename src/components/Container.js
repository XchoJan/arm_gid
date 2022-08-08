import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

const Container = (props) => {
  const { children } = props;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{marginBottom: 35}}>
        {props.logo && <View style={styles.logo_box}>
          <Text style={styles.logo} />
        </View>}
        <Text style={styles.title}>
          {props.title}
        </Text>
        <View>
          {children}
        </View>
      </View>
    </ScrollView>

  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292F3F",
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  logo_box: {
    alignSelf: "center",
    marginBottom: 45,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
  },
});
