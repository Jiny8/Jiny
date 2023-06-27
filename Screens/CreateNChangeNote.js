import React, {useState} from 'react';
import { View, Text, Button,Touchable,Pressable,StyleSheet,TextInput } from 'react-native';
import { createPost } from '../lib/posts';
import { getPost } from '../lib/posts';
import { modifyPost } from '../lib/posts';
import { deletePost } from '../lib/posts';

function CreateNChangeNote({route, navigation}) {
  const [text1, setText1] = useState(route.params.title == undefined ? "": route.params.title); 
  const [text2, setText2] = useState(route.params.contents); 

  const onSubmit = async()=>{
    navigation.popToTop();
    await createPost({title: text1, contents: text2});
  }
  const onDel = async()=>{
    navigation.popToTop();
    await deletePost({t: text1});
  }
  const onUpdate = async()=>{
    navigation.popToTop();
    await modifyPost({t: text1, c:text2});
  }

    return(
        <View style={styles.container}>
            {console.log(route)}
            <Text>넘겨받는 번호: {route.params.num}</Text>

            <Text style={styles.text1}>Create&ChangeNote</Text>
            <TextInput
            style={styles.title}
            value={text1}
            onChangeText={setText1}/>
            <TextInput
            style={styles.content}
            value={text2}
            onChangeText={setText2} />

            <Pressable style={styles.buttonStyle} activeOpacity={0.5} onPress={()=> navigation.popToTop()} >
                <Text style={styles.textStyle}>처음으로</Text>
            </Pressable>
            {route.params.title == undefined ? 
            <Pressable style={styles.buttonStyle2} activeOpacity={0.5} onPress={onSubmit}  >
                <Text style={styles.textStyle}>저장하기</Text>
            </Pressable>
            :<><Pressable style={styles.buttonStyle2} activeOpacity={0.5} onPress={onUpdate}  >
                <Text style={styles.textStyle}>수정</Text>
            </Pressable>
            <Pressable style={styles.buttonStyle3} activeOpacity={0.5} onPress={onDel}  >
            <Text style={styles.textStyle}>삭제</Text>
             </Pressable></>}
            
        </View>
      
    )}
    //onPress={()=> navigation.push('ViewNote', {num: route.params.num+1})} 
    // {num: route.params.num+1} 이름(여기서는 num)을 정하여 넘겨주는 기능이다. 다른페이지에서 이름(num)을 이용하여 넘겨준 자료를 쓸수있다
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
          buttonStyle3: {
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            position: "absolute",
            marginTop: 450,
            right: 40,
            height: 40,
            backgroundColor: "red",
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
  
  //고유번호를 부여하여  선택한 고유페이지번호를 불러올수있도록할것, 버튼은 주로 프레셔블을 사용함,
 // <Button title='새 노트 만들기'
 //           onPress={()=> navigation.push('CreateNote', {num: route.params.num+1})}/>
 //           <Button title='뒤로가기(현재 페이지 빠져나오기)'
 //           onPress={()=> navigation.pop()}/>
//            <Button title='처음으로(메인화면)'
//            onPress={()=> navigation.popToTop()}/>
  export default CreateNChangeNote;