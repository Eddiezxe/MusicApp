import * as React from 'react';
import { StyleSheet,Text, View, FlatList } from 'react-native';
import PlayList from './PlayList';
import {playList} from '../../types';

const playListArr: playList[] = [{
    id: '1',
    imageURL: 'https://i1.sndcdn.com/avatars-000500544273-6kcyh0-t500x500.jpg',
    name: 'Milk-tea',
    author: 'Dang Khuong'
  }, 
  {
    id: '2',
    imageURL: 'https://static.tuoitre.vn/tto/r/2017/06/29/eminem-014-1498724304.jpg',
    name: 'Bubble-tea',
    author: 'Someone'
  },

  {
    id: '3',
    imageURL: 'https://c4.wallpaperflare.com/wallpaper/81/477/97/rihana-singer-wallpaper-preview.jpg',
    name: 'Sunshine',
    author: 'Wester'
  }];

export default function PlayListScreen() {
  return (
    <View style={styles.container}>
      <FlatList data={playListArr}
       renderItem ={({item}) => <PlayList playList = {item}/>}
       keyExtractor= {(item)=> item.id}
       horizontal = {true}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});