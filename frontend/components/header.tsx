import React from "react";
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import {RootStackParamList} from "../App"
import { NavigationProp } from '@react-navigation/native';

type HeaderProps = {
  navigation: NavigationProp<RootStackParamList>;
};
 const Header = ({ navigation }: HeaderProps) => {
    return (
          <View style={styles.header}>
            <TouchableOpacity style={styles.headerButton}>
              <Icon name="user" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton} onPress={()=>navigation.navigate('createCard')}>
              <Icon name="plus" size={20} color="#000" />
            </TouchableOpacity>
          </View>
    );
}

const styles = StyleSheet.create({
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
});
export default Header;