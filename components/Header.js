import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";

const Header = () => {
  const types = [
    {
      id: "0",
      name: "IMAX",
    },
    {
      id: "1",
      name: "4DX",
    },
    {
      id: "2",
      name: "PXL",
    },
    {
      id: "3",
      name: "GOLD",
    },
    {
      id: "4",
      name: "PLAYHOUSE",
    },
  ];
  return (
    <>
      <ImageBackground
        style={{ aspectRatio: 5 / 2, height: 170 }}
        source={{
          url: "https://images.pexels.com/photos/7991571/pexels-photo-7991571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
      >
        <Pressable
          style={{
            position: "absolute",
            height: 130,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 6,
            padding: 10,
            top: 140,
            left: 20,
            width: "82%",
          }}
        >
          <Text style={{ size: 16, fontWeight: "500", color: "grey" }}>
            Releasing in 2 days
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <View>
              <Text style={{ size: 16, fontWeight: "bold" }}>Spectre</Text>
              <Text style={{ color: "grey", marginTop: 4 }}>
                {" "}
                U/A - English
              </Text>
            </View>

            <Pressable
              style={{
                backgroundColor: "#ffc40c",
                padding: 10,
                borderRadius: 6,
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
          </View>
          <Text style={{ marginTop: 8, fontsize: 15, fontWeight: "500" }}>
            Fantasy ,Thriller , Action
          </Text>
        </Pressable>
      </ImageBackground>
      <View style={{ marginTop: 100 }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {types.map((item, index) => (
            <View
              style={{
                margin: 10,
                borderColor: "C0C0C0",
                borderWidth: 0.4,
                borderRadius: 4,
                padding: 10,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 14, fontWeight: "500" }}
              >
                {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Header;
