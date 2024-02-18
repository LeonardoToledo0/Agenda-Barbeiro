import { FlatList, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";


export const Container = styled(View)`
flex: 1;
`
export const ListaAviso = styled(Text)`
text-align: center;
padding: 12px;
font-size: 20px;
color: red;
font-weight: 700;
`
export const ListaText = styled(Text)`
text-align: center;
padding: 12px;
font-size: 20px;
color: white;
font-weight: 700;
`
export const ListaBotao = styled(TouchableOpacity)`
width: 330px;
height: 50px;
margin: 50px auto;
border-radius: 10px;
background-color: #3D5CFF;
`
