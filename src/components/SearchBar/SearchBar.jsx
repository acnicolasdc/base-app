import React from 'react'
import {  View, Text } from 'react-native'
import styles from '../SearchBar/SearchBar.style';

const SearchBar = () => {
 const styleSheet = styles();
    return (
        <View style={styleSheet.searchBar}>
            <Text>Funciona</Text>
        </View>
    )
}

export default SearchBar
