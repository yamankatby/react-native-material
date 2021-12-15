import React from "react";
import { Stack as MStack, VStack } from "@react-native-material/core";
import { View } from "react-native";

const StackScreen = () => {
  return (
    <VStack spacing={2} fill center>
      <View style={{ width: 40, height: 40, backgroundColor: "#faf089" }} />
      <View style={{ width: 40, height: 40, backgroundColor: "#ff6347" }} />
      <View style={{ width: 40, height: 40, backgroundColor: "#fed7e2" }} />
      <View style={{ width: 40, height: 40, backgroundColor: "#fed7e2" }} />
    </VStack>
  )
  return (
    <MStack spacing={5} divider direction="column-reverse" style={{ backgroundColor: 'skyblue' }} self="start">
      <View style={{ width: 40, height: 40, backgroundColor: "#faf089", flexDirection: 'column-reverse' }} />
      <View style={{ width: 40, height: 40, backgroundColor: "#ff6347" }} />

      <View style={{ width: 40, height: 40, backgroundColor: "#fed7e2" }} />
    </MStack>
  )
};

export default StackScreen;
