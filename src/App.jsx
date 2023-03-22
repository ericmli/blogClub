import React, { useEffect } from "react";
import SplashScreen from 'react-native-splash-screen'
import { ThemeProvider } from "@react-navigation/native";
import { theme } from "./theme/Theme";
import { Routes } from "./rotes";

export default function App(){
    useEffect(() => {
        SplashScreen.hide()
      }, []);
      
    return(     
        <ThemeProvider theme={theme}>
            <Routes/>
        </ThemeProvider>
    )

}
