import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PlaylistItem = ({item, navigation}) => {
    return (
        <TouchableOpacity style={styles.PlayListContainer} onPress={() => navigation.push('PlaylistSong', item)}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: item.imageURL}}
                />
                <View>
                    <Text numberOfLines={1} style={styles.text}>{item.name}</Text> 
                    <Text numberOfLines={1} style={styles.description}>{item.description}</Text> 
                    {/* <Text numberOfLines={1} style={[styles.author]}>by {item.author.name}</Text>  */}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PlaylistItem

const styles = StyleSheet.create({
    PlayListContainer: {
        width: "100%",
        height: "100%",
    },
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
        fontSize: 18,
        overflow: "hidden",
        marginTop: 10,
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
    },
    description: {
        color: '#fff',
        fontSize: 14,
        overflow: "hidden",
        marginTop: 10,
        paddingHorizontal: 16,
    }
})