import React, { useState, useEffect } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'
import Input from "../../components/input";
import InputPassword from "../../components/inputPassword";
import Button from "../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Yup from "yup";
import { LoginSocial } from "../../components/loginSocial";
import axios from "axios";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertEmail, setAlertEmail] = useState('')
    const [alertPassword, setAlertPassword] = useState('')

    // Verifica o token para fazer o autoLogin
    const autoLogin = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token != false) {
                await AsyncStorage.setItem('token', token);
                navigation.replace('sendHome')
            } else {
                // Se o token estiver errado, faz com que o usuário realize o login novamente
                token = null;
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Verificar se o token está presente ao iniciar o aplicativo
    useEffect(() => {
        autoLogin();
    }, []);

    // Funções para retornar os textos do input do filho pro pai
    function componentEmail(text) {
        setEmail(text);

    }
    function componentPassword(text) {
        setPassword(text);
    }

    const handleLogin = async () => {
        const schema = Yup.object().shape({
            email: Yup.string().email(setAlertEmail('E-mail invalid')),
            password: Yup.string(setAlertPassword('Password invalid')).nullable(false)
        })

        await schema.validate()
        try {
            const response = await axios.get(`http://192.168.15.182:3000/login?email=${email}&password=${password}`)
            const token = response.data;
            const tokenString = JSON.stringify(token)
            await AsyncStorage.setItem('token', tokenString)

            if (token != false) {
                navigation.navigate('Home')
                console.log(token)
            } else {
                token = null
            }

        } catch (error) {
            console.log(error)
            setAlertPassword('E-mail or senha invalid')
        }
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.title}>Welcome back</Text>
                    <Text>Sign in with your account</Text>

                    <Input
                        nameInput={'Username'}
                        onChange={componentEmail}
                        alert={alertEmail}
                    />

                    <InputPassword
                        nameInput={'Password'}
                        onChange={componentPassword}
                        alert={alertPassword}
                    />

                    <Button
                        nameInput={'LOGIN'}
                        onPress={handleLogin}
                    />

                    <View style={styles.containerReset}>
                        <Text style={{ color: '#252525' }}>Forget your password?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Reset Password')
                            }}
                        >
                            <Text style={styles.textReset}>Reset Here</Text>
                        </TouchableOpacity>
                    </View>
                    <LoginSocial />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}