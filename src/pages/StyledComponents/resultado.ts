import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
`;
export const ResultadoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ResultadoText = styled.Text`
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  font-family: Roboto;
`;

export const ResultadoTitle = styled.Text`
  font-size: 96px;
  line-height: 112px;
  color: rgba(113, 186, 81, 1);
  font-family: Roboto;
`;

export const ReturnButton = styled.TouchableOpacity`
  background-color: #3d8eb9;
  padding: 8px 5px 8px 5px;
  border-radius: 30px;
  border-width: 1px;
  margin-bottom: 10px;
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReturnText = styled.Text`
  font-size: 26px;
  line-height: 28px;
  color: #fff;
  font-family: Roboto;
`;
