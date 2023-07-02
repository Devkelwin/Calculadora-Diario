import { Box, Text } from "native-base";
import { View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export function ProgressBar(){
    return(
        <Box alignItems={'center'}>
          <View style={{top:120}}>
                   <Text fontSize={19}  textAlign={'center'}  fontFamily={'Genera'} color={'white'}>Calorias</Text>
            <Text textAlign={'center'} fontSize={14} fontFamily={'Marlin'} color={'white'}>0/1200 kcal</Text>
            </View>
          
                <AnimatedCircularProgress
  size={195}
  width={12}
  
  fill={70}
  tintColor="#457AFA"
  
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#253358" />
        </Box>
    )
}