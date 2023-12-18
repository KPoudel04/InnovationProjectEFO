import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import RestClient from '../../networking/RestClient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'App';

const YelpConnectionScreen = ({ route }: any) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { cardId, cardType } = route.params;
  const [yelpBusinessId, setYelpBusinessId] = useState('');

  const handleUpdateCardWithYelp = () => {
    RestClient.instance
      .updateCardWithYelp(cardId, yelpBusinessId, cardType)
      .then(() => {
        console.log('Card updated successfully with Yelp business ID:', yelpBusinessId);
        navigation.goBack();
      })
      .catch((error) => {
        console.error('Error updating card with Yelp business ID:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Yelp Business ID"
        value={yelpBusinessId}
        onChangeText={setYelpBusinessId}
      />
      <Button title="Update Card with Yelp ID" onPress={handleUpdateCardWithYelp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default YelpConnectionScreen;
