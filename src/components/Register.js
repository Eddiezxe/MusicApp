import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Alert  } from 'react-native';
import axios from 'axios';





export default function Register({navigation}) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        name: '',
        verifyPassword: '',
        error: ''
    })

    function handleSignUp(){
        if(credentials.email && credentials.password && credentials.name && credentials.verifyPassword){// check if any field empty
                if(credentials.password !== credentials.verifyPassword) // check if password and verify are the same
                {
                    setCredentials({...credentials, error: 'Password and verify password are not the same'})
                }
                else{ // if not then request to api to register
                    var data = JSON.stringify({
                        query: `mutation dangKyTaiKhoanMusicApp($email: String! $name: String! $password: String!){
                        signUp(input: {
                            email: $email
                            name: $name
                            password: $password
                            }){
                            token
                            user {
                                id
                                name
                            }
                            }
                        }`,
                            variables: {"email":credentials.email,"name":credentials.name,"password": credentials.password}
                        });
                        
                        var config = {
                            method: 'post',
                            url: 'https://apollo-api-for-musicapp.herokuapp.com/',
                            headers: { 
                            'Content-Type': 'application/json'
                            },
                            data : data
                        };
                        axios(config)
                            .then(function (response) {
                                // console.log(response);
                                if(!response.data.errors)
                                    console.log(response.data);
                                else
                                    setCredentials({...credentials, error: response.data.errors[0].message})
                            })
                }
        }
        else{
            setCredentials({...credentials, error: 'All the field must be provided'})
        }
        
    }
    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.register__container}>
            <View style={styles.register}>
                <Text style={styles.register__title}>Register your account</Text>
                <TextInput 
                    onChangeText={newText => setCredentials({...credentials, email: newText})} 
                    value={credentials.email}
                    style={[styles.register__input]} 
                    placeholderTextColor={'#555'} 
                    placeholder="Your email here"/>
                <TextInput 
                    onChangeText={newText => setCredentials({...credentials, password: newText})} 
                    value={credentials.password}
                    style={[styles.register__input]} 
                    placeholderTextColor={'#555'}
                    placeholder="Password" 
                    />
                <TextInput 
                    onChangeText={ newText => setCredentials({...credentials, verifyPassword: newText})} 
                    style={[styles.register__input]} 
                    placeholderTextColor={'#555'}
                    value={credentials.verifyPassword}
                    placeholder="Verify your password" 
                    />
                <TextInput 
                    onChangeText={newText=> setCredentials({...credentials, name: newText})}
                    style={[styles.register__input]} 
                    placeholderTextColor={'#555'}
                    value={credentials.name}
                    placeholder="Your name here" 
                    />
                <Text style={{color: '#fff'}}>{credentials.error}</Text>
                <TouchableOpacity onPress={handleSignUp} style={[styles.register__btnRegister]}>
                    <Text style={styles.register__btnRegisterText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.register__btnRegisterText, styles.underline]}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
                
        
    )
}

const styles = StyleSheet.create({
    underline: {
        textDecorationLine: 'underline',
    },
    register__container:{
        height: "100%",

    },   
    register:{
        height: "100%",
        backgroundColor: "#101010",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    register__title:{
        color: "#fff",
        fontSize: 28,
        marginBottom: 36,

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