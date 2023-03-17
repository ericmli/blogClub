import React, { useEffect } from "react";
import SplashScreen from 'react-native-splash-screen'
import { View } from "react-native";
import IncludeAll from "./screens/includeLoginRegister";


export default function App(){
    useEffect(() => {
        SplashScreen.hide()
      }, []);
      
    return(
        <View style={{backgroundColor: '#fff'}}>
            <IncludeAll/>
        </View>
    )

}