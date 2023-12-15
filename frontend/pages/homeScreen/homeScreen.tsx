import React, { useEffect } from 'react'
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
import Header from '../../components/header'
import Icon from 'react-native-vector-icons/FontAwesome'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'App'
import RestClient from '../../networking/RestClient'

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const [cards, setCards] = React.useState<Record<string, any>[]>([])
  const [selectedCard, setSelectedCard] = React.useState(null)
  const handleCardPress = (cardData: any) => {
    setSelectedCard(cardData)
    navigation.navigate('CardDetails', { cardData: cardData.card })
  }

  useEffect(() => {
    RestClient.instance.reloadCards().then((cards) => {
      setCards(RestClient.instance.cards)
      console.log(cards)
    })
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        {cards.map((card) => (
          <TouchableOpacity
            onPress={() => handleCardPress(card)}
            key={card.card.id}
          >
            <Card
              title={card.card.name}
              whatsapp={card.card.whatsapp}
              instagram={card.card.instagram}
              linkedin={card.card.linkedin}
              key={card.card.id}
            />
          </TouchableOpacity>
        ))}
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

export default HomeScreen
