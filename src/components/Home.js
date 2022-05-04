import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import React from 'react'
import NavBar from './NavBar.js'

const Home = ({ navigation }) => {
    return (
        <View style={[styles.Home]}>
            <Text>Homepage</Text>
            <NavBar navigation={navigation}/>
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    Home: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
    }
})