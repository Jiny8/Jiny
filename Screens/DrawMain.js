import React, { useState, useEffect,useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Button, Touchable,Pressable,StyleSheet,TextInput } from 'react-native';
import CreateButton from "../components/CreateButton";
import Search from "../components/Search";
import Title from "../components/Title";
import NoteList from '../components/NoteList';
import { getPost } from '../lib/posts';

function DrawMain({navigation}) {
    const [items, setItems] = useState([]);

    const [Keyword, setKeyword] = useState("");
    const [logs,setlogs] = useState([]);

//useFocusEffect(useCallback) > '포커싱'될때마다 실행함(스마트폰 사용시:native) , useEffect >> 페이지가 변경될때마다 실행함(웹 사용시:react)
    useFocusEffect(
        useCallback(()=> {
            async function get() {
                let temp = await getPost();
                setItems(temp);
            }
            get();
        }, []),
    );

    useEffect(()=> {
        setlogs(Keyword === ""
            ? items
            : items.filter((items) => [items.title].some((text) => text.includes(Keyword))))
    },[Keyword, items]);
//[Keyword, items] 둘 중에 하나라도 맞으면 활성됨
      
    return(
        <View>
            <Title/>
            <View style={styles.block}>
            <TextInput
            placeholder="Q. Search"
            style={styles.input}
            autoFocus
            onChangeText={setKeyword}
            value={Keyword} />
            </View>
            
            <NoteList navigation={navigation} items={logs} />
            <CreateButton  navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
      height: 40,
      paddingHorizontal: 16,
      borderColor: "#bdbdbd",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      alignItems: "center",
      flexDirection: "row"
    },
    input: {
        flex: 1
    },
    button: {
        marginLeft: 8
    }
  });
  
export default DrawMain;