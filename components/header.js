import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = () => {
  return <View style={styles.header}>
    <Text style={styles.title}>My TODOs</Text>
  </View>
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: '#6800b3'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Header
