import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity,Pressable } from "react-native";

function CreateButton ({navigation}) {
  
// CreateNChangeNote 페이지를 여는 버튼

  return (
    
      <Pressable style={styles.buttonStyle} activeOpacity={0.5} onPress={()=> navigation.navigate('CreateNChangeNote', {num : 1})} >
        
        <Text style={styles.textStyle}>Create Note</Text>
        
      </Pressable>
    
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    position: "absolute",
    top: 550,
    right: 20,
    height: 40,
    backgroundColor: "#AE8B59",
    borderRadius: 100
  },
  textStyle: {
    fontSize: 13,
    color: "white"
  }
});

export default CreateButton;
