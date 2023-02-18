import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// import s happen above
const MovieScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
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
    </SafeAreaView>
  );
};

export default MovieScreen;
