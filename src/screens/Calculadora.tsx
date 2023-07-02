import { LinearGradient } from "expo-linear-gradient";
import { Box, Center, ScrollView, Text,Button} from "native-base";
import {SafeAreaView} from 'react-native-safe-area-context'
import { Input } from "../components/Input";
import ResultCard from "../components/ResultCard";
import { useDataImc } from "../context/DataImcContext";
import ControlCard from "../components/ControlCard";
export function Calculadora(){
    const { calculateImc } = useDataImc()
    return(
        <LinearGradient colors={['#1A2032', 'black']} style={{height:'100%'}}
        start={{x:0,y:1}}
        end={{x:1,y:0}}
        
        >
            <ScrollView>
                <SafeAreaView>
                    <Center>
                         
                         
                         <Text mt={10} color={'white'} fontFamily={'Genera'} fontSize={32}>Calculadora IMC</Text>
                         <ResultCard />
                         <ControlCard
          title="Peso (kg)"
          minimumValue={15.0}
          maximumValue={150.0}
          step={0.1}
          name="weight"
          decimalPlaces={1}
        />

        <ControlCard
          title="Altura (m)"
          minimumValue={0.5}
          maximumValue={2.3}
          step={0.01}
          name="height"
          
        />        

        <Button
          onPress={calculateImc}
          size={"lg"}
          w={56}
          backgroundColor={"blue.normal"}
          _text={{
            color: 'white',
            fontFamily: 'Genera',
            fontSize: 16
          }}
        >
          CALCULAR
        </Button>

                         
                    </Center>


                </SafeAreaView>
            </ScrollView>
            
         
        </LinearGradient>
    )
}