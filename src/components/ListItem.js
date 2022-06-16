import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Audio } from 'expo-av';

const ListItem = ({item, route }) => {

    const [selectedMusic, setSelectedMusic] = useState (null);

    useEffect(()=>{
        // let {selectedMusic} = route.params;
        setSelectedMusic(selectedMusic);
    },[])

    // const [sound, setSound] = React.useState ();
    
    //
    // const currentTrack = Favorites[selectedMusic];
    //
    const [isPlaying, setIsPlaying] = useState (false);
    const [playbackObject, setPlaybackObject] = useState (null);
    const [playbackStatus, setPlaybackStatus] = useState (null);

  useEffect(() => {
    if (playbackObject === null) {
      setPlaybackObject(new Audio.Sound());
    }
  }, []);


  const handleAudioPlayPause = async () => {
    if (playbackObject !== null && playbackStatus === null) {
      const status = await playbackObject.loadAsync(

        // Cach 1 play nhac co san        
        // selectedMusic.URL,
        // selectedMusic._id,
        
        // { shouldPlay: true },

        // Cach 2 play nhac tu url
        {uri: item.URI},
        // {uri: selectedMusic.title},
        {uri: item.author},

        { shouldPlay: true }
      );
      setIsPlaying(true);
      return setPlaybackStatus(status);
    }

    // It will pause our audio
    if (playbackStatus.isPlaying) {
      const status = await playbackObject.pauseAsync();
      setIsPlaying(false);
      return setPlaybackStatus(status);
      
    }

    // It will resume our audio
    if (!playbackStatus.isPlaying) {
      const status = await playbackObject.playAsync();
      
      setIsPlaying(true);

      return setPlaybackStatus(status);
    }
  };
    // function handleSongPressed(){
        
    // }
    return (
        <TouchableOpacity onPress={handleAudioPlayPause}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: item.imageURL}}
                />
                <Text numberOfLines={1} style={styles.text}>{item.name}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

export default ListItem

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#101010',
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
        marginVertical: 16,
        width: 140,
        height: 160,
    },
    image: {
        width: 120,
        height: 120,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        overflow: "hidden",
        marginTop: 10,
    }
})