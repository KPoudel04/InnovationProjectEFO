import React from 'react'
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

const HomeScreen = () => {
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
        <Card
          title="Business"
          whatsapp="WhatsApp"
          instagram="Instagram"
          linkedin="LinkedIn"
        />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="home" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesomeIcon name="qrcode" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
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
  },
  footerButton: {
    padding: 10,
  },
})

export default HomeScreen
