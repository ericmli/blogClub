import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export default function Button(props) {
    const navigation = useNavigation();

    function renderize(onPress){
        props.onPress
        console.log("teste")
      };

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.nameInput}</Text>
        </TouchableOpacity>
    )
}