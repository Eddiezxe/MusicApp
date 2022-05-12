import React from 'react';
import { View, Image, Text } from "react-native";
import styles from "./style"
import {playList} from '../../../types';
export type PlayListProps = {
    playList: playList;
}

const PlayList = (props: PlayListProps) => {
    return( 
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:props.playList.imageURL}}/>
        <Text style={styles.header}>{props.playList.name}</Text>
        <Text style={styles.text}>By {props.playList.author}</Text>
    </View>);
   
}

export default PlayList;