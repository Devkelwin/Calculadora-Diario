import { Box, Center, Button as NativeBaseButton, Text } from "native-base";

export function ButtonReceita(){
    return(
        
      <Box alignItems={'flex-end'} marginX={3} marginY={3} justifyContent={'flex-end'}>
        <NativeBaseButton bg={'blue.normal'} h={46}w={170}> 
            <Text fontFamily={'Genera'} color={'white'}>Ver Receitas</Text>
        </NativeBaseButton>
      </Box>
      
    )
}