import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './pages/homeScreen/homeScreen'
import YourCards from './pages/yourCards/yourCards'
import createCard from './pages/createCard/createCard'
import CardDetails from './pages/cardDetails/cardDetails'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'

export type RootStackParamList = {
  Home: undefined
  YourCards: undefined
  createCard: undefined
  CardDetails: { cardData: any }
  Login: undefined
  Signup: undefined
}

export const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="YourCards" component={YourCards} />
        <Stack.Screen name="createCard" component={createCard} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
      </Stack.Navigator>
    </NavigationContainer>
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
