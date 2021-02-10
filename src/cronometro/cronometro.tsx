import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

interface cronometroProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleEnd: any;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Cronomometro({ handleEnd }: cronometroProps) {
  const [segundosRemanescentes, setSegundosRemanescentes] = useState(0);
  const [minutosRemanescentes, setMinutosRemanescentes] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (segundosRemanescentes == 0) {
        if (minutosRemanescentes === 0) {
          // navigation.navigate('Resultado')
          handleEnd();
          return () => clearTimeout(timer);
        }
        setSegundosRemanescentes(59);
        setMinutosRemanescentes(minutosRemanescentes - 1);
      }
      if (segundosRemanescentes > 0)
        setSegundosRemanescentes(segundosRemanescentes - 1);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <Text>Tempo remanescente: </Text>
      <Text style={{ fontSize: 40 }}>
        {minutosRemanescentes}:
        {segundosRemanescentes < 10
          ? `0${segundosRemanescentes}`
          : segundosRemanescentes}
        s
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    paddingTop: 15,
  },
});

export default Cronomometro;
