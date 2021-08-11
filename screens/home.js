import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default Home = () => {
  return <View style={styles.container}>
    <Text style={styles.text}>home screen</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  text:{
    fontFamily:'nunito-bold'
  }
})
