import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./style";

export default function Input({nameInput, secure}){

    return(
        <View style={{marginTop: 20}}>
            <Text style={styles.text}>{nameInput}</Text>

            <TextInput
                style={styles.input}
                secureTextEntry
            />
        </View>
    )
}