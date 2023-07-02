import { Box, Text } from "native-base";

type TextProps = {
    TextTitle: string
}
export function TitleArea({TextTitle}: TextProps){
    return(
        <Box bg={'blue.dark'}
       h={70}
       w={'full'}
        mt={2}
        justifyContent={'center'}
        >
<Text color={'white'}
marginX={8}
fontFamily={'Genera'}
fontSize={21}
>{TextTitle}</Text>
        </Box>
    )
}