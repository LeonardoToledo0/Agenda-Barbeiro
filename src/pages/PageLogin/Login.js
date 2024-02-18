import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Text, TouchableOpacity } from "react-native";


export const Login = () => {
    const navigation = useNavigation();
    const vaParaPerfil = () => {
        navigation.navigate('Perfil')
    }
    return (
        <View>

            <TouchableOpacity onPress={vaParaPerfil}>
                <Text>Ir para Perfil</Text>
            </TouchableOpacity>
        </View>
    );
};