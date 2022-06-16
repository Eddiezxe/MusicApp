import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import {useEffect, useState, useContext} from 'react';
import {UserInfoContext} from '../reducer/UserInfoProvider'
import axios from 'axios';
import {useGlobalState} from '../reducer/UserInfoProvider.js'


function Login( props) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        error: '',
    })
    const [{token}, dispatch] = useGlobalState();
    // console.log(credentials);
    async function handleLogin(){
        if(credentials.email && credentials.password)
        {
            var data = JSON.stringify({
                query: `mutation dangNhapTaiKhoan ($email: String! $password: String!){
                signIn (input: {
                    email: $email,
                    password: $password})
                {
                    token,
                    user{
                        id
                        name
                        email
                        avatar
                    }
                }
                }`,
                    variables: {"email": credentials.email, "password": credentials.password}
                });
                
            var config = {
                method: 'post',
                url: 'https://apollo-api-for-musicapp.herokuapp.com/',
                headers: { 
                'Content-Type': 'application/json'
                },
                data : data
            };
                
            const response = await axios(config)

            console.log(response);
            //if there is no error
            if(!response.data.errors)
            {
                dispatch({
                    type: 'SET_TOKEN',
                    token: response.data.data.signIn.token,
                })
                // sendToken(response.data.data.signIn.token)
            }
            else
                setCredentials({...credentials, error: response.data.errors[0].message})
        }    
        else
        {
            setCredentials({...credentials, error: 'All the field must be provided'})
        }
        
    }
    return (
        <View style={styles.login}>
            <Text style={[styles.login__text]}>Login with your account</Text>
            <TextInput style={[styles.login__input, styles.mt10]} placeholderTextColor={'#555'}  placeholder="Email" onChangeText={newText => setCredentials({...credentials ,email: newText})} value={credentials.email} />
            <TextInput style={[styles.login__input , styles.mt10]} placeholderTextColor={'#555'}   placeholder="Password" onChangeText={newText => setCredentials({...credentials, password: newText})} value={credentials.password} />
            <Text style={{color: '#fff'}}>{credentials.error}</Text>
            <TouchableOpacity style={[styles.login__btn ,styles.login__signIn, styles.mt10]} onPress={handleLogin}>
                <Text style={styles.login__text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.login__btn, styles.login__register]} onPress={() => props.navigation.navigate('Register')}>
                <Text style={[styles.login__text, styles.underline]}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mt10: {
        marginTop: 10,
    },
    underline: {
        textDecorationLine: 'underline',
    },
    login: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#101010"
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
    login__btn: {
        paddingHorizontal: 12,
        borderRadius: 15,
        width: "90%",
        display: "flex",
        alignItems: "center",
        paddingVertical: 12
    },
    login__signIn: {
        backgroundColor: '#1ED760',      
    },
    login__text: {
        color: '#fff',       
    },
    login__register: {        
            
    }
})
export default Login