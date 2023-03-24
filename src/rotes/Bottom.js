import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyStack } from "./routes";
import { Menu } from "../screens/menu";
import { HomeSvg } from "../imgs/svg/home";
import ArticlesSvg from "../imgs/svg/articles";
import { Theme } from "../theme/Theme";
import { Home } from "../screens/home";


const Tab = createBottomTabNavigator();


export function Bottom(){
    return(
            <Tab.Navigator screenOptions={{tabBarActiveTintColor: Theme.colors.blue[40], tabBarLabelStyle: { fontSize: 16 } }}>
                <Tab.Screen name="Home" component={Home} options={{headerShown: false,
                tabBarIcon: () => { return <HomeSvg/>} }}/>
                <Tab.Screen name="Menu" component={Menu} options={{headerShown: false,
                tabBarIcon: () => { return <ArticlesSvg/>} }}/>

            </Tab.Navigator>
    )
}