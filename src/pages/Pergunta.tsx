import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { questions } from '../questions/questions';
import Cronometro from '../cronometro/cronometro';
import {
  Body,
  Container,
  PerguntaContainer,
  PerguntaText,
  QuestionImage,
  PerguntaAlternativa,
  OrderContainer,
} from './StyledComponents/perguntas';

// import { Container } from './styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Pergunta() {
  const { navigate } = useNavigation();

  const [perguntas, setPerguntas] = useState([...questions]);
  const [alternativas, setAlternativas] = useState([
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
  ]);
  const [questao, setQuestao] = useState(0);
  //const [teste, setTeste] = useState('');

  useEffect(() => {
    setPerguntas([...questions]);
  }, []);

  function handleResult() {
    let result = 0;
    for (let i = 0; i < perguntas.length; i++) {
      if (perguntas[i].correta === alternativas[i]) result++;
    }

    navigate('Resultado', { result });
  }

  return (
    <Body>
      <Cronometro handleEnd={handleResult} />

      <Container>
        <QuestionImage
          source={{
            uri: perguntas[questao].imagem,
          }}
        />
        <PerguntaText>{perguntas[questao].pergunta}</PerguntaText>
        <PerguntaContainer>
          <TouchableOpacity
            onPress={() => {
              const a = alternativas;
              a[questao] = 'a';
              setAlternativas([...a]);
            }}
            style={
              alternativas[questao] !== 'a'
                ? styles.perguntaButton
                : styles.perguntaButtonRes
            }
          >
            <PerguntaAlternativa>
              {perguntas[questao].questoes[0].texto}
            </PerguntaAlternativa>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const a = alternativas;
              a[questao] = 'b';
              setAlternativas([...a]);
            }}
            style={
              alternativas[questao] !== 'b'
                ? styles.perguntaButton
                : styles.perguntaButtonRes
            }
          >
            <PerguntaAlternativa>
              {perguntas[questao].questoes[1].texto}
            </PerguntaAlternativa>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const a = alternativas;
              a[questao] = 'c';
              setAlternativas([...a]);
            }}
            style={
              alternativas[questao] !== 'c'
                ? styles.perguntaButton
                : styles.perguntaButtonRes
            }
          >
            <PerguntaAlternativa>
              {perguntas[questao].questoes[2].texto}
            </PerguntaAlternativa>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const a = alternativas;
              a[questao] = 'd';
              setAlternativas([...a]);
            }}
            style={
              alternativas[questao] !== 'd'
                ? styles.perguntaButton
                : styles.perguntaButtonRes
            }
          >
            <PerguntaAlternativa>
              {perguntas[questao].questoes[3].texto}
            </PerguntaAlternativa>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const a = alternativas;
              a[questao] = 'e';
              setAlternativas([...a]);
            }}
            style={
              alternativas[questao] !== 'e'
                ? styles.perguntaButton
                : styles.perguntaButtonRes
            }
          >
            <PerguntaAlternativa>
              {perguntas[questao].questoes[4].texto}
            </PerguntaAlternativa>
          </TouchableOpacity>
        </PerguntaContainer>
        <OrderContainer>
          {questao !== 0 ? (
            <TouchableOpacity
              onPress={() => {
                setQuestao(questao - 1);
              }}
              style={styles.orderButton}
            >
              <Text style={styles.orderButtonText}>Anterior</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}

          {questao !== 14 ? (
            <TouchableOpacity
              onPress={() => {
                setQuestao(questao + 1);
              }}
              style={styles.orderButton}
            >
              <Text style={styles.orderButtonText}>Proximo</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleResult} style={styles.orderButton}>
              <Text style={styles.orderButtonText}>Finalizar</Text>
            </TouchableOpacity>
          )}
        </OrderContainer>
      </Container>
    </Body>
  );
}

const styles = StyleSheet.create({
  perguntaButton: {
    backgroundColor: '#3D8EB9',
    paddingVertical: 8,
    borderRadius: 30,
    paddingHorizontal: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
  perguntaButtonRes: {
    backgroundColor: '#90EE90',
    paddingVertical: 8,
    borderRadius: 30,
    paddingHorizontal: 5,
    borderWidth: 1,
    marginBottom: 10,
  },

  orderButton: {
    backgroundColor: '#F00',
    paddingVertical: 12,
    borderRadius: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginBottom: 10,
  },
  orderButtonText: {
    color: '#fff',
  },
});

export default Pergunta;
