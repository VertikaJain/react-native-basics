import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const DoneTodoItem = ({ item }) => {
  return <TouchableOpacity>
    <Text style={styles.item}>{item.text}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  item: {
    color:'gray',
    padding: 4,
    marginTop: 16,
    borderColor: '#6800b3',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    textDecorationLine: 'line-through',
    textDecorationColor:'#6800b3'
  }
})

export default DoneTodoItem
