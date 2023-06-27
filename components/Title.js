import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = () => {
  return (
    <View>
      <Text style={styles.title1}>Notes App</Text>
      <Text style={styles.title2}>Take notes and naver forget</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title1: {
    fontSize: 30,
    padding: 16,
    fontWeight :"bold",
    color: "#AE8B59"
  },
  title2 : {
    fontSize : 15,
    padding : 5
  }  
});

export default Title;
