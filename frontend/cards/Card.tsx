import React from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface CardProps {
  image: ImageSourcePropType
  title: string
  whatsapp?: string
  instagram?: string
  linkedin?: string
}

const Card = (props: CardProps) => (
  <View style={styles.cardContainer}>
    <Image source={props.image} style={styles.image} />
    <View style={styles.rightBoxContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.contactDetailsContainer}>
        {props.whatsapp && (
          <Text style={{ marginRight: 10 }}>{props.whatsapp}</Text>
        )}
        {props.instagram && (
          <Text style={{ marginRight: 10 }}>{props.instagram}</Text>
        )}
        {props.linkedin && <Text>{props.linkedin}</Text>}
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    marginTop: 20,
  },
  contactDetailsContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  rightBoxContainer: {
    flex: 1,
    flexDirection: 'column',
  },
})

export default Card
