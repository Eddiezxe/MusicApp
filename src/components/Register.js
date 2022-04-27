import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
export default function NavBar() {
    return (
        <View style={styles.register}>
            <TextInput style={[styles.register__input, styles.mt10]} placeholderTextColor={'#555'}  placeholder="Username"/>
            <TextInput style={[styles.register__input, styles.mt10]} placeholderTextColor={'#555'}  placeholder="Password" secureTextEntry/>
            <TextInput style={[styles.register__input, styles.mt10]} placeholderTextColor={'#555'}  placeholder="Verify your password" secureTextEntry/>
            <TouchableOpacity style={[styles.register__btnRegister ,styles.mt10]}>
                <Text style={styles.register__btnRegisterText}>Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    register:{
        height: "100%",
        backgroundColor: "#101010",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    register__input: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#fff",
        padding: 12,
        marginVertical: 4,
        borderRadius: 24,
        color: "#fff",
    },
    register__btnRegister: {
        marginVertical: 12,
        backgroundColor: "#1ED760",
        paddingVertical: 12,
        paddingHorizontal: 64,
        borderRadius: 24,
    },
    register__btnRegisterText: {
        color: "#fff",
    }
})