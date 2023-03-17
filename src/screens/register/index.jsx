import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import Input from "../../components/input";
import InputPassword from "../../components/inputPassword";
import Button from "../../components/Button";



export default function Register (){
    const navigation = useNavigation()
    return(
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>Register</Text>

                <Input
                nameInput={'Username'}
                />

                <Input
                nameInput={'E-mail'}
                />

                <InputPassword
                nameInput={'Password'}
                />

                <InputPassword
                nameInput={'Confirm Password'}
                />

                <Button
                name={'REGISTER'}
                />

            </View>
        </ScrollView>
    )
}
