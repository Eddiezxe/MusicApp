import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import {  Library, Player } from 'Screens';

const Stack = createStackNavigator();
 
const Stacks = ({ params }) => (
  <Stack.Navigator initialRouteName="Library">
    
     <Stack.Screen
      name="Library"
      component={Library}
      options={{
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="Player"
      component={Player}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Stacks;
