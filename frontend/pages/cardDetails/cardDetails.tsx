import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg'; 

const CardDetails= ({ route }:any) => {
  const { cardData } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>{cardData.title}</Text>
      <Text style={styles.info}>API Information</Text>
      {/*PUT DB INFO HERE*/}
      <Text style={styles.editInformation}>Edit Information</Text>
      <QRCode value={JSON.stringify(cardData)} size={200} />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: 'grey',
  },
  editInformation: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
});

export default CardDetails;
