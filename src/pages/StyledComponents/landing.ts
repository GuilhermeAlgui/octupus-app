//import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 30px 0px 30px;
`;

export const Title = styled.Text`
  font-size: 48px;
  text-align: center;
`;

export const Instructions = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
`;
export const Button = styled.TouchableOpacity`
  display: flex;
  background-color: #3d8eb9;
  height: 48px;
  width: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  line-height: 20px;
`;
