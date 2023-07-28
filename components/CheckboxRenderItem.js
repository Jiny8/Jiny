import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const CheckboxRenderItem = ({item, deleteList, setDeleteList}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  
  const valueChange = () => {
    
    let tmpList = deleteList;
    if (!toggleCheckBox) tmpList.push(item.title);
    else tmpList = tmpList.filter((i) => i.title !== item.title)
   
    setDeleteList(tmpList);
    setToggleCheckBox(!toggleCheckBox);
  }

  return (
    <View style={{flexDirection:'row'}}>
      <CheckBox
        style={styles.checkbox} 
        value={toggleCheckBox}
        onValueChange={valueChange}
      />
      <Pressable
        style={styles.container}
        onPress={valueChange}>
        <Text style={styles.title}>{item.title}</Text>
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

export default CheckboxRenderItem;
