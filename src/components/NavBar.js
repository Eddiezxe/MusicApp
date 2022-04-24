import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
export default function NavBar() {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity style={[styles.navBar__button]}>
                <Icon name="home" size={30} color="#fff" />
                <Text style={styles.navBar__btnText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.navBar__button]}>
                <Icon name="search" size={30} color="#fff" />
                <Text style={styles.navBar__btnText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.navBar__button]}>
                <Icon name="library" size={30} color="#fff" />
                <Text style={styles.navBar__btnText}>Library</Text>
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