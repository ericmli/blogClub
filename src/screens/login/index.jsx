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
import api from "../../service";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertEmail, setAlertEmail] = useState('')
    const [alertPassword, setAlertPassword] = useState('')

    // AsyncStorage.removeItem('token');
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
            email: Yup.string().email(setAlertEmail("E-mail invalid")).required(),
            password: Yup.string().required(setAlertPassword("Password is required")),
        })

        try {
            await schema.validate({ email, password }, { abortEarly: false })
            const response = await api.get(`/login?email=${email}&password=${password}`)

            const token = response.data[0].id;
            const tokenString = JSON.stringify(token)
            await AsyncStorage.setItem('token', tokenString)

            const nameToken = response.data[0].name;
            const nameTokenString = JSON.stringify(nameToken)
            await AsyncStorage.setItem('name', nameTokenString)

            const emailToken = response.data[0].email;
            const emailTokenString = JSON.stringify(emailToken)
            await AsyncStorage.setItem('email', emailTokenString)
            
            if (token != false) {
                navigation.navigate('sendHome')
            } else {
                token = null
            }
            return
        } catch (error) {
            console.log('Caiu no erro de validação')
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