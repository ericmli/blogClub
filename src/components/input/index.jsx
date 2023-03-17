import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./style";

export default function Input({nameInput}){

    const [text, setText] = useState('');

    return(
        <View>
            <Text style={styles.text}>{nameInput}</Text>

            <TextInput
                style={styles.input}
                onChangeText={text => setText(text)}
            />
        </View>
    )
}