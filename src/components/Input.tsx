import {Input as NativeBaseInput } from 'native-base'
export function Input(){
    return(
        <NativeBaseInput
        bg="white"
    h={54}
    px={4}
  
  alignItems={'center'}
  justifyContent={'space-between'}
    rounded={32}
    borderWidth={0}
    fontSize="md"
    color="black"

    placeholderTextColor="black"
    _focus={{
        bg:"white.normal",
        borderWidth: 1,
        borderColor: "gray.500"
    }}
        >

        </NativeBaseInput>
    )
}