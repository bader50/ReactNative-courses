import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodos from './components/AddTodos';
import Header from './components/Header';
import TodosItem from './components/TodosItem';

export default function App() {
  const [todos , setTodos] = useState([
    {text:'buy coffee' , id: '1'},
    {text:'create an app' , id: '2'},
    {text:'buy a kebab' , id: '3'},
    {text:'sleep well' , id: '4'},
    {text:'do some sport' , id: '5'},
    {text:'stop being tired' , id: '6'},
  ]);

  const pressHandler = (id) => {
    setTodos((prevTodos)=> {
      return prevTodos.filter((todo)=>(todo.id != id))
    })
  }

  const submitHandler = (text) => {
    
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text, id: Math.random().toString()},
          ...prevTodos
        ];
      })
    } else {
      Alert.alert(title="OOPS!!", message="Todos must contains at least 3 caracters", 
      [{text:"Understood", onPress:(() => console.log("console closed"))},])
    }

    
  }
  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log("dismiss keyboard")
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header/>
          <View style={styles.content}>
          {/* to form */}
          <AddTodos submitHandler ={submitHandler}/>
            <View style={styles.list}>
              <FlatList
                keyExtractor={ (item) => item.id}
                data={todos}
                renderItem={({item}) => (
                  <TodosItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>

        {/* <ScrollView>
          {people.map(item => (
            <View key={item.key} style={styles.list}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          ))}
        </ScrollView> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  list: {
    paddingHorizontal:40,
  },
  content:{
    marginTop:10,
  },
});
