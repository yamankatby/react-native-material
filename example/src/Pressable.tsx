import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Pressable } from "@react-native-material/core";

const PressableScreen = () => (
  <SafeAreaView>
    <View style={{ flexDirection: "row", margin: 16 }}>
      <View style={{ flex: 1, height: 80, borderRadius: 4, backgroundColor: "lightgray", overflow: "hidden" }}>
        <Pressable style={StyleSheet.absoluteFill} />
      </View>
      <View
        style={{
          flex: 1,
          height: 80,
          marginStart: 16,
          borderRadius: 4,
          backgroundColor: "lightgray",
          overflow: "hidden",
        }}
      >
        <Pressable style={StyleSheet.absoluteFill} />
      </View>
    </View>
  </SafeAreaView>
);

export default PressableScreen;
