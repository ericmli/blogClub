import React from "react";
import { Text, View } from "react-native";
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import Input from "../../components/input";


export default function Login (){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>Welcome back</Text>
                <Text>Sign in with your account</Text>

                <Input
                nameInput={'Username'}
                />

                <Input
                nameInput={'Password'}
                secure = {false}
                />
            </View>
        </View>
    )
}
