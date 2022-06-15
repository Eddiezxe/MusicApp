import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function NavBar({ navigation }) {
    return (
        <View style={[styles.navBar]}>
            <TouchableOpacity style={[styles.navBar__button]} onPress={() => navigation.navigate('Home')}>
                <Icon style={styles.icon} name="home-outline" size={22} color="#fff"/>
                <Text style={[styles.navBar__btnText]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.navBar__button]} onPress={() => navigation.navigate('Search')}>
                <Icon style={styles.icon} name="search" size={22} color="#fff"/>
                <Text style={[styles.navBar__btnText]}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.navBar__button]} onPress={() => navigation.navigate('Playlist')}>
                <Icon style={styles.icon} name="ios-albums-outline" size={22} color="#fff"/>
                <Text style={[styles.navBar__btnText]}>Playlist</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    navBar: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        paddingBottom: 20,
        backgroundColor: "#101010",         
    },
    navBar__button: {
        padding: 18,
        backgroundColor: "#101010",     
        display: "flex",
        alignItems: "center", 
    },
    navBar__btnText:{
        color: "#fff",
        fontSize: 16,
    }
})
export default NavBar;