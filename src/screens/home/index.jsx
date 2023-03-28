import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import AppContext from '../../service/AppContext'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/EvilIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DATA = [
  {
    id: 1,
    title: 'Technologic',
    photo: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dnIlMjBodW1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    title: 'Adventure',
    photo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
  }
]

export function Home() {
  // Função para o token não voltar com valor nulo
  const [nameToken, setNameToken] = useState('')

  function metReplace(value) {
    return value.replace(/"/g, '')
  }

  useEffect(() => {
    async function getToken() {
      const name = await AsyncStorage.getItem('name')
      setNameToken(name)
    }
    getToken()
  }, [])

  const { date, fetchData } = useContext(AppContext)
  fetchData('/users')

  const renderItem = ({ item }) => (
    <View style={styles.containerList}>
      <View style={styles.border}>
        <Image source={{ uri: item.photo }} style={styles.imageList} />
        <Icon name={item.icon} size={20} color={'white'} style={styles.iconList} />
      </View>
      <Text style={styles.textList}>{item.name}</Text>

    </View>
  )

  const listAdd = ({ item }) => (
    <View style={styles.listMainList}>
      <Image source={{ uri: item.photo }} style={styles.imageMainList} />
      <Text style={styles.textMainList}>{item.title}</Text>
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.containerNameIcon}>
          <Text style={styles.textName}>Hi, {metReplace(nameToken)}!</Text>
          <TouchableOpacity style={styles.iconTop}>
            <Icon name={'bell'} size={36} color={'black'} style={{ marginLeft: 'auto', marginBottom: 10 }} />
            <Text style={styles.textTop}></Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 24, color: 'black', fontWeight: 600 }}>Explore</Text>

      </View>
      <FlatList
        data={date}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        style={styles.flatStyle}
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={DATA}
        renderItem={listAdd}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.flatStyle}
      />
      <View style={styles.body}>
        <Text style={{ color: '#0D253C', fontSize: 20, fontWeight: 500 }}>Latest News</Text>
      </View>
    </ScrollView>
  )
}
