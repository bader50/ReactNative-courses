import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

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
    setTodos((prevPeople)=> {
      return prevPeople.filter((person)=>(person.id != id))
    })
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={ (item) => item.id}
        data={todos}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {people.map(item => (
          <View key={item.key} style={styles.list}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:40,
    paddingHorizontal:4,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  list: {
    backgroundColor:'pink',
    padding:20,
    marginTop:20,
  },
  text:{
    fontSize:24,
    backgroundColor:'pink',
    padding:20,
    margin:20,
  },
});
