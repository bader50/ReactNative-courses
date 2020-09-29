import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodos ({submitHandler}) {

    const [todo, setTodo] = useState('');

    const changeHandler = (val) => {
        setTodo(val)
    }

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="add todos..."
                onChangeText={changeHandler}
                value={todo}
            />
            <Button onPress={()=> {submitHandler(todo); setTodo('')}} title='add todos' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth:1,
        borderColor:"#bbb",
        marginBottom:8,
        paddingHorizontal:8,
        
    },
    form:{
        margin:30,
    },
})