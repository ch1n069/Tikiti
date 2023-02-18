import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
const HomScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F5F5F5" }}>
      <MovieCard />
    </SafeAreaView>
  );
};

export default HomScreen;

const styles = StyleSheet.create({});
