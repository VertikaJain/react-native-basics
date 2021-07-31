import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Touchable, TouchableOpacity } from 'react-native';

const colors = [
  { name: 'red', id: '1' },
  { name: 'blue', id: '2' },
  { name: 'orange', id: '3' },
  { name: 'purple', id: '4' },
  { name: 'yellow', id: '5' },
  { name: 'green', id: '6' },
  { name: 'pink', id: '7' },
  { name: 'brown', id: '8' },
]

export default function App() {

  const pressHandler = (id) => {
    console.log(id);
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={colors}
        renderItem={({ item }) => ( // has to be named as "item"
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={colorStyles(item.name)}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});

const colorStyles = (color) => {
  return {
    marginTop: 20,
    padding: 30,
    backgroundColor: color,
    color: "white",
    marginHorizontal: 10
  }
}