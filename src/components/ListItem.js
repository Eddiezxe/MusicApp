import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = ({item}) => {
    function handleSongPressed(){
            
    }
    return (
        <TouchableOpacity onPress={handleSongPressed}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: item.imageURL}}
                />
                <Text numberOfLines={1} style={styles.text}>{item.name}</Text>   
            </View>
        </TouchableOpacity>
        
    )
}

export default ListItem

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#101010',
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
        marginVertical: 16,
        width: 140,
        height: 160,
    },
    image: {
        width: 120,
        height: 120,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        overflow: "hidden",
        marginTop: 10,
    }
})