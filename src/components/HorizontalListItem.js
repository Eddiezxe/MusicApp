import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HorizontalListItem = ({item}) => {
    function handleSongPressed(){
        
    }
    return (
        <TouchableOpacity style={styles.HorizontalListItem} onPress={handleSongPressed}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: item.imageURL}}
                />
                <View>
                    <Text numberOfLines={1} style={styles.songName}>{item.name}</Text>
                    <Text numberOfLines={1} style={styles.author}>{item.author}</Text>
                </View>           
            </View>
        </TouchableOpacity>
        
    )
}

export default HorizontalListItem

const styles = StyleSheet.create({
    HorizontalListItem: {
        width: "100%",
        backgroundColor: "#101010",
        borderBottomWidth: 1,
        borderBottomColor: '#bbb'
    },
    imageContainer: {
        backgroundColor: '#101010',
        marginHorizontal: 16,
        marginVertical: 16,
        width: "100%",
        flexDirection: 'row'
    },
    image: {
        width: 60,
        height: 60,
    },
    songName: {
        color: '#fff',
        fontSize: 18,
        overflow: "hidden",
        paddingHorizontal: 16,
        fontWeight: "800"
    }, 
    author: {
        color: '#fff',
        fontSize: 12,
        overflow: "hidden",
        marginTop: 10,
        paddingHorizontal: 16,
        fontWeight: "600"
    }

})