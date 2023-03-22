import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./style";

export default function Input(props){

    const [text, setText] = useState('');

    // Para mandar para o componente pai as informações escritas.
    function component(text) {
        setText(text);
        props.onChange(text);
      }

    return(
        <View>
            <Text style={styles.text}>{props.nameInput}</Text>

            <TextInput
                style={styles.input}
                value={text}
                onChangeText={component}
                
            />
            <Text style={styles.error}>{props.alert}</Text>
        </View>
    )
}