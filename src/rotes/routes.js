import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import IncludeAll from '../screens/includeLoginRegister';
import { Onboarding } from '../screens/onboarding';
import { Reset } from '../screens/resetPassword';
import { Theme } from '../theme/Theme';

const {Screen , Navigator} = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: Theme.colors.blue[40],
  },
  headerTintColor: Theme.colors.white[10],
  headerBackTitle: "Back",
};


export function MyStack() {
  return (
    <Navigator
    screenOptions={screenOptionStyle}
    >
      <Screen 
        name='Login'
        component={IncludeAll}
        options={{headerShown: false}}
      />
      
      <Screen 
        name='Onboarding'
        component={Onboarding}
      />
      
      <Screen 
        name='Reset Password'
        component={Reset}
      />

      <Screen 
        name='Home'
        component={Home}
        options={{headerShown: false}}
      />

    </Navigator>
  );
}