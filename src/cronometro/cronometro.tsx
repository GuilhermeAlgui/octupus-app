import React, { useEffect, useState } from 'react';
import { Container, TempoRestante, TempoText } from './cronometroStyled';

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
      if (segundosRemanescentes > 0)
        setSegundosRemanescentes(segundosRemanescentes - 1);
      if (segundosRemanescentes === 0) {
        if (minutosRemanescentes === 0) {
          handleEnd();
          return () => clearTimeout(timer);
        }
        setSegundosRemanescentes(59);
        setMinutosRemanescentes(minutosRemanescentes - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Container>
      <TempoText>Tempo remanescente: </TempoText>
      <TempoRestante>
        {minutosRemanescentes}:
        {segundosRemanescentes < 10
          ? `0${segundosRemanescentes}`
          : segundosRemanescentes}
        s
      </TempoRestante>
    </Container>
  );
}

export default Cronomometro;
