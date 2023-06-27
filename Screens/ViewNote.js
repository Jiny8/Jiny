import React from 'react';
import { View, Text, Button,Touchable,Pressable,StyleSheet,TextInput } from 'react-native';


function ViewNote({route, navigation}) {
    return(
        <View style={styles.container}>
          {console.log(route)}

          <Text style={styles.text1}>View Note</Text>
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.content}>{route.params.contents}</Text>

          <Pressable style={styles.buttonStyle} activeOpacity={0.5} onPress={()=> navigation.popToTop()} >
              <Text style={styles.textStyle}>처음으로</Text>
          </Pressable>
          <Pressable style={styles.buttonStyle2} activeOpacity={0.5} 
            onPress={()=> navigation.navigate('CreateNChangeNote', {contents:route.params.contents, title:route.params.title})} >
              <Text style={styles.textStyle}>편집하기</Text>
          </Pressable>
      </View>
    
  )}
  //navigation.navigate 는 같은 페이지일경우 내용만 바꿔서 페이지 표시해주며, navigation.push 는 계속 페이지 쌓는 기능이다.
  const styles = StyleSheet.create({
      buttonStyle: {
        alignItems: "center",
        justifyContent: "center",
        width: 130,
        position: "absolute",
        marginTop: 500,
        right: 200,
        height: 50,
        backgroundColor: "#AE8B59",
        borderRadius: 100
      },
      buttonStyle2: {
          alignItems: "center",
          justifyContent: "center",
          width: 130,
          position: "absolute",
          marginTop: 500,
          right: 40,
          height: 50,
          backgroundColor: "#AE8B59",
          borderRadius: 100
        },
      textStyle: {
        fontSize: 15,
        color: "white"
      },
      container: {
          top : 10,
          left : 10,
        },

        text1 : {
          fontSize : 25,
          color : "#AE8B59",
          
        },

        title: {
          top : 20,
          left : 5,
          width : '90%',
          borderRadius: 8,
          borderWidth: 1,
          padding: 8,
          marginBottom: 20,
          color: "white",
          borderRadius : 15,
          backgroundColor: '#FFE4C4',
          color: "",
          fontSize: 15,
          fontWeight: "bold",
          marginBottom: 30,
        },
        content : {
          top : 10,
          left : 5,
          height : 300,
          width : '90%',
          borderRadius: 10,
          borderWidth: 1,
          padding: 8,
          marginBottom: 20,
          color: "white",
          borderRadius : 15,
          backgroundColor: '#FFE4C4',
          color: "",
          fontSize: 15,
          fontWeight: "bold",
        }
    });
  // 선택한 데이터를 볼 수 있는 페이지입니다.
  export default ViewNote;