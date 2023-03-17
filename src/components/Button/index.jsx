import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from './styles'

export default function Button({name}){
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}