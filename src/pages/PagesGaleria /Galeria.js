import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, ScrollView } from "react-native";
import { Card } from "./CardsGaleria/CardsGaleria";

export const Galeria = () => {
    const [galeriaData, setGaleriaData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGaleriaData = async () => {
            try {
                const response = await fetch("http://192.168.1.108:8000/api/galerias/");
                const data = await response.json();
                setGaleriaData(data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados da galeria:", error);
                setLoading(false);
            }
        };

        fetchGaleriaData();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (<ScrollView>

        <View>
            {galeriaData.map((item, index) => (
                <Card
                    key={index}
                    titulo={item.titulo}
                    descricao={item.descricao}
                    valor={item.valor}
                    imagem1={item.imagem1}
                    imagem2={item.imagem2}
                    imagem3={item.imagem3}
                />
            ))}
        </View>
    </ScrollView>
    );
};
