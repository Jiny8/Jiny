import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import DrawMain from "../Screens/DrawMain";
import ViewNote from "../Screens/ViewNote";

const NoteList = ({navigation, items, setWantChoose}) => {

  return (
    <View>
      <FlatList
        data={items }
        renderItem={({item}) => 
         <Pressable style={styles.container}
          onLongPress={()=> setWantChoose(true)}
          onPress={()=> navigation.navigate("ViewNote", {title: item.title, contents: item.contents, date: item.date})}>
           <Text style={styles.title}>{item.title}</Text>
          </Pressable> }
        keyExtractor={item => item.idx}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor:"#AE8B59",
    padding: 15,
    alignItems: "center",
    
    right: 10,
    left: 10,
    width: 310,
    marginTop: 15,
    marginBottom: 5,
    
  },
  title: {
    color: "#AE8B59",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },

});



//노트에 저장한 데이터 가져오기, 저장데이터 드로우메인에 표시(연결)하기

export default NoteList;
