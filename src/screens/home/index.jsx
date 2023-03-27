import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import AppContext from '../../service/AppContext';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/EvilIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Home() {
  // Função para o token não voltar com valor nulo
  const [nameToken, setNameToken] = useState('');
  const [emailToken, setEmailToken] = useState('');

  function metReplace(value){
    return value.replace(/"/g, '')
  }

  useEffect(() => {
    async function getToken() {
      const name = await AsyncStorage.getItem('name')
      setNameToken(name)
      const email = await AsyncStorage.getItem('email')
      setEmailToken(email)
    }
    getToken();
  }, []);

  const { date } = useContext(AppContext);
  const renderItem = ({ item }) => (
    <View style={styles.containerList}>
      <View style={styles.border}>
      <Image source={{uri : item.photo }} style={styles.imageList} />
      <Icon name={ item.icon } size={20} color={'white'} style={styles.iconList} />
      </View>
      <Text style={styles.textList}>{item.name}</Text>

    </View>
  );
  const renderSeparator = () => (
    <View style={{ height: 2, backgroundColor: 'red' }} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.containerNameIcon}>
          <Text style={styles.textName}>Hi, {metReplace(nameToken)}!</Text>
           <TouchableOpacity style={styles.iconTop}>
             <Icon name={'bell'} size={36} color={'black'} style={{ marginLeft: 'auto', marginBottom : 10 }} />
             <Text style={styles.textTop}>2</Text>
           </TouchableOpacity>
      </View>
      <Text style={{fontSize: 24, color: 'black', marginLeft: '10%'}}>Explore today's</Text>


      <FlatList
        data={date}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        style={styles.flatStyle}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
}