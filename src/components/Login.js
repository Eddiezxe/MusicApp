import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
function Login() {
    return (
        <View style={styles.login}>
            <TextInput style={[styles.login__input, styles.mt10]} placeholderTextColor={'#555'}  placeholder="username"/>
            <TextInput style={[styles.login__input , styles.mt10]} placeholderTextColor={'#555'}   placeholder="password"/>
            <TouchableOpacity style={[styles.login__signIn ,styles.mt10]}>
                <Text style={styles.login__btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.login__register]}>
                <Text style={styles.login__btnText}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mt10: {
        marginTop: 10,
    },
    login: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "black"
    },
    login__input: {
        width: "90%",
        paddingVertical: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 12,
        borderRadius: 15,
        color: "white"
    },
    login__signIn: {
        backgroundColor: '#1ED760',
        borderWidth: 1,
        paddingHorizontal: 12,
        borderRadius: 15,
        width: "90%",
        display: "flex",
        alignItems: "center",
        paddingVertical: 8
    },
    login__btnText: {
        color: '#fff',
    },
    login__register: {
        marginTop: 10,
        marginBottom: 0,
    }
})
export default Login