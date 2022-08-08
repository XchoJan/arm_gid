import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Pressable, ScrollView, Modal } from "react-native";
import CostomButton from "../../../components/CostomButton";
import MenuSvg from "../../../assets/icons/MenuSvg";
import { color1 } from "../../../helpers/colors";
import CheckBox from "@react-native-community/checkbox";
import Line from "../../../components/Line";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = (props) => {
  const [product] = useState([
    {
      id: 1,
      name: "Исаакиевский собор",
      title: "Большая Морская Улица",
      description: "Крупнейший православный храм Санкт-Петербурга. Расположен на Исаакиевской площади. Кафедральный собор Санкт-Петербургской епархии с 1858 по 1929 год. С 1928 года имеет статус музея.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYBu6CCe-8TYKN5mRXcvjgdxmVrffSvvci7TaMFQ1pw&s",
    },
    {
      id: 2,
      name: "Исаакиевский собор",
      title: "Большая Морская Улица",
      description: "Крупнейший православный храм Санкт-Петербурга. Расположен на Исаакиевской площади. Кафедральный собор Санкт-Петербургской епархии с 1858 по 1929 год. С 1928 года имеет статус музея.",
      img: "https://armeniaplanet.com/Content/Img/sight/fortress/sev-berd-fortress/1.jpg",
      attraction: [
        {
          id: 1,
          name: "Alexandrapol",
          address: "MusaLer 25",
          range: "5km",
          images: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/27643583.jpg?k=2266c76887108e239a2649d437daa0a650f4c05eca03713dd2323b6fc3c6124e&o=&hp=1",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        },
        {
          id: 2,
          name: "Alexandrapol",
          address: "MusaLer 25",
          range: "52km",
          images: "https://media-cdn.tripadvisor.com/media/photo-s/05/a7/6f/b5/salon-armenian-restaurant.jpg",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        },
        {
          id: 3,
          name: "Alexandrapol",
          address: "MusaLer 25",
          range: "5km",
          images: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/27643583.jpg?k=2266c76887108e239a2649d437daa0a650f4c05eca03713dd2323b6fc3c6124e&o=&hp=1",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        },
        {
          id: 4,
          name: "Alexandrapol",
          address: "MusaLer 25",
          range: "5km",
          images: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/27643583.jpg?k=2266c76887108e239a2649d437daa0a650f4c05eca03713dd2323b6fc3c6124e&o=&hp=1",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        },
      ],
    },
    {
      id: 3,
      name: "Исаакиевский собор",
      title: "Большая Морская Улица",
      description: "Крупнейший православный храм Санкт-Петербурга. Расположен на Исаакиевской площади. Кафедральный собор Санкт-Петербургской епархии с 1858 по 1929 год. С 1928 года имеет статус музея.",
      img: "https://onewaytour.com/wp-content/uploads/2019/03/sevberdghkjg.jpg",
    },
    {
      id: 4,
      name: "Исаакиевский собор",
      title: "Большая Морская Улица",
      description: "Крупнейший православный храм Санкт-Петербурга. Расположен на Исаакиевской площади. Кафедральный собор Санкт-Петербургской епархии с 1858 по 1929 год. С 1928 года имеет статус музея.",
      img: "https://armeniaplanet.com/Content/Img/sight/fortress/sev-berd-fortress/1.jpg",
    },
    {
      id: 5,
      name: "Исаакиевский собор",
      title: "Большая Морская Улица",
      description: "Крупнейший православный храм Санкт-Петербурга. Расположен на Исаакиевской площади. Кафедральный собор Санкт-Петербургской епархии с 1858 по 1929 год. С 1928 года имеет статус музея.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN302XtOkmS-M4Zv9ciOYUv1i-kqI6_jV7sTLk-6nYyTDHWrJKQKYMEltFd6TXouM6-qw&usqp=CAU",
    },
    {
      id: 6,
      name: "Исаакиевский собор",
      title: "Большая Морская Улица",
      description: "Крупнейший православный храм Санкт-Петербурга. Расположен на Исаакиевской площади. Кафедральный собор Санкт-Петербургской епархии с 1858 по 1929 год. С 1928 года имеет статус музея.",
      img: "https://armeniaplanet.com/Content/Img/sight/fortress/sev-berd-fortress/1.jpg",
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const dispatch = useDispatch();

  const renderProduct = ({ item }) => (
    <View style={styles.content_box} key={item.id}>
      <View style={styles.image_box}>
        <Image style={styles.image} source={{ uri: item.img }} />
      </View>
      <View style={styles.desc_box}>
        <View>
          <Text numberOfLines={1} style={styles.item_title}>{item.title}</Text>
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={styles.item_description_box}>
          <Text style={styles.item_description}>{item.description}</Text>
        </ScrollView>
        <View style={styles.buttons_box}>
          <View style={styles.more_button_box}>
            <CostomButton onPress={() => {
              props.navigation.navigate("More", {
                product: item,
              });
            }} title={"Подробнее"} />
          </View>
        </View>
      </View>
    </View>
  );

  function handleLogOut(){
    dispatch({type: 'IS_LOGGED', payload: false})
  }

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Modal
        animationType="slide"
        hardwareAccelerated={true}
        transparent={true}
        visible={modalVisible}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={styles.modal_view}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.modal_item, styles.modal_item_title]}>Тип экскурсии</Text>
              <Line/>
              <View style={styles.modal_item_box}>
                <Text style={styles.modal_item}>Церковь</Text>
                <CheckBox
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
              </View>
              <View style={styles.modal_item_box}>
                <Text style={styles.modal_item}>Статуи</Text>
                <CheckBox
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
              </View>
              <View style={styles.modal_item_box}>
                <Text style={styles.modal_item}>Парки</Text>
                <CheckBox
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
              </View>
              <View style={styles.modal_item_box}>
                <Text style={styles.modal_item}>Музеи</Text>
                <CheckBox
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
              </View>
            </View>
            <View>
              <CostomButton onPress={handleLogOut} title={"Выйти "} />
            </View>
          </View>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.modal_opacity} />
        </View>
      </Modal>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.header_item}>
          <MenuSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={product}
          renderItem={renderProduct}
          extraData={product}
        />
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292F3F",
    flex: 1,
    padding: 20,
    width: "100%",
  },
  header: {
    height: 60,
    backgroundColor: "#383434",
    paddingHorizontal: 20,
  },
  header_item: {
    alignItems: "flex-end",
    marginTop: 15,
  },
  content_box: {
    width: "100%",
    height: 180,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    zIndex: 2,
    borderColor: color1,
  },
  image_box: {
    width: "50%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  item_title: {
    color: "#FFF",
    width: "90%",
    fontSize: 16,
  },
  desc_box: {
    width: "50%",
    marginLeft: 5,
    marginVertical: 5,
  },
  item_description: {
    color: "#fff",
  },
  item_description_box: {
    maxHeight: "55%",
    zIndex: 1,
    paddingRight: 5,
  },
  buttons_box: {
    flexDirection: "row",
    paddingHorizontal: 10,
    left: -5,
  },
  modal_view: {
    width: "50%",
    backgroundColor: "#adadad",
    height: "100%",
    padding: 15,
  },
  modal_item_box: {
    flexDirection: "row",
  },
  modal_opacity: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    flex: 1,
    width: "50%",
  },
  more_button_box: {
    width: "80%",
    left: -5,
  },
  modal_item: {
    color: "#fff",
    marginVertical: 5,
    fontSize: 16,
    width: 120
  },
  modal_item_title: {
    color: color1,
    fontSize: 17,
    width: "100%"
  }
});
