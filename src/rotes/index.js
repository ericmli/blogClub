import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyStack } from "./routes";
import { Menu } from "../screens/menu";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HomeSvg } from "../imgs/svg/home";
import ArticlesSvg from "../imgs/svg/articles";
import { Theme } from "../theme/Theme";
import { Bottom } from "./Bottom";



export function Routes(){
    return(
        <NavigationContainer>
            <MyStack/>
            
        </NavigationContainer>
    )
}