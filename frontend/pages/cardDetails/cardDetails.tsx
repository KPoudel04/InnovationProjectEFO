import React from 'react'
import { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import RestClient from '../../networking/RestClient'
import QRCode from 'react-native-qrcode-svg'

interface YelpBusinessDetails {
  name: string
  rating: number
  price: string
  phone: string
  location: {
    address1: string
  }
}

const CardDetails = ({ route, navigation }: any) => {
  const { cardData } = route.params
  const [yelpData, setYelpData] = useState<YelpBusinessDetails | null>(null)

  const handleConnectYelp = () => {
    navigation.navigate('YelpConnection', { cardId: cardData.id })
  }

  useEffect(() => {
    if (cardData.yelp) {
      RestClient.instance
        .getYelpBusinessDetails(cardData.yelp)
        .then((data) => {
          setYelpData(data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [cardData])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>{cardData.title}</Text>
      {yelpData && (
        <View style={styles.yelpContainer}>
          <Text style={styles.yelpInfo}>{yelpData.name}</Text>
          <Text style={styles.yelpDetail}>Phone: {yelpData.phone}</Text>
          <Text style={styles.yelpDetail}>Price: {yelpData.price}</Text>
          <Text style={styles.yelpDetail}>Rating: {yelpData.rating}</Text>
          <Text style={styles.yelpDetail}>
            Address: {yelpData.location.address1}
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.connectButton}
        onPress={handleConnectYelp}
      >
        <Text style={styles.connectButtonText}>Connect with Yelp</Text>
      </TouchableOpacity>
      <View style={styles.qrCodeContainer}>
        <QRCode value={cardData.id} size={200} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  yelpContainer: {
    marginBottom: 20,
  },
  yelpInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a73e8',
    marginBottom: 5,
  },
  yelpDetail: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  connectButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  connectButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  qrCodeContainer: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
})

export default CardDetails
