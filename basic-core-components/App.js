import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

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

  return (
    <View style={styles.container}>
      {<FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={colors}
        renderItem={({ item }) => ( // has to be named as "item"
          <Text style={colorStyles(item.name)}>{item.name}</Text>
        )}
      />}

      <ScrollView>
        {colors.map(color =>
          <Text key={color.id} style={colorStyles(color.name)}>{color.name}</Text>
        )}
      </ScrollView>
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