import { StyleSheet, Text, View, SafeAreaView, SectionList, TextInput, Button, TouchableOpacity, FlatList  } from 'react-native';
import React, {useEffect, useState} from 'react'
import NavBar from './NavBar.js';
import ListItem from './ListItem.js';
import axios from 'axios';


const Home = ({ navigation }) => {
    const [json, setJson] = useState([])
    useEffect(() => {
        console.log('mounted');
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
                let data = await axios(config);
                // console.log('res', data.data.data.myPlayLists);
                let response = data.data.data.myPlayLists
                for (let i = 0; i < response.length; i++) { // doi property songArr thanh data de render
                    response[i].data = response[i]['songArr']
                    delete response[i].songArr;
                }
                setJson(response);
                console.log('res', json);
            }
            handleData();
    }, [])
    const renderItem = ({item}) => {
        return (
                <ListItem item={item} />
        )
    }
    return (
        <View style={styles.home}>
            <SafeAreaView style={{ flex: 1 }}>
                <SectionList
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                    stickySectionHeadersEnabled={false}
                    sections={json} // mang chua cac playlist
                    renderItem={({ item, section }) => {
                        return null;
                    }}
                    renderSectionHeader={({ section, item }) => ( // mot section la mot playlist
                        <>
                            <Text style={styles.home__sectionHeader}>{section.name}</Text>
                            <FlatList
                                    horizontal
                                    data={section.data} // mang cac bai hat
                                    renderItem={renderItem}
                                    keyExtractor={section => section.id}
                                    showsHorizontalScrollIndicator={false}
                            />
                        </>
                    )}
                />
            </SafeAreaView>
            <NavBar navigation={navigation}/>
                
        </View>
        
        
    )
}

export default Home
const styles = StyleSheet.create({
    home: {       
        alignItems: 'center',
        height: "100%",
        backgroundColor: "#101010",
        paddingTop: "10%",
    },
    home__contents: {
        
    },
    home__sectionHeader:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    }

})