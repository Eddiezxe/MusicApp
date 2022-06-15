import { StyleSheet,Text, View, FlatList, SafeAreaView } from 'react-native';
import PlayList from './PlayList';
import NavBar from './NavBar.js';
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import PlaylistItem from './PlaylistItem.js';


export default function PlayListScreen({navigation}) {
  const [json, setJson] = useState({});
  // lay data sau khi mount component
  useEffect(() => {
    var axios = require('axios');
        var data = JSON.stringify({
        query: `query PlayListCuaToi{
        myPlayLists {
            name
            id
            imageURL
            description,
            author {
            name
            }
            songArr {
              name
              author
              URI
              imageURL
              title
            }
        ,
            
        }
        }`,
        variables: {}
        });
        var config = {
        method: 'post',
        url: 'https://apollo-api-for-musicapp.herokuapp.com/',
        headers: { 
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTViNDIwYzM1YmM1ZjVhMTEwOWVkYiIsImlhdCI6MTY1NTAyNjcyMCwiZXhwIjoxNjU2MjM2MzIwfQ.eZdzzBDeumUo6kyEV91T5NThCJOKAWeCwhy_Qt8jjKo', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        async function handleData(){
          let jsonGetFromServer = await axios(config);
          // console.log('---------------\n',jsonGetFromServer.data.data);
          setJson(jsonGetFromServer.data.data);
        }
        handleData();
}, [])

const renderItem = function({item}){
  return(<PlaylistItem item={item} navigation={navigation}/>);
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Playlist</Text>
      <SafeAreaView style={{ flex: 1 }}>
          <FlatList data={json.myPlayLists}
          renderItem ={renderItem}
          keyExtractor= {(item)=> item.id}
          showsVerticalScrollIndicator={false}/>  
      </SafeAreaView>
      <NavBar navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#101010',
    paddingTop: 30
  }, 
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
  }
});