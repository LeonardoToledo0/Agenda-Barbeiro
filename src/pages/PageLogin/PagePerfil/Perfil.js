import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";


export const Perfil = () => {
    const navigation = useNavigation();
    const vaParaHome = () => {
        navigation.navigate('Home')
    }
    const vaParaLogin = () => {
        navigation.navigate('Login');
    };
    return (
        <View>

            <TouchableOpacity onPress={vaParaHome}>
                <Text>Ir para Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={vaParaLogin}>
                <Text>Ir para Login</Text>
            </TouchableOpacity>
        </View>
    );
}