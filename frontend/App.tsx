import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Card from './cards/Card'

export default function App() {
  return (
    <SafeAreaView>
      <Card
        image={require('./assets/favicon.png')}
        title="John Doe"
        whatsapp="1234"
        instagram="@johndoe"
        linkedin="John Doe"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
