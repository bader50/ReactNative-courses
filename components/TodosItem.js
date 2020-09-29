import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodosItem ({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        borderWidth:1,
        borderColor:"#bbb",
        borderStyle:"dashed",
        borderRadius:10,
        marginTop:16,
        padding:16,
    },
})