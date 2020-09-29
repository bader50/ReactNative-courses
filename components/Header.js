import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header (){
   return(
   <View style={styles.header}>
        <Text style={styles.text}>
            My TodoApp
        </Text>
    </View>
   )}

const styles = StyleSheet.create({
    header : {
        backgroundColor: 'coral',
        paddingTop:38,
        height:80,
        justifyContent:"center",
    },

    text : {
        fontWeight:"bold",
        color: '#fff',
        textAlign:"center",
    },
});