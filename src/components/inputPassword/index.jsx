import React , { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

export default function InputPassword({nameInput}){
    const [hidePass, setHidePass] = useState(true)
    return(
        <View style={{marginTop: 20}}>

            <Text style={styles.text}>{nameInput}</Text>

            <View style={styles.containerPassword}>
                <TextInput
                    style={styles.input}
                    secureTextEntry={hidePass}
                />
                <Text style={styles.password} onPress={() => setHidePass(!hidePass)}>{
                    hidePass ? 'Show' :  'Hide'
                }</Text>
            </View>
        </View>
            
    )
}