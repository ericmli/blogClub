import React , { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

export default function InputPassword(props){
    const [text, setText] = useState('');
    const [hidePass, setHidePass] = useState(true)

    function component(text) {
        setText(text);
        props.onChange(text);
      }

    return(
        <View style={{marginTop: 20}}>

            <Text style={styles.text}>{props.nameInput}</Text>

            <View style={styles.containerPassword}>
                <TextInput
                    style={styles.input}
                    secureTextEntry={hidePass}
                    onChangeText={component}
                />
                <Text style={styles.password} onPress={() => 
                setHidePass(!hidePass)}>{
                    hidePass ? 'Show' :  'Hide'
                }</Text>
            </View>
            <Text style={styles.error}>{props.alert}</Text>
        </View>
            
    )
}