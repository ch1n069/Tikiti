import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import Malls from "../data/Malls";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
// import moment from "jalali-moment";
// import s happen above
const MovieScreen = () => {
  const route = useRoute();
  const mallsData = Malls;
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const [mall, setMall] = useState([]);
  console.log(route.params);
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            onPress={() => {
              navigation.goBack();
            }}
            name="arrow-back"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 5 }}>
            {route.params.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Ionicons name="search" size={24} color="black" />
          <Ionicons
            style={{ marginHorizontal: 10 }}
            name="ios-filter"
            size={24}
            color="black"
          />
          <Ionicons name="share-outline" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          marginTop: 15,
          marginLeft: 8,
        }}
      >
        <AntDesign name="Safety" size={24} color="orange" />
        <Text style={{ paddingLeft: 4 }}>Safety is our priority </Text>
      </View>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2022-08-20")}
        endDate={new Date("2022-08-31")}
        initialSelectedDate={new Date("2020-08-22")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />

      {mallsData.map((item, index) => (
        <Pressable
          style={{ margin: 10 }}
          key={index}
          onPress={() => setMall(item.name)}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.name}</Text>
          {mall.includes(item.name) ? (
            <FlatList
              numColumns={3}
              data={item.showtimes}
              renderItem={({ item }) => (
                <Pressable
                  style={{
                    borderColor: "green",
                    padding: 10,
                    borderWidth: 0.5,
                    width: 80,
                    margin: 4,
                    borderRadius: 3,
                  }}
                  onPress={() => {
                    navigation.navigate("theatre", {
                      name: route.params.name,
                      mall: mall,
                      timeSelected: item,
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "green",
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Text>
                </Pressable>
              )}
            />
          ) : null}
        </Pressable>
      ))}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default MovieScreen;
