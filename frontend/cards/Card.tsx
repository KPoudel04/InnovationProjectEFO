import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import QRCode from 'react-native-qrcode-svg';

interface CardProps {
  title: string
  whatsapp?: string
  instagram?: string
  linkedin?: string
}


const Card = (props: CardProps) => {
  const qrData = JSON.stringify({
    title: props.title,
    whatsapp: props.whatsapp,
    instagram: props.instagram,
    linkedin: props.linkedin,
  });
  return (
  <View style={styles.cardContainer}>
    <View style={styles.qrCodeContainer}>
        <QRCode value={qrData} size={100} />
      </View>
    <View style={styles.rightBoxContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.contactDetailsContainer}>
        {props.whatsapp && (
          <Icon name="whatsapp" style={{ marginRight: 10 }} size={20} color="#075E54" />
          
        )}
        {props.instagram && (
          <Icon name="instagram" style={{ marginRight: 10 }} size={20} color="#C13584" />
        )}
        {props.linkedin && (
          <Icon name="linkedin-square" size={20} color="#0077B5" />
        )}
      </View>
    </View>
  </View>
  );
}

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
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  qrCodeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'black', 
    borderRadius: 10,
    margin: 10,
  },
})

export default Card
