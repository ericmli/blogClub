import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import AppContext from '../../service/AppContext';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Home() {
  const token = AsyncStorage.getItem('token');

  console.log(token)
  const { date } = useContext(AppContext);
  return (
    <View style={styles.container}>
      
          {/* {date.map((item, index) =>{
           return ( 
           <View key={index}>
              <Text>Hi,{item.id}</Text>
            </View>
            )
          })} */}
          <Text key={date}>Hi, {date.id}</Text>
    </View>
  );
}