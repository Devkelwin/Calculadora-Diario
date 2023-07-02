import { Box,Text, } from "native-base";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import * as Progress from 'react-native-progress';

type TextProps = {
    TextItem: string
    TextG: string
}
export function ItemBarR({TextItem,TextG}: TextProps){
    return(
        <Box mt={8} style={{marginHorizontal:45}}>
            <Text fontSize={15}  fontFamily={'Genera'} textAlign={'center'} color={'white'}>{TextItem}</Text>
            <Progress.Bar 
  progress={0.3} 
  width={130}
  height={15}
 
  style={{marginTop:15}}
   color="#457AFA"/>

   <Text fontFamily={'Marlin'}
    textAlign={'right'}
     color={'white'}
     fontSize={15}
      mt={3} >
        {TextG}
        </Text>

        </Box>
    )
}