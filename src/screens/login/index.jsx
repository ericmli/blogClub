import React from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from './styles'
import Input from "../../components/input";
import InputPassword from "../../components/inputPassword";
import Button from "../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import Google from "../../imgs/svg/google";
import FacebookSvg from "../../imgs/svg/facebook";
import TwitterSvg from "../../imgs/svg/twitter";


export default function Login (){
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>Welcome back</Text>
                <Text>Sign in with your account</Text>

                <Input
                nameInput={'Username'}
                />

                <InputPassword
                nameInput={'Password'}
                />

                <Button 
                name={'LOGIN'}
                />

                <View style={styles.containerReset}>
                    <Text style={{color: '#252525'}}>Forget your password?</Text>
                    <TouchableOpacity
                        // onPress={}
                    >
                        <Text style={styles.textReset}>Reset Here</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerLogin}>
                    <Text>OR SIGN IN WITH</Text>
                    <View style={styles.loginSocial}>
                        <Google/>
                        <FacebookSvg/>
                        <TwitterSvg/>
                    </View>
                </View>

            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}