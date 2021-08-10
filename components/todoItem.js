import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({ item, taskPressHandler }) => {
  return <TouchableOpacity >
    <View style={styles.item}>
      <MaterialIcons name="delete" size={16} color="#6800b3" onPress={() => taskPressHandler(item)}></MaterialIcons>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginTop: 16,
    borderColor: '#6800b3',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10
  },
  itemText: {
    marginLeft: 10
  }
})

export default TodoItem
