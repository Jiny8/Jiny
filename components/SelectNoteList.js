import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import CheckboxRenderItem from "./CheckboxRenderItem";
import { deletePost } from '../lib/posts';
const SelectNoteList = ({navigation, items, wantChoose, setWantChoose}) => {
 
  const [deleteList, setDeleteList] = useState([]);
  const onDelete = async() => {
    for (let i = 0 ; i < deleteList.length ; i++){
      await deletePost({t: deleteList[i]});
    }
    setWantChoose(false)
  }
  return (
    <View>
      <FlatList
        data={items }
        renderItem={({item}) => <CheckboxRenderItem item={item} deleteList={deleteList} setDeleteList={setDeleteList} />}
        keyExtractor={item => item.idx}
      />
      <Pressable style={styles.buttonStyle} activeOpacity={0.5} onPress={() => onDelete()} >
        
        <Text style={styles.textStyle}>삭제</Text>
        
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor:"#AE8B59",
    alignItems: "center",
    justifyContent:"center",
    right: 10,
    left: 10,
    width: 310,
    height:60,
    marginTop: 15,
    marginBottom: 5,
    
  },

  container: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor:"#AE8B59",
    alignItems: "center",
    justifyContent:"center",
    right: 10,
    left: 10,
    width: 310,
    height:60,
    marginTop: 15,
    marginBottom: 5,
    
  },
  checkbox: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor:"#AE8B59",
    padding: 15,
    alignItems: "center",
    justifyContent:"center",
    right: 10,
    left: 10,
    height:60,
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

export default SelectNoteList;
