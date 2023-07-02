import { LinearGradient } from 'expo-linear-gradient'
import { Box, Center, HStack, Image, ScrollView, Text, VStack } from 'native-base'
import { ReceitaArea } from '../components/ReceitaCard'
import { ButtonReceita } from '../components/ButtonReceita'


export function Receitas() {
  return (
    <LinearGradient
      colors={['#1A2032', 'black']}
      style={{ height: '100%' }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <ScrollView mb={5}>
      <Box mt={10} bg={'white'} h={270} w={'full'} position="relative" >
        <Image source={require('../Images/Cafe.jpg')} h={200} w={'full'} alt='Imagem'/>
       <HStack>
            <Text fontSize={25} marginX={3} marginY={4} fontFamily={'Genera'} color={'blue.normal'}>Café da Manhã</Text>
            <ButtonReceita />
       </HStack>
      </Box>


      <Box mt={10} bg={'white'} h={270} w={'full'} position="relative" >
        <Image source={require('../Images/Almoco.jpg')} h={200} w={'full'} alt='Imagem'/>
       <HStack >
            
            <Text fontSize={27} marginX={3} marginY={4} fontFamily={'Genera'} color={'blue.normal'} ml={10}>Almoço</Text>
          <Box ml={62}>
                <ButtonReceita />
          </Box>
        
         
       </HStack>
      </Box>


      <Box mt={10} bg={'white'} h={270} w={'full'} position="relative" >
        <Image source={require('../Images/Cafetarde.jpg')} h={200} w={'full'} alt='Imagem'/>
       <HStack>
            
            <Text fontSize={25} marginX={3} marginY={4} fontFamily={'Genera'} color={'blue.normal'}>Café da Tarde</Text>
            <Box ml={5}>
               <ButtonReceita />
            </Box>
            <ButtonReceita />
       </HStack>
      </Box>
      

      <Box mt={10} bg={'white'} h={270} w={'full'} position="relative" >
        <Image source={require('../Images/Jantar.jpg')} h={200} w={'full'} alt='Imagem'/>
       <HStack>
            <Text fontSize={25} marginX={3} marginY={4} fontFamily={'Genera'} color={'blue.normal'} ml={10}>Jantar</Text>
            <Box ml={88}>
                <ButtonReceita />
            </Box>
          
       </HStack>
      </Box>

</ScrollView>
    </LinearGradient>
  )
}
