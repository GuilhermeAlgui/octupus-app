import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Container,
  ResultadoContainer,
  ResultadoText,
  ResultadoTitle,
  ReturnButton,
  ReturnText,
} from './StyledComponents/resultado';

// import { Container } from './styles';

interface resultadoParams {
  result: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Resultado() {
  const route = useRoute();
  const params = route.params as resultadoParams;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      const type = e.data.action.type;
      if (type === 'GO_BACK') e.preventDefault();
    });
  }, []);

  return (
    <Container>
      <ResultadoContainer>
        <ResultadoText>Você Acertou</ResultadoText>
        <ResultadoTitle>{params.result}</ResultadoTitle>
        <ResultadoText>Questões</ResultadoText>
      </ResultadoContainer>
      <ReturnButton
        onPress={() => {
          navigation.navigate('Landing');
        }}
      >
        <ReturnText>Voltar ao Inicio</ReturnText>
      </ReturnButton>
    </Container>
  );
}

export default Resultado;
