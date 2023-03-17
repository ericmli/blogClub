import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Login from '../screens/login';
import Register from '../screens/register';

export default function Tabs() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator 
       screenOptions={{
        tabBarLabelStyle: { fontSize: 18 , color: '#FFF', padding: 10, fontWeight: 500},
        tabBarItemStyle: { shadowColor:'none'},
        tabBarStyle: { backgroundColor: 'transparent' },
      }}
      >
        <Tab.Screen name="LOGIN" component={Login} />
        <Tab.Screen name="SIGN UP" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}