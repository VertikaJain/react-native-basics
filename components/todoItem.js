import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TodoItem = ({ item, taskPressHandler }) => {
  return <TouchableOpacity onPress={() => taskPressHandler(item)}>
    <Text style={styles.item}>{item.text}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginTop: 16,
    borderColor: '#6800b3',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10
  }
})

export default TodoItem
