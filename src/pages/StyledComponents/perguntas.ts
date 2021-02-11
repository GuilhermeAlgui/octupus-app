import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Body = styled.View`
  display: flex;
  flex: 1;
`;

export const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  background-color: #ffffff;
`;
export const QuestionImage = styled.Image`
  width: ${Dimensions.get('window').width * 0.8}px;
  height: ${Dimensions.get('window').width * 0.6}px;
  margin: 0px ${Dimensions.get('window').width * 0.1}px 0px
    ${Dimensions.get('window').width * 0.1}px;
`;

export const PerguntaText = styled.Text`
    
text-align: justify;
font-size: 16px;
line-height:18px;
color: #000000;
font-family: Roboto
margin: 0px ${Dimensions.get('window').width * 0.1}px 0px
${Dimensions.get('window').width * 0.1}px;
`;

export const PerguntaContainer = styled.ScrollView`
  margin-top: 10px;
  flex: 1;
  padding: 0px ${Dimensions.get('window').width * 0.1}px 0px
    ${Dimensions.get('window').width * 0.1}px;
`;

export const PerguntaAlternativa = styled.Text`
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  font-family: Roboto;
`;

export const OrderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px ${Dimensions.get('window').width * 0.1}px 0px
    ${Dimensions.get('window').width * 0.1}px;
`;
