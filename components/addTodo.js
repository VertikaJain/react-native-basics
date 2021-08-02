import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, View } from 'react-native';

const AddTodo = ({ handleButtonPress }) => {

  const [newTodo, setNewTodo] = useState('')

  const todoChangeHandler = newValue => {
    setNewTodo(newValue)
  }

  return <View>
    <TextInput
      placeholder='Add Todo here...'
      onChangeText={newValue => todoChangeHandler(newValue)}
      style={styles.inputBox}
    />
    <View style={styles.button}>
      <Button title="Add" color="#6800b3" onPress={() => {
        handleButtonPress(newTodo)
      }} />
    </View>
  </View>
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    marginHorizontal: 80
  },
  inputBox: {
    padding: 4,
    marginTop: 16,
    borderBottomColor: '#6800b3',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10
  }
})

export default AddTodo
