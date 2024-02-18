import React, { useEffect, useState } from "react";
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { Calendar } from 'react-native-calendars';
import * as S from './AgendaStyled';

export const Agenda = () => {
    const [reservas, setReservas] = useState([]);
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [markedDates, setMarkedDates] = useState({});
    const [buttonColor, setButtonColor] = useState('#3D5CFF');
    const [reservationMessage, setReservationMessage] = useState('');
    const [horariosDisponiveis, setHorariosDisponiveis] = useState([
        "10:00", "10:30", "11:00",
        "11:30", "13:00", "13:30",
        "14:00", "14:30", "15:00",
        "15:30", "16:00", "16:30",
        "17:00", "17:30", "18:00",
        "18:30", "19:00", "19:30",
    ]);

    const fetchReservas = async (day) => {
        try {
            const url = `http://192.168.1.108:8000/api/reservas/?dia=${day}`;
            console.log('Fetching from:', url);
            const response = await axios.get(url);
            console.log('Response:', response.data);
            setMarkedDates({ [day]: { selected: true } });
            setReservas(response.data);
            setReservationMessage('');
        } catch (error) {
            console.error('Erro ao obter reservas:', error);
        }
    };

    const reservarHorario = async () => {
        if (selectedDay && selectedTime) {
            try {
                console.log(`Horário ${selectedTime} reservado para o dia ${selectedDay}`);
                setButtonColor('#00FF00');
                setReservationMessage('Reserva escolhida com sucesso.');
                // Atualizar os horários disponíveis removendo apenas o horário selecionado
                setHorariosDisponiveis(horariosDisponiveis.filter((horario) => horario !== selectedTime));
                // Atualizar as reservas para o dia selecionado
                fetchReservas(selectedDay);
            } catch (error) {
                console.error('Erro ao fazer a reserva:', error);
                setReservationMessage('Erro ao fazer a reserva. Tente novamente.');
            }
        } else {
            console.warn('Selecione uma data e um horário antes de reservar.');
            setReservationMessage('Selecione uma data e um horário antes de reservar.');
        }
    };

    const onDayPress = (day) => {
        setSelectedDay(day.dateString);
        fetchReservas(day.dateString);
    };

    useEffect(() => {
        if (selectedDay) {
            fetchReservas(selectedDay);
        }
    }, [selectedDay]);

    return (
        <S.Container>
            <Calendar
                markedDates={markedDates}
                onDayPress={onDayPress}
            />

            <Picker
                selectedValue={selectedTime}
                onValueChange={(itemValue) => setSelectedTime(itemValue)}
            >
                <Picker.Item label="Selecione o horário" value="" />
                {horariosDisponiveis.map((horario, index) => (
                    <Picker.Item key={index} label={horario} value={horario} />
                ))}
            </Picker>

            <S.ListaBotao onPress={reservarHorario} style={{ backgroundColor: buttonColor }}>
                <S.ListaText>{buttonColor === '#00FF00' ? 'Reservado' : 'Reservar Horário'}</S.ListaText>
            </S.ListaBotao>

            {reservationMessage ? <S.ListaAviso>{reservationMessage}</S.ListaAviso> : null}
        </S.Container>
    );
};
