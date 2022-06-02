import React, {useState, useEffect} from 'react';

import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';

import {Colors, Images, Metrics} from 'Constants';
import {McText, McImage, PlayButton} from 'Components';
import { Audio } from 'expo-av';
import {Favorites} from '../../Mock/Dummy';
//
const audio = {
    filename: 'My Awesome Audio',
     uri: require('Assets/images/NoiNayCoAnh.mp3'),
  };

//   {
//     filename: 'My Awesome Audio',
//     uri: require('Assets/images/Chay-Ve-Khoc-Voi-Anh.mp3'),
//   },
//   {
//     filename: 'My Awesome Audio',
//     uri: require('Assets/images/LA-LUNG-Original-Vu.mp3'),
//   },
// ]
//
const Player = ({ navigation, route }) => {

    const [selectedMusic, setSelectedMusic] = useState(null);

    useEffect(()=>{
        let {selectedMusic} = route.params;
        setSelectedMusic(selectedMusic);
    },[])

    const [sound, setSound] = React.useState();
    
    //
    const source1 = Favorites;
    //
    const [isPlaying, setIsPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState(null);

  useEffect(() => {
    if (playbackObject === null) {
      setPlaybackObject(new Audio.Sound());
    }
  }, []);

   const handleAudioPlayPause = async () => {
    if (playbackObject !== null && playbackStatus === null) {
      const status = await playbackObject.loadAsync(
       audio.uri,
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
//

//   async function playSound() {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync(
        //  Favorites.uri,
        // {shouldPlay: true }
//        require('Assets/images/Chay-Ve-Khoc-Voi-Anh.mp3')

//     );
//     setSound(sound);

//     console.log('Playing Sound');
//     await sound.playAsync(); 

//     // await sound.pauseAsync();
// }
//   React.useEffect(() => {
//     return sound
//       ? () => {
//           console.log('Unloading Sound');
//           sound.unloadAsync(); }
//       : undefined;
//   }, [sound]);

//

    return (
    <Container>
        <StatusBar barStyle="light-content" />
        <HeaderSection>
            <TouchableOpacity onPress={()=>{
                navigation.goBack();
            }}>
                {/* nut back */}
                <McImage source={Images.back_icon}/>
            </TouchableOpacity>
                {/* dau 3 cham more */}
            <McImage source={Images.more_icon}/>
        </HeaderSection>

        {/* Music detail */}
        <MusicDetailSection>
            <McImage source={selectedMusic?.thumbnail} style={{
                marginHorizontal: 81,
                marginVertical: 60
            }}/>
            <View style={{marginTop: 16, justifyContent:'center', alignItems:'center'}}>
                <McText semi size={24} color={Colors.primary} align='center'>{selectedMusic?.title}</McText>
                <McText medium size={14} color={Colors.grey0} style={{marginTop: 4}} align='center'>{selectedMusic?.artist}</McText>
            </View>
        </MusicDetailSection>

        {/* Slider Section */}
        <SliderSection>
            <Slider style={{marginTop: 20}}
                minimumValue={0}
                maximumValue={1}
                // value={0.2}
                minimumTrackTintColor={Colors.accent}
                maximumTrackTintColor={Colors.primary}
                
            >
            </Slider>
        </SliderSection>

        {/* Control button section */}
        <ControlSection>
            {/*  */}
            <TouchableOpacity>
            <McImage source={Images.icon_prev} style={{marginTop: 12}}/>
            </TouchableOpacity>
            <View style={{
                width: 231,
                height: 80,
                marginTop: 12,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    width: 250,
                    height: 54,
                    // borderRadius: 54,
                    // backgroundColor: Colors.grey0,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {/*  */}
                    <TouchableOpacity >
                    <McImage source={Images.loop} style={{marginLeft: 24}}/>
                    </TouchableOpacity>
                    <View style={{
                        width: 100,
                        height: 88,
                        // borderRadius: 88,
                        // backgroundColor: Colors.background,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {/* <TouchableOpacity onPress={playSound}>
                        <McImage source={Images.play_icon}></McImage>
                        </TouchableOpacity> */}

                        <TouchableOpacity onPress={handleAudioPlayPause} >
                        { isPlaying ?(
                        <McImage source={Images.pause_icon}></McImage>
                        ) : (
                        <McImage source={Images.play_icon1}></McImage>
                        )
                        }
                        </TouchableOpacity>
                        {/* <PlayButton size={70} circle={62.82} icon={Images.play_icon}></PlayButton> */}
                    </View>
                    <TouchableOpacity>
                    <McImage source={Images.shuffle} style={{marginRight: 22}}/>
                    </TouchableOpacity>
                </View>
            </View>
            {/*  */}
            <TouchableOpacity>
            <McImage source={Images.icon_next} style={{marginTop: 12}}/>
            </TouchableOpacity>
        </ControlSection>
    </Container>
);}

const Container = styled.SafeAreaView`
    flex:1;
    background-color: ${Colors.background};
`;

const HeaderSection= styled.View`
    margin: 12px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const MusicDetailSection = styled.View`
    margin: 0px 24px;
    justify-content: center;
    align-items: center;
`;

const SliderSection = styled.View`
    margin: 0px 24px;

`;
const ControlSection = styled.View`
    margin: 32px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default Player;
