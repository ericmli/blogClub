import React, {useEffect, useState} from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from './styles'
import Input from "../../components/input";
import InputPassword from "../../components/inputPassword";
import Button from "../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../service";
import { LoginSocial } from "../../components/loginSocial";

export default function Login ({navigation}){
    
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    function componentEmail(text) {
        // Função para retornar os textos do input do filho pro pai
        setInputEmail(text);

    }
    function componentPassword(text) {
        // Função para retornar os textos do input do filho pro pai
        setInputPassword(text);
    }
    


    const register = {
        name: inputEmail ,
        email: inputEmail ,
        password: inputPassword
    }

    async function postLogin(){
        api.post('/login', register)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }

    

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>Welcome back</Text>
                <Text>Sign in with your account</Text>

                <Input
                nameInput={'Username'}
                onChange={componentEmail}
                />

                <InputPassword
                nameInput={'Password'}
                onChange={componentPassword}
                />

                <Button 
                nameInput={'LOGIN'}
                
                />
                
                <View style={styles.containerReset}>
                    <Text style={{color: '#252525'}}>Forget your password?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Reset Password')
                        }}
                    >
                        <Text style={styles.textReset}>Reset Here</Text>
                    </TouchableOpacity>
                </View>
                    <LoginSocial/>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}