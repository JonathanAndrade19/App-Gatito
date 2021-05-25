import React from 'react';

import { SafeAreaView, StatusBar, Text } from 'react-native';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "De Banho sempre uma vez por semana!"
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Seu Gato precisa de duas dose!"
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose por ano!"
    }
];

export default function Servicos() {
    return <SafeAreaView>
        <StatusBar/>
        <Text>Serviços!</Text>
    </SafeAreaView>
}