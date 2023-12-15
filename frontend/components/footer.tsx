// import React from "react";
// import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

// const Footer = () => {
//     const navigation = useNavigation();
//     return (
//     <View style={styles.footer}>
//         <TouchableOpacity style={styles.footerButton}>
//           <Icon name="home" size={20} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton}>
//           <Icon name="search" size={20} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton}>
//           <FontAwesomeIcon name="qrcode" size={24} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('YourCards')}>
//           <FontAwesomeIcon name="database" size={24} color="#000" />
//         </TouchableOpacity>
//       </View>
//     );
// }
// const styles = StyleSheet.create({
//     footer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         paddingVertical: 10,
//         borderTopWidth: 1,
//         borderTopColor: '#D9D9D9',
//         margin:0
//       },
//       footerButton: {
//         padding: 10,
//         margin: 0,
//       },
// });
// export default Footer;