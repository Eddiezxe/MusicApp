import * as React from 'react';
import { StyleSheet,Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import ListItem from './ListItem.js';
import HorizontalListItem from './HorizontalListItem.js'
import Icon from 'react-native-vector-icons/AntDesign'; 

const PlaylistSong = ({route, navigation}) => {
    const renderItem = function({item}){
        return(<HorizontalListItem item = {item}/>);
    }
    console.log(route.params);
    const playListArr = route.params.songArr;// lay mang cac bai hat
    return (
        <TouchableOpacity>
            <View style={styles.header}>
                <Icon style={styles.icon} name="arrowleft" size={22} color="#fff"  onPress={() => navigation.navigate('Playlist')}/>
                <Text style={styles.title} name="">{route.params.name}</Text>
            </View>
            <View style={styles.playlist}>
                <SafeAreaView style={styles.container}>               
                    <FlatList data={playListArr}
                    renderItem ={renderItem}
                    keyExtractor= {(item)=> item.id}
                    showsVerticalScrollIndicator={false}
                    />
                </SafeAreaView>
            </View>
        </TouchableOpacity>
    )
}

export default PlaylistSong

const styles = StyleSheet.create({
    playlist: {
        width: '100%',
        height: '100%',
        marginTop: 70,
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#101010'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: 'row',
        backgroundColor: '#101010',
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    icon: {
        position: 'absolute',
        top: 24,
        left: 16,
    }
})