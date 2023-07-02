import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Box } from 'native-base'
import { Calculadora } from '../screens/Calculadora'
import {AntDesign,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'
import { Receitas } from '../screens/Receitas'
import { Lembretes } from '../screens/Lembretes'
export function AppRoutes(){
    const {Screen,Navigator} = createBottomTabNavigator()
    return(
        <Box flex={1}>
<Navigator  screenOptions={{headerShown: false,
    tabBarStyle: {backgroundColor:'#0c0c14',borderTopColor: '#0c0c14'
    },tabBarActiveTintColor: '#87aafb',
 
    
   }}>
     <Screen
            name='Home'
            component={Home}
            options={{
                tabBarIcon: () => (
                      <AntDesign name='home' size={20} color={'white'} />
                )
            }}
            />
        
    
    <Screen component={Calculadora} 
    name='Calculadora'
    options={{
        tabBarIcon: () => (
            <Ionicons name='calculator' size={20} color={'white'} />
        )
    }}
    />

<Screen component={Receitas} 
    name='Reiceitas'
    options={{
        tabBarIcon: () => (
              <MaterialCommunityIcons name='chef-hat' size={20} color={'white'} />
        )
    }}
    />

<Screen component={Lembretes} 
    name='Lembretes'
    options={{
        tabBarIcon: () => (
              <Ionicons name='notifications' size={20} color={'white'} />
        )
    }}
    />
</Navigator>
</Box>
    )
}