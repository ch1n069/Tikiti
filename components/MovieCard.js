import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import Movie from "../data/Movie";
import Header from "./Header";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function MovieCard() {
  const data = Movie;
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={Header}
        data={data}
        renderItem={({ item }) => (
          <Pressable style={{ margin: 10, marginHorizontal: 15 }}>
            <Image
              style={{
                borderRadius: 6,
                aspectRatio: 2 / 3,
                height: 240,
              }}
              source={{ uri: item.image }}
            />
            <Text style={{ fontSize: 16, fontWeight: "600", width: 170 }}>
              {item.name.substr(0.16)}
            </Text>
            <Text style={{ marginTop: 4, color: "grey" }}>{item.language}</Text>
            <Text style={{ marginTop: 4, fontWeight: "500", fontSize: 10 }}>
              {item.genre}
            </Text>
            <Pressable
              onPress={() => navigation.navigate("movies", { name: item.name })}
              style={{
                backgroundColor: "#ffc40c",
                padding: 10,
                borderRadius: 6,
                width: 100,
                marginTop: 10,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                BOOK
              </Text>
            </Pressable>
          </Pressable>
        )}
      ></FlatList>
    </View>
  );
}
