import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PlaylistItem = ({item}) => {
    function handleSongPressed(){}
    return (
        <TouchableOpacity style={styles.PlayListContainer} onPress={handleSongPressed}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: item.imageURL}}
                />
                <View>
                    <Text numberOfLines={1} style={styles.text}>{item.name}</Text> 
                    <Text numberOfLines={1} style={styles.description}>{item.description}</Text> 
                    <Text numberOfLines={1} style={[styles.author]}>by {item.author.name}</Text> 
                </View>             
            </View>
        </TouchableOpacity>
        
    )
}

export default PlaylistItem

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#101010',
        marginHorizontal: 16,
        marginVertical: 16,
        width: "100%",
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 120,
        borderWidth: 1,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        overflow: "hidden",
        marginTop: 10,
        paddingHorizontal: 16,
        fontWeight: "800"
    },
    author: {
        color: '#efefef',
        fontSize: 12,
        overflow: "hidden",
        marginTop: 32,
        paddingHorizontal: 16,
    },
    description: {
        color: '#fff',
        fontSize: 14,
        overflow: "hidden",
        marginTop: 10,
        paddingHorizontal: 16,
    }
})