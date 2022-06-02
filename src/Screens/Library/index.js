import React from 'react';
import { Text, View, 
    StatusBar,
    TextInput,
    TouchableWithoutFeedback,
    FlatList,
    ScrollView,
} from 'react-native';

import styled from 'styled-components/native';

import {Colors, Images, Metrics} from 'Constants';
import {McText, McImage} from 'Components';
import {dummyData} from 'Mock';


const Library = ({navigation}) => {
    
    const _renderItem = ({item, index}) => {
        return(
            <View>
                <View style={{
                    marginTop: 16,
                    marginLeft: index== 0 ? 24 : 0,
                    marginRight: index== dummyData.Playlists.length - 1 ? 0 : 24,
                }}> 

                <McImage key={index} source={item.thumnail}/>
                <McText>{item.name}</McText>
                <McText>{item.songs} songs </McText>
                </View>
            </View>
        )
    }
    
    return (
    <Container>
        {/* Header Section Library */ }
        <StatusBar barStyle="light-content" />
        <McText bold size ={28} color={Colors.primary} // màu chữ Library
         style={{ marginLeft:20, marginTop:5,}}
        
        >Your Library
        </McText>
        {/* Search Section */}
        <SearchSection>
            <McImage 
            source={Images.find} 
            style={{width: 32, height: 25, marginLeft: 12}}
            ></McImage>

            <TextInput style={{marginLeft: 10}} placeholder="Search here" placeholderTextColor={Colors.grey2}></TextInput>

        </SearchSection>
        {/* Playlist Section */ }
        {/* <TitleSecsion>
           <McText medium size={24} color={Colors.primary}>
               Playlists
            </McText> */}
           {/* <McImage source={Images.home}/> */}
        {/* </TitleSecsion> */}
        
        {/* Favorite */}
        <TitleSecsion>
           <McText medium size={24} color={Colors.primary}>
               Favorites
            </McText>
           {/* <McImage source={Images.home}/> */}
           
        </TitleSecsion>
        <View>
            <ScrollView contentContainerStyle={{marginTop: 12}}>
                {
                    dummyData.Favorites.map((item, index)=>
                    {
                        return(
                            <FavoriteItemView key={index}>
                                <TouchableWithoutFeedback onPress={()=>{
                                    navigation.navigate('Player', {selectedMusic: item})

                                }}>
                                <View style={{flexDirection: 'row'}}>
                                    <MusicCircle>
                                        {/*  */}
                                        <McImage source={Images.music_icon}/>
                                    </MusicCircle>
                                    <View style={{marginLeft: 12, marginTop: 4}}>
                                        <McText semi size={14} color={Colors.primary}>{item.title}</McText>
                                        <McText medium size={12} color={Colors.grey0}>{item.artist}</McText>
                                    </View>
                                </View>
                                {/*  */}
                                </TouchableWithoutFeedback>
                                <McImage source={Images.favorite}/> 
                            </FavoriteItemView>
                        )
                    }
                    ) 
                }
            </ScrollView>
        </View>
        
    </Container>
);}

const Container = styled.SafeAreaView`
    flex:1;
    background-color: ${Colors.background};
`;

const SearchSection = styled.View`
        width: 356px;
        height: 52px;
        border-radius: 5px;
        background-color: ${Colors.secondary}
        margin: 15px 20px 10px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
`;

const TitleSecsion = styled.View`
        margin: 10px 20px 0px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
`;

const FavoriteItemView = styled.View`
        margin: 10px 24px;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
`;

const MusicCircle = styled.View`
    width: 42px;
    height: 42px;
    border-radius: 42px;
    background-color: ${Colors.background}
    align-items: center;
    justify-content: center;

`;

// const BottomSection = styled.View`
//     margin: 0px 24px;
//     flex-direction: row;
//     align-items: flex-start;
//     position: absolute;
//     bottom: 50px;
//     left: 0px;
//     z-index: 1;
// `;

export default Library;
