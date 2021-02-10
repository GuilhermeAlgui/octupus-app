/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './pages/Landing';
import Pergunta from './pages/Pergunta';
import Resultado from './pages/Resultado';
import Cronometro from './cronometro/cronometro';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Landing" component={Landing} />
        <Screen name="Pergunta" component={Pergunta} />
        <Screen name="Resultado" component={Resultado} />
        <Screen name="Cronometro" component={Cronometro} />
      </Navigator>
    </NavigationContainer>
  );
}
