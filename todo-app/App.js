import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import DoneTodoItem from './components/doneTodoItem';
import AddTodo from './components/addTodo';
// import Sandbox from './components/sandbox';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy book', key: '1' },
    { text: 'create mobile app', key: '2' },
    { text: 'prepare for interview', key: '3' },
    { text: 'work', key: '4' },
  ])

  const [doneTodos, setDoneTodos] = useState([])

  // Add new todo to the list
  const handleButtonPress = (newTodo) => {
    if (newTodo.length > 3)
      setTodos([...todos, { text: newTodo, key: Math.random().toString() }])
    else
      Alert.alert('OOPS!', 'Todo must be atleast 3 characters long.', [
        { text: 'Gotcha!', onPress: () => console.log('alert closed.') }
      ])
  }

  // Removes task fron todos and adds it to doneTodos list
  const taskPressHandler = (item) => {
    setDoneTodos([...doneTodos, item])
    setTodos(prevTodos => prevTodos.filter(p => p.key != item.key))
  }

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()} >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleButtonPress={handleButtonPress} />
          <Text style={styles.subTitle}>Todos</Text>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} taskPressHandler={taskPressHandler} />
              )}
            />
          </View>
          <Text style={styles.subTitle}>Done Tasks</Text>
          <View style={styles.list}>
            <FlatList
              data={doneTodos}
              renderItem={({ item }) => <DoneTodoItem item={item} />}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  list: {
    flex: 1,
    marginBottom: 16,
  },
  subTitle: {
    fontWeight: 'bold',
    color: "#6800b3",
    fontSize: 16,
    paddingVertical:10
  }
});
