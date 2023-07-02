import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator } from "react-native";

export function Loading(){
    return(
        <LinearGradient colors={['#1A2032', 'black']} style={{height:'100%'}}
        start={{x:0,y:1}}
        end={{x:1,y:0}}
        
        >
<ActivityIndicator/>
        </LinearGradient>
    )
}