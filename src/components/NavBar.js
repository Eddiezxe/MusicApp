import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Login() {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}
function Search() {
    return (
      <View>
        <Text>Search</Text>
      </View>
    )
  }


const Stack = createNativeStackNavigator();
function NavBar() {
    return (
        <NavigationContainer>
            <Stack.Navigator style={[styles.navBar]} initialRouteName="Login">
                <Stack.Screen style={styles.navBar__button} name="Login" component={Login} />
                <Stack.Screen style={styles.navBar__button} name="Search" component={Search} />
            </Stack.Navigator>
    </NavigationContainer>
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