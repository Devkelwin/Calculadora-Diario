import { LinearGradient } from "expo-linear-gradient";
import { Box, Center, HStack, Image, ScrollView, Text, VStack, View } from "native-base";
import React, { useState } from 'react'
import * as Progress from 'react-native-progress';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {SafeAreaView} from 'react-native-safe-area-context'
import {ItemBarR } from "../components/ItemBarR";
import { ItemBarL } from "../components/ItemBarL";
import { ProgressBar } from "../components/ProgressBar";
import { TitleArea } from "../components/TitleArea";
import {AntDesign} from '@expo/vector-icons'
import {Agenda,AgendaList,DateData,Timeline} from 'react-native-calendars';
import {StatusBar} from 'expo-status-bar'


export function Home(){
   

    return(
<LinearGradient colors={['#1A2032', 'black']} style={{height:'100%'}}
start={{x:0,y:1}}
end={{x:1,y:0}}

>
    <StatusBar style="light"/>
        <Box 
         >
            <ScrollView mb={5}>
            <SafeAreaView >
            <Center>
          
          
            <ProgressBar/>
 
<HStack>
<ItemBarL TextG="0/195 g" TextItem="Carboidratos"/>
<ItemBarR TextG="0/45 g"  TextItem="Proteínas"/>
</HStack>

<HStack>
<ItemBarL TextG="0/25 g "  TextItem="Fibras"/>
<ItemBarR  TextG="0/27 g" TextItem="Gorduras"/>

</HStack>

            </Center>
           
         <TitleArea TextTitle="Hidratação"/>

            <HStack mt={2} justifyContent={'center'} alignItems={'center'}>
            
            <Box  alignItems={'center'} justifyContent={'center'} marginX={3} width={20} h={20} rounded={60} bg={'blue.normal'}>
                <AntDesign name="plus" color={'white'} size={40}/>
            </Box>
            <VStack >
                <Text fontSize={21} fontFamily={'Genera'} color={'white'}>Água</Text>
                <Text fontSize={15} color={'white'} fontFamily={'Marlin'}>Faltam 2000 ml de água para serem {'\n'}consumidas</Text>
            </VStack>
         
            </HStack>
            <TitleArea TextTitle="Alimentação"/>

            {/* Café Da manhã */}
            <HStack mt={3} justifyContent={'center'} alignItems={'center'}>
            
            <Box  alignItems={'center'} justifyContent={'center'} marginX={3} width={20} h={20} rounded={60} bg={'blue.normal'}>
                <AntDesign name="plus" color={'white'} size={40}/>
            </Box>
            <VStack >
                <Text fontSize={21} fontFamily={'Genera'} color={'white'}>Café da Manhã</Text>
                <Text fontSize={15} color={'white'} fontFamily={'Marlin'}>Faltam 2000 ml de água para serem {'\n'}consumidas</Text>
            </VStack>
         
            </HStack>

           

            {/* Almoço */}
            <HStack mt={3} justifyContent={'center'} alignItems={'center'}>
            
            <Box  alignItems={'center'} justifyContent={'center'} marginX={3} width={20} h={20} rounded={60} bg={'blue.normal'}>
                <AntDesign name="plus" color={'white'} size={40}/>
            </Box>
            <VStack >
                <Text fontSize={21} fontFamily={'Genera'} color={'white'}>Almoço</Text>
                <Text fontSize={15} color={'white'} fontFamily={'Marlin'}>Faltam 2000 ml de água para serem {'\n'}consumidas</Text>
            </VStack>
         
            </HStack>



                {/* Café da Tarde */}
            <HStack mt={3} justifyContent={'center'} alignItems={'center'}>
            
            <Box  alignItems={'center'} justifyContent={'center'} marginX={3} width={20} h={20} rounded={60} bg={'blue.normal'}>
                <AntDesign name="plus" color={'white'} size={40}/>
            </Box>
            <VStack >
                <Text fontSize={21} fontFamily={'Genera'} color={'white'}>Café da Tarde</Text>
                <Text fontSize={15} color={'white'} fontFamily={'Marlin'}>Faltam 2000 ml de água para serem {'\n'}consumidas</Text>
            </VStack>
         
            </HStack>



            {/* Jantar */}
            <HStack mt={3} justifyContent={'center'} alignItems={'center'}>
            
            <Box  alignItems={'center'} justifyContent={'center'} marginX={3} width={20} h={20} rounded={60} bg={'blue.normal'}>
                <AntDesign name="plus" color={'white'} size={40}/>
            </Box>
            <VStack >
                <Text fontSize={21} fontFamily={'Genera'} color={'white'}>Jantar</Text>
                <Text fontSize={15} color={'white'} fontFamily={'Marlin'}>Faltam 2000 ml de água para serem {'\n'}consumidas</Text>
            </VStack>
         
            </HStack>




            {/* Lanche Pré-Treino */}
            <HStack mt={3} justifyContent={'center'} alignItems={'center'}>
            
            <Box  alignItems={'center'} justifyContent={'center'} marginX={3} width={20} h={20} rounded={60} bg={'blue.normal'}>
                <AntDesign name="plus" color={'white'} size={40}/>
            </Box>
            <VStack >
                <Text fontSize={21} fontFamily={'Genera'} color={'white'}>Lanche Pré-Treino</Text>
                <Text fontSize={15} color={'white'} fontFamily={'Marlin'}>Faltam 2000 ml de água para serem {'\n'}consumidas</Text>
            </VStack>
         
            </HStack>



                {/* Lanche Pós-Treino */}
            <HStack mt={3} justifyContent={'center'} alignItems={'center'}>
            
            <Box  alignItems={'center'} justifyContent={'center'} marginX={3} width={20} h={20} rounded={60} bg={'blue.normal'}>
                <AntDesign name="plus" color={'white'} size={40}/>
            </Box>
            <VStack >
                <Text fontSize={21} fontFamily={'Genera'} color={'white'}>Lanche Pós-Treino</Text>
                <Text fontSize={15} color={'white'} fontFamily={'Marlin'}>Faltam 2000 ml de água para serem {'\n'}consumidas</Text>
            </VStack>
         
            </HStack>


</SafeAreaView>
</ScrollView>
        </Box>
        </LinearGradient>
    )
}
