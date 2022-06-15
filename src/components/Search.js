import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import {useEffect, useState} from 'react';
import NavBar from './NavBar.js';
import axios from 'axios';
import SearchableDropDown from 'react-native-searchable-dropdown';
import ListItem from './ListItem.js';
const Search = ({ navigation }) => {
    // const [serverData, setServerData] = useState([]);
    const [songName, setSongName] = useState('');
    const [serverData, setServerData] = useState({})
    async function handleSearchSong(){
        var axios = require('axios');
        var data = JSON.stringify({
        query: `query TimBaiHatTheoTen($name: String!) {
        searchSongByName(name: $name) {
            id
            name
            author
            URI
            imageURL
        }
        }`,
        variables: {"name": songName}
        });

        var config = {
        method: 'post',
        url: 'https://apollo-api-for-musicapp.herokuapp.com/',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        let response = await axios(config);
        setServerData(response.data.data.searchSongByName);
        console.log('-------response from server', response.data.data.searchSongByName[0]);
        console.log('songName to query', songName);
        //response.data.data.searchSongByName
    }
    console.log('SonggName', songName);
    const renderItem = ({item}) => {
        return (
                <ListItem item={item} />
        )
    }
    return (
        <View style={styles.search}>
            <View style={[styles.search__searchSection]}>
                <View style={[styles.search__searchContainer]}>
                    <TextInput style={[styles.search_searchInput, styles.mt10]} placeholderTextColor={'#555'}  placeholder="Search here" onChangeText={newText => setSongName(newText)}/>
                    <Icon name="search1" size={30} color="#000" />
                </View>
                <TouchableOpacity style={[styles.search__btn]} onPress={handleSearchSong}>
                        <Text style={{color: '#fff'}}>Search</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.listItem]}>
                <FlatList data={serverData}
                    renderItem ={renderItem}
                    keyExtractor= {(item)=> item.id}
                    showsVerticalScrollIndicator={false}/>  
                </View>
            <NavBar navigation={navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    white:{
        color: "white",
        fontWeight: "bold",
    },
    search: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "black",
        height: "100%",
        width: "100%"
    },
    search__searchSection:{
        marginTop: 100,
        alignItems: "center",
    },
    search__searchText: {
        fontSize: 32,
    },
    search__searchContainer:{
        width: "85%",
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#fff",
        padding: 8,
        borderRadius: 16,
        backgroundColor: "#fff"
    },
    search__btn:{
        backgroundColor: "#1ED760",
        paddingHorizontal: 48,
        borderRadius: 15,
        paddingVertical: 12,
        marginTop: 14,
    },
    search_searchInput: {
        width: "90%",
        paddingVertical: 0,
        color: "#000"
    }

})
export default Search