import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
// import {Context} from './src/reducer/Context.js';
import UserInfoProvider from './src/reducer/UserInfoProvider.js';
import Authflow from './Authflow.js'

export default function App() {

  return(
        <UserInfoProvider>
            <Authflow/>
        </UserInfoProvider>
      
  )
  
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  }
})
