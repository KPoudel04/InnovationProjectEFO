import { useNavigation } from '@react-navigation/native'
import RestClient from '../../networking/RestClient'
import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'App'

const CreateNewCardScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const [activeTab, setActiveTab] = useState('CV')
  const [cvState, setCvState] = useState({
    firstName: '',
    lastName: '',
    title: '',
    phone: '',
    email: '',
    city: '',
    birthday: '',
    nationality: '',
    experience: '',
    education: '',
    skills: '',
    cardName: '',
  })
  const [companyState, setCompanyState] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    address: '',
    yelp: '',
  })
  const [productState, setProductState] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
  })

  const handleSubmit = () => {
    let cardData: Record<string, string>
    if (activeTab === 'CV') {
      cardData = { ...cvState, name: cvState.cardName }
    } else if (activeTab === 'company') {
      cardData = companyState
    } else {
      cardData = productState
    }
    RestClient.instance
      .createCard(cardData, activeTab)
      .then(async () => RestClient.instance.reloadCards())
      .then(() => navigation.goBack())
  }

  const renderForm = () => {
    switch (activeTab) {
      case 'CV':
        return (
          <View>
            <TextInput
              placeholder="First name *"
              value={cvState.firstName}
              onChangeText={(text) =>
                setCvState({ ...cvState, firstName: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Last name *"
              value={cvState.lastName}
              onChangeText={(text) =>
                setCvState({ ...cvState, lastName: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Title *"
              value={cvState.title}
              onChangeText={(text) => setCvState({ ...cvState, title: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Phone *"
              value={cvState.phone}
              onChangeText={(text) => setCvState({ ...cvState, phone: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Email *"
              value={cvState.email}
              onChangeText={(text) => setCvState({ ...cvState, email: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="City *"
              value={cvState.city}
              onChangeText={(text) => setCvState({ ...cvState, city: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Birthday *"
              value={cvState.birthday}
              onChangeText={(text) =>
                setCvState({ ...cvState, birthday: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Nationality *"
              value={cvState.nationality}
              onChangeText={(text) =>
                setCvState({ ...cvState, nationality: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Experience *"
              value={cvState.experience}
              onChangeText={(text) =>
                setCvState({ ...cvState, experience: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Education *"
              value={cvState.education}
              onChangeText={(text) =>
                setCvState({ ...cvState, education: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Skills *"
              value={cvState.skills}
              onChangeText={(text) => setCvState({ ...cvState, skills: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Card Name *"
              value={cvState.cardName}
              onChangeText={(text) =>
                setCvState({ ...cvState, cardName: text })
              }
              style={styles.input}
            />
          </View>
        )
      case 'company':
        return (
          <View>
            <TextInput
              placeholder="Company Name *"
              value={companyState.name}
              onChangeText={(text) =>
                setCompanyState({ ...companyState, name: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Title *"
              value={companyState.title}
              onChangeText={(text) =>
                setCompanyState({ ...companyState, title: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Phone *"
              value={companyState.phone}
              onChangeText={(text) =>
                setCompanyState({ ...companyState, phone: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Email *"
              value={companyState.email}
              onChangeText={(text) =>
                setCompanyState({ ...companyState, email: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Address *"
              value={companyState.address}
              onChangeText={(text) =>
                setCompanyState({ ...companyState, address: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Yelp"
              value={companyState.yelp}
              onChangeText={(text) =>
                setCompanyState({
                  ...companyState,
                  yelp: text,
                })
              }
              style={styles.input}
            />
          </View>
        )
      case 'product':
        return (
          <View>
            <TextInput
              placeholder="Product Name *"
              value={productState.name}
              onChangeText={(text) =>
                setProductState({ ...productState, name: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Product Description *"
              value={productState.description}
              onChangeText={(text) =>
                setProductState({ ...productState, description: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Phone *"
              value={productState.phone}
              onChangeText={(text) =>
                setProductState({ ...productState, phone: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Email *"
              value={productState.email}
              onChangeText={(text) =>
                setProductState({ ...productState, email: text })
              }
              style={styles.input}
            />
          </View>
        )
      default:
        return null
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create New</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab('CV')}>
            <Text style={activeTab === 'CV' ? styles.tabActive : styles.tab}>
              CV
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('company')}>
            <Text
              style={activeTab === 'company' ? styles.tabActive : styles.tab}
            >
              Company
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('product')}>
            <Text
              style={activeTab === 'product' ? styles.tabActive : styles.tab}
            >
              Product
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formContainer}>
        {renderForm()}
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
  },
  tab: {
    padding: 10,
    color: 'grey',
  },
  tabActive: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    color: 'blue',
  },
  formContainer: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
})

export default CreateNewCardScreen
