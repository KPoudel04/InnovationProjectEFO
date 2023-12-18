import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import Card from '../../cards/Card'
import Icon from 'react-native-vector-icons/FontAwesome'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'App'
import RestClient from '../../networking/RestClient'

const YourCards = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const [cards, setCards] = useState<Record<string, any>[]>([])

  useEffect(() => {
    RestClient.instance.getCardsReceived().then((cards) => {
      setCards([...cards])
      console.log('cards', cards)
    })
  })

  const handleCardPress = (cardData: any) => {
    navigation.navigate('CardDetails', { cardData: cardData.card })
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="user" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="plus" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {cards.map((card) => {
          return (
            <TouchableOpacity
              onPress={() => handleCardPress(card)}
              key={card.id}
            >
              <Card title={card.name} key={card.id} />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="home" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesomeIcon name="qrcode" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('YourCards')}
        >
          <FontAwesomeIcon name="database" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerButton: {
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
    margin: 0,
  },
  footerButton: {
    padding: 10,
    margin: 0,
  },
})

export default YourCards
