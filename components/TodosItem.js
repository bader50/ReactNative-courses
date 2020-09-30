import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodosItem ({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="#333"/>
                <Text style={styles.textItem}>{item.text}</Text>
            </View>
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
        flexDirection:"row",
    },

    textItem:{
        marginLeft:10,
    },
})