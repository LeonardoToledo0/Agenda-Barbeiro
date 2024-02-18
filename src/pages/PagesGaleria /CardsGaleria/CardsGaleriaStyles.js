import styled from "styled-components";
import { View, Text, Image } from 'react-native'


export const CardContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
`;

export const ImagesContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CardImage = styled(Image)`
  width: 300px;
  height: 300px;
  border-radius: 8px;
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Description = styled(Text)`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Value = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;