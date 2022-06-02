import React from 'react';
import { useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';

// import { useTheme, lightTheme, darkTheme } from 'Themes';
// import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import Stacks from './Stacks';


export default function AppNavigator() {
  
  return (
    <NavigationContainer >
      
      <Stacks/>
    </NavigationContainer>
  );
}
