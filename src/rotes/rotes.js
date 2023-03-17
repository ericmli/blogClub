
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IncludeAll from '../screens/includeLoginRegister';


const Stack = createNativeStackNavigator

export default function Routes() {
    return (

        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={IncludeAll}
          />
        </Stack.Navigator>


    )
  }
  