import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Button,
  ButtonText,
  Container,
  Instructions,
  Title,
} from './StyledComponents/landing';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Landing() {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Quiz de História Enem</Title>
      <Instructions>
        Será feito um Quiz de 15 questões do ENEM sobre história com maior foco
        na história do Brasil.
        {'\n'}Deverá ser feito em 10 minutos, será exibido seu número de acertos
        ao termino.
        {'\n'}Utilize os botões disponibilizados para prosseguir ou voltar em
        uma questão.
        {'\n'}Cada questão possui 5 alternativas.
      </Instructions>

      <Button
        onPress={() => {
          navigation.navigate('Pergunta');
        }}
      >
        <ButtonText>Iniciar</ButtonText>
      </Button>
    </Container>
  );
}

export default Landing;
