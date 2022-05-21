import React, {useState, useEffect} from 'react';

// import TrackPlayer, { Capability } from 'react-native-track-player';

import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';

import {Colors, Images, Metrics} from 'Constants';
import {McText, McImage, PlayButton} from 'Components';
// import TrackPlayer from 'react-native-track-player';


const Player = ({ navigation, route }) => {

    const [selectedMusic, setSelectedMusic] = useState(null);

    useEffect(()=>{
        let {selectedMusic} = route.params;
        setSelectedMusic(selectedMusic);
    },[])

    return (
    <Container>
        {/* <StatusBar barStyle="light-content" />  */}
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
            <McImage source={Images.play_back} style={{marginTop: 12}}/>
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
                    <McImage source={Images.loop} style={{marginLeft: 24}}/>
                    <View style={{
                        width: 100,
                        height: 88,
                        // borderRadius: 88,
                        // backgroundColor: Colors.background,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <McImage source={Images.play_icon}></McImage>
                        {/* <PlayButton size={70} circle={62.82} icon={Images.play_icon}></PlayButton> */}
                    </View>
                    <McImage source={Images.shuffle} style={{marginRight: 22}}/>
                </View>
            </View>
            {/*  */}
            <McImage source={Images.play_next} style={{marginTop: 12}}/>
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
