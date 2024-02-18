import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import * as S from './CardsGaleriaStyles';

export const Card = ({ titulo, descricao, valor, imagem1, imagem2, imagem3 }) => {
    const [images, setImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                console.log("Fetching images for:", titulo);
                const responses = await Promise.all([fetch(imagem1), fetch(imagem2), fetch(imagem3)]);
                console.log("Image responses:", responses);

                const blobs = await Promise.all(responses.map(response => response.blob()));
                const imageUrls = blobs.map(blob => URL.createObjectURL(blob));
                setImages(imageUrls);
            } catch (error) {
                console.error("Erro ao buscar imagens:", error);
            }
        };

        fetchImages();
    }, [imagem1, imagem2, imagem3, titulo]);
    const handleImagePress = () => {
        // Trocar para a próxima imagem quando a imagem atual é pressionada
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <S.CardContainer>
            <S.ImagesContainer>
                <TouchableOpacity onPress={handleImagePress}>
                    <S.CardImage source={{ uri: images[selectedImageIndex] }} />
                </TouchableOpacity>
            </S.ImagesContainer>
            <S.Title>{titulo}</S.Title>
            <S.Description>{descricao}</S.Description>
            <S.Value>{valor}</S.Value>
        </S.CardContainer>
    );
};