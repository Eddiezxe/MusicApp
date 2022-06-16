import { StyleSheet, Text, View, SafeAreaView, SectionList, TextInput, Button, TouchableOpacity, FlatList, Image  } from 'react-native';

import React from 'react'
import {useGlobalState} from '../reducer/UserInfoProvider.js'

const UserSetting = ({navigation}) => {
    const [user, dispatch] = useGlobalState();
    console.log('info--------------------', user.user.user);
    const handleLogout = () =>{
        dispatch({ // gui token den global state
            type: 'SET_LOGOUT',
            token: '',
        })
    }
    return (
        <SafeAreaView style={styles.UserSetting}>
            {/* User Profile */}
            <TouchableOpacity style={styles.User}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{uri: user.user.user.avatar}}
                    />
                    <View style={styles.texts__Conainer}>
                        <Text numberOfLines={1} style={styles.text}>{user.user.user.name || 'Your name here'}</Text> 
                    </View>
                </View>
            </TouchableOpacity>
            {/* Logout button */}
            <TouchableOpacity style={styles.logout__btn} onPress={handleLogout}>
                <Text style={styles.logout__text}>Log out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default UserSetting

const styles = StyleSheet.create({
    UserSetting: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#101010',
        alignItems: 'center',
    },
    imageContainer: {
        backgroundColor: '#101010',
        marginHorizontal: 16,
        marginVertical: 16,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    User: {
    },
    image: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: '#fff'
    },
    text: {
        color: '#fff',
        fontSize: 18,
        overflow: "hidden",
        fontWeight: "800",
        marginLeft: 32
    },
    texts__Conainer: {
        alignItems: "center",
    },
    logout__btn: {
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: "#ff2a00",
        width: 200,
        alignItems: 'center',
        borderRadius: 15,
    },
    logout__text: {
        color: "#FFF"
    }
})