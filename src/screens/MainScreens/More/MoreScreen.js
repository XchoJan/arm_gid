import React from "react";
import { Image, Text, StyleSheet, View, ScrollView } from "react-native";
import Container from "../../../components/Container";
import CostomButton from "../../../components/CostomButton";
import { color1 } from "../../../helpers/colors";

const MoreScreen = (props) => {
  return (
    <Container>
        <View style={{ flex: 1 }}>
          <View style={styles.image_container}>
            <Image style={styles.image} source={{ uri: props.product.img }} />
          </View>
          <View style={styles.content_box}>
            <Text style={styles.product_title}>
              {props.product.title}
            </Text>
            <Text style={styles.product_description}>
              {props.product.description}
            </Text>
          </View>
          <View style={styles.center_title_box}>
            <Text style={styles.center_title}>Достопримечательности</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.attractions_box}>
            {props.product.attraction?.map((item) =>
              <View style={styles.attractions_item}>
                <Image style={styles.attractions_image} source={{ uri: item.images }} />
                <Text style={styles.attractions_name}>{item.name}</Text>
              </View>,
            )}
          </ScrollView>
        </View>
        <View>
          <CostomButton marginVertical={15} title={"Купить"} />
        </View>
    </Container>

  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  image_container: {
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  content_box: {},
  product_title: {
    textAlign: "center",
    fontSize: 17,
    color: "#fff",
    marginBottom: 10,
  },
  product_description: {
    color: "#fff",
  },
  attractions_box: {
    marginTop: 15,
    marginBottom: 15,

  },
  center_title_box: {
    alignItems: "center",
    marginTop: 10,
  },
  center_title: {
    fontSize: 18,
    color: "#fff",
  },
  attractions_item: {
    width: 100,
    height: 160,
    borderWidth: 1,
    marginRight: 15,
    borderColor: color1,
    borderRadius: 10,
  },
  attractions_image: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  attractions_name: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
});
