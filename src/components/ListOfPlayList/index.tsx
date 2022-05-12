import React from "react";
import {Text, View} from 'react-native';
import PlayList from '../PlayList';
import {playList} from '../../../types';
import style from './style';

export type ListOfPlayListProps = {
    play_list: [playList];
}

const ListOfPlayList = (Props: ListOfPlayListProps) => (
    <View></View>
)

export default ListOfPlayList;