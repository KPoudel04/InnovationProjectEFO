import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import CardDetails from './pages/cardDetails/cardDetails'
import createCard from './pages/createCard/createCard'
import HomeScreen from './pages/homeScreen/homeScreen'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import YelpConnectionScreen from './pages/yelpConnectionScreen/yelpConnectionScreen'
import YourCards from './pages/yourCards/yourCards'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import QRCodeScreen from './qr-code-scanner/QRCodeScreen'

export type RootStackParamList = {
  Home: undefined
  YourCards: undefined
  createCard: undefined
  CardDetails: { cardData: any }
  Login: undefined
  Signup: undefined
  YelpConnection: { cardData: any }
  QR: undefined
}

export const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator()

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
        <Stack.Screen name="YelpConnection" component={YelpConnectionScreen} />
        <Stack.Screen name="QR" component={QRCodeScreen} />
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
