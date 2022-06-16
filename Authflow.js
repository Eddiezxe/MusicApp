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
import {useGlobalState} from './src/reducer/UserInfoProvider.js'
import UserSetting from './src/components/UserSetting.js';


const Stack = createNativeStackNavigator();

export default function Authflow() {
    const [{token}, dispatcher] = useGlobalState();
    return(
        // <UserSetting/>
        token ?  (
                <NavigationContainer>
                        <Stack.Navigator  initialRouteName="Home" screenOptions={{headerShown: false}}>
                            <Stack.Screen name="Home" component={Home}/>
                            <Stack.Screen name="Search" component={Search}/>
                            <Stack.Screen name="Playlist" component={PlayListScreen}/>
                            <Stack.Screen name="PlaylistSong" component={PlaylistSong}/>
                            <Stack.Screen name="UserSetting" component={UserSetting}/>
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


