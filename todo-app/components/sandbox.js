import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
}

export default Sandbox

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'stretch',
    backgroundColor: 'pink',
    paddingTop: 40
  },
  boxOne: {
    flex:1,
    backgroundColor: 'yellow',
    padding: 10
  },
  boxTwo: {
    flex:2,
    backgroundColor: 'blue',
    padding: 20
  },
  boxThree: {
    flex:1,
    backgroundColor: 'red',
    padding: 30
  },
  boxFour: {
    flex:4,
    backgroundColor: 'green',
    padding: 40
  },
})