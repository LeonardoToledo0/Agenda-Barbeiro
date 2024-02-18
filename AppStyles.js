import styled from "styled-components";
import { View, Image, Text } from "react-native";


export const ProfileContainer = styled(View)`
padding: 16px;
border-bottom-width:1 ;
border-bottom-color: #ccc;
align-items: center;
`

export const ProfileImage = styled(Image)`
width: 80px;
height :80px;
border-radius: 40%;
`


export const ProfileName = styled(Text)`
margin-top: 8px;
font-size: 16px;
font-weight: bold;


`