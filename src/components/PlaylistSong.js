import * as React from 'react';
import { StyleSheet,Text, View, FlatList, SafeAreaView } from 'react-native';
import PlayList from './PlayList';
import Icon from 'react-native-vector-icons/AntDesign'; 
const renderItem = function({item}){
    return(<PlayList playList = {item}/>);
} 
const PlaylistSong = ({navigation}) => {
    const playListArr = []
    return (
        <View style={styles.playlist}>
            <Icon style={styles.icon} name="arrowleft" size={22} color="#fff"  onPress={() => navigation.navigate('Playlist')}/>
            <SafeAreaView style={styles.container}>               
                <FlatList data={playListArr}
                renderItem ={renderItem}
                keyExtractor= {(item)=> item.id}
                showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
    </View>
    )
}

export default PlaylistSong

const styles = StyleSheet.create({
    playlist: {
        width: '100%',
        height: '100%',
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
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    icon: {
        position: 'absolute',
        top: 50,
        left: 16,
        zIndex: 10
    }
})