import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NativeBaseProvider} from 'native-base'
import { Home } from './src/screens/Home';
import {useFonts} from 'expo-font'
import { THEME } from './src/theme';
import { ActivityIndicator } from 'react-native';

import { Routes } from './src/routes';
import { DataImcProvider } from './src/context/DataImcContext';
import { Loading } from './src/components/Loading';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Genera': require('./src/fonts/Genera-SemiBold.ttf'),
    'Marlin': require('./src/fonts/MarlinBasic-Regular.ttf'),
  });
  return (
    <NativeBaseProvider theme={THEME}>
         <DataImcProvider >
        {fontsLoaded ? <Routes/> : <Loading/>}
      </DataImcProvider>
    </NativeBaseProvider>
  );
}

