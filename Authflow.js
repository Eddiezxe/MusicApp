import PlayListScreen from './src/components/PlayListScreen';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login.js'
import Search from './src/components/Search.js'
import Register from './src/components/Register.js'
import Home from './src/components/Home.js';
import PlaylistSong from './src/components/PlaylistSong.js'
import UserInfoContext from './src/reducer/UserInfoProvider.js'



const Stack = createNativeStackNavigator();
export default function Authflow() {
    // const [userInfo, dispatch] = useContext(UserInfoContext);
    // console.log(userInfo);
    const userInfo = true;
    return(
            userInfo ?  (
                <NavigationContainer>
                        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Search" component={Search} />
                            <Stack.Screen name="Playlist" component={PlayListScreen} />
                            <Stack.Screen name="PlaylistSong" component={PlaylistSong} />
                        </Stack.Navigator>
                </NavigationContainer>) : (
                <NavigationContainer>
                        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                            <Stack.Screen name="Login">
                                {(props) => <Login {...props} />}
                            </Stack.Screen>
                            <Stack.Screen name="Register" component={Register} />
                        </Stack.Navigator>
                </NavigationContainer>
            )
        
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    }
})
