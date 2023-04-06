import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const TheartreScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View></View>
        <View style={{ marginLeft: 5 }}>
          <Ionicons
            onPress={() => {
              navigation.goBack();
            }}
            name="arrow-back"
            size={24}
            color="black"
          />
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            {route.params.name}
          </Text>
          <Text
            style={{
              marginTop: 2,
              color: "gray",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            {route.params.mall}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TheartreScreen;

const styles = StyleSheet.create({});
