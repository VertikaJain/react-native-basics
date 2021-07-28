import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('vertika')
  const [age, setAge] = useState(5)

  const pressHandler = () => {
    setName('abc')
    setPerson({ name: 'xyz', age: 13 })
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text>Name is <Text style={styles.boldText}>{name}</Text> !</Text>
        <Text>Age is {age} </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='e.g. Vertika'
        onChangeText={(val) => setName(val)}
        multiline>
      </TextInput>
      <TextInput
        style={styles.input}
        placeholder='e.g. 10'
        onChangeText={(val) => setAge(val)}
        keyboardType={'numeric'}>
      </TextInput>

      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={pressHandler} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: "pink",
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    padding: 8,
    width: 200
  }
});
