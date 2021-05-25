import React from 'react';

import { SafeAreaView, StatusBar, Text, FlatList } from 'react-native';

import Item from './Item';

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
        descricao: "O seu Gato precisa de duas dose da Vacina V4, por Ano!"
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "O seu Gato precisa de uma dose da Vacina Antirrábica, por Ano!"
    }
];

export default function Servicos() {
    return <SafeAreaView>
        <StatusBar/>
        <Text>Serviços!</Text>

        <FlatList
            data={servicos}
            renderItem={({item}) => <Item {...item} />}
            keyExtractor={(id) => String(id)}
        />
    </SafeAreaView>
}