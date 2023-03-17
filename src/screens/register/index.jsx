import React from "react";
import {  Text, View } from "react-native";
import SvgComponent from "../../imgs/svg/logo";
import styles from './styles'
import { createSwitchNavigator } from 'react-navigation';

export default function Register (){
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <Text>Tela2</Text>
            </View>
        </View>
    )
}
